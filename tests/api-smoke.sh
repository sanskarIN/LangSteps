#!/usr/bin/env bash
# Integration smoke checks against the optional, locally hosted ASP.NET Core API.
set -euo pipefail

base_url="http://127.0.0.1:5099"
log_file="$(mktemp)"
dotnet run --project server/LangSteps.Server/LangSteps.Server.csproj \
  --configuration Release --no-build --no-launch-profile \
  -- --urls "$base_url" >"$log_file" 2>&1 &
server_pid=$!

cleanup() {
  kill "$server_pid" 2>/dev/null || true
  wait "$server_pid" 2>/dev/null || true
  rm -f "$log_file"
}
trap cleanup EXIT

ready=false
for attempt in $(seq 1 30); do
  if curl --silent --fail "$base_url/api/health" >/dev/null; then
    ready=true
    break
  fi
  if ! kill -0 "$server_pid" 2>/dev/null; then
    cat "$log_file"
    exit 1
  fi
  sleep 1
done
if [ "$ready" != true ]; then
  cat "$log_file"
  echo "LangSteps API did not become ready" >&2
  exit 1
fi

# Question downloads must not disclose answers or the post-submission explanation.
curl --silent --show-error --fail "$base_url/api/quiz/python" |
  jq -e 'type == "array" and length > 0 and all(.[]; has("options") and (has("answer") | not) and (has("explanation") | not))' >/dev/null

# Partial but valid responses are scored; answer explanations are returned only then.
curl --silent --show-error --fail \
  -H 'Content-Type: application/json' \
  -d '{"language":"python","answers":{"1":1},"timeSpentSeconds":30}' \
  "$base_url/api/quiz/submit" |
  jq -e '.total > 0 and (.review | length > 0) and (.review[0] | has("correctOption") and has("explanation"))' >/dev/null

reject_submission() {
  local payload="$1"
  local code
  code="$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' \
    -H 'Content-Type: application/json' -d "$payload" "$base_url/api/quiz/submit")"
  if [ "$code" != "400" ]; then
    echo "Expected HTTP 400 for invalid quiz submission, got $code" >&2
    exit 1
  fi
}

reject_submission '{"language":"python","answers":{},"timeSpentSeconds":30}'
reject_submission '{"language":"python","answers":{"999":0},"timeSpentSeconds":30}'
reject_submission '{"language":"python","answers":{"1":99},"timeSpentSeconds":30}'

# The public profile API must no longer advertise Threads.
curl --silent --show-error --fail "$base_url/api/profile/socials" |
  jq -e 'has("github") and (has("threads") | not)' >/dev/null

echo "LangSteps API quiz and social profile smoke checks passed."
