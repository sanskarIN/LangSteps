window.LANGSTEPS_COURSE = {
  "slug": "go",
  "title": "Go Mastery",
  "summary": "15 hands-on lessons from syntax to goroutines, testing, and web services. Examples are educational snippets; this page does not run server-side code.",
  "lessons": [
    {
      "id": "hello",
      "category": "Foundations",
      "title": "Your first Go program",
      "summary": "Run an entry-point function with the standard fmt package.",
      "explanation": "Go programs start in package main and execute main(). Use go run main.go after installing Go.",
      "code": "package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello, LangSteps!\") }",
      "challenge": "Change the greeting and run it from your terminal.",
      "level": "Beginner"
    },
    {
      "id": "variables",
      "category": "Foundations",
      "title": "Variables and constants",
      "summary": "Learn var, short declarations and inferred types.",
      "explanation": "Use := inside functions for concise initialization. const declares values that cannot change; explicit types improve API clarity.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  language := \"Go\"\n  var count int = 3\n  const stable = true\n  fmt.Println(language, count, stable)\n}",
      "challenge": "Try declaring a float64, then print its value.",
      "level": "Beginner"
    },
    {
      "id": "control",
      "category": "Foundations",
      "title": "if, switch and for",
      "summary": "Go uses one looping construct: for.",
      "explanation": "Go has no while keyword; for condition { } covers while-style loops. Switch cases do not fall through by default.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  for n := 1; n <= 3; n++ {\n    if n%2 == 0 { fmt.Println(n, \"even\") } else { fmt.Println(n, \"odd\") }\n  }\n}",
      "challenge": "Rewrite the loop using for n <= 3.",
      "level": "Beginner"
    },
    {
      "id": "slices",
      "category": "Collections",
      "title": "Arrays and slices",
      "summary": "Work with variable-length sequences.",
      "explanation": "Arrays have fixed lengths in their types; slices are flexible views backed by arrays. append may allocate new backing storage.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  scores := []int{5, 8, 13}\n  scores = append(scores, 21)\n  fmt.Println(scores, len(scores), cap(scores))\n}",
      "challenge": "Make a copy with copy(dst, scores) and change only the copy.",
      "level": "Beginner"
    },
    {
      "id": "maps",
      "category": "Collections",
      "title": "Maps and missing keys",
      "summary": "Store key-value data and check presence.",
      "explanation": "Map lookups can return both value and an ok flag. Reading a missing key gives the value type's zero value.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  views := map[string]int{\"go\": 12}\n  count, ok := views[\"rust\"]\n  fmt.Println(count, ok)\n}",
      "challenge": "Test deleting a key and reading it again.",
      "level": "Beginner"
    },
    {
      "id": "structs",
      "category": "Types",
      "title": "Structs and methods",
      "summary": "Model domain data with named fields and methods.",
      "explanation": "Methods attach behavior to types. Value receivers receive copies; pointer receivers can mutate their target.",
      "code": "package main\nimport \"fmt\"\ntype Student struct { Name string; XP int }\nfunc (s *Student) Earn(n int) { s.XP += n }\nfunc main() {\n  s := Student{Name: \"Alex\", XP: 10}\n  s.Earn(5)\n  fmt.Println(s)\n}",
      "challenge": "Add a method that reports whether XP exceeds 20.",
      "level": "Intermediate"
    },
    {
      "id": "interfaces",
      "category": "Types",
      "title": "Implicit interfaces",
      "summary": "Write behavior contracts without explicit implements declarations.",
      "explanation": "A type implements an interface when its method set matches. Small interfaces make code easy to test and compose.",
      "code": "package main\nimport \"fmt\"\ntype Greeter interface { Greet() string }\ntype Person struct { Name string }\nfunc (p Person) Greet() string { return \"Hi \" + p.Name }\nfunc speak(g Greeter) { fmt.Println(g.Greet()) }\nfunc main() { speak(Person{Name:\"Sam\"}) }",
      "challenge": "Define a second type that satisfies Greeter.",
      "level": "Intermediate"
    },
    {
      "id": "errors",
      "category": "Reliability",
      "title": "Idiomatic error handling",
      "summary": "Return errors as ordinary values.",
      "explanation": "Handle errors near their source. Wrapping with %w preserves error identity for errors.Is and errors.As.",
      "code": "package main\nimport (\"fmt\"; \"strconv\")\nfunc main() {\n  n, err := strconv.Atoi(\"42\")\n  if err != nil { fmt.Println(\"invalid input:\", err); return }\n  fmt.Println(n)\n}",
      "challenge": "Try parsing a non-number and trace the error branch.",
      "level": "Intermediate"
    },
    {
      "id": "defer",
      "category": "Reliability",
      "title": "defer and cleanup",
      "summary": "Schedule cleanup at function return.",
      "explanation": "Deferred calls execute in last-in-first-out order. It is especially useful after successful resource acquisition.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  defer fmt.Println(\"cleanup\")\n  fmt.Println(\"work\")\n}",
      "challenge": "Add a second defer and predict the output order.",
      "level": "Intermediate"
    },
    {
      "id": "generics",
      "category": "Types",
      "title": "Generic functions",
      "summary": "Share type-safe algorithms across related types.",
      "explanation": "A constraint limits the allowed operations. Type parameters are resolved by the compiler, not via dynamic casts.",
      "code": "package main\nimport \"fmt\"\nfunc First[T any](items []T) (T, bool) {\n  if len(items) == 0 { var zero T; return zero, false }\n  return items[0], true\n}\nfunc main() { v, ok := First([]string{\"Go\"}); fmt.Println(v, ok) }",
      "challenge": "Try the function with []int and an empty slice.",
      "level": "Intermediate"
    },
    {
      "id": "goroutines",
      "category": "Concurrency",
      "title": "Goroutines and WaitGroup",
      "summary": "Run concurrent tasks and wait for completion.",
      "explanation": "Starting a goroutine does not mean it will finish before main exits. Use sync.WaitGroup to synchronize task lifetime.",
      "code": "package main\nimport (\"fmt\";\"sync\")\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() { defer wg.Done(); fmt.Println(\"worker done\") }()\n  wg.Wait()\n}",
      "challenge": "Start three workers, call Add(3), and check the result.",
      "level": "Intermediate"
    },
    {
      "id": "channels",
      "category": "Concurrency",
      "title": "Channels and communication",
      "summary": "Send typed data safely between goroutines.",
      "explanation": "A send on an unbuffered channel waits for a matching receive. Close channels from the sender side when no more values arrive.",
      "code": "package main\nimport \"fmt\"\nfunc main() {\n  ch := make(chan int)\n  go func() { ch <- 42; close(ch) }()\n  for value := range ch { fmt.Println(value) }\n}",
      "challenge": "Replace the loop with a single receive.",
      "level": "Intermediate"
    },
    {
      "id": "context",
      "category": "Concurrency",
      "title": "Timeouts with context",
      "summary": "Cancel operations when a deadline expires.",
      "explanation": "Propagate context.Context through request-scoped functions and call cancel() to release resources.",
      "code": "package main\nimport (\"context\"; \"fmt\"; \"time\")\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), time.Millisecond)\n  defer cancel()\n  <-ctx.Done()\n  fmt.Println(ctx.Err())\n}",
      "challenge": "Use WithCancel and cancel explicitly instead.",
      "level": "Advanced"
    },
    {
      "id": "tests",
      "category": "Tooling",
      "title": "Table-driven tests",
      "summary": "Express multiple input/output cases in one test.",
      "explanation": "Go's testing package discovers TestX functions in *_test.go. The example belongs in mathutil_test.go alongside the code it tests.",
      "code": "package mathutil\nimport \"testing\"\nfunc Add(a, b int) int { return a + b }\nfunc TestAdd(t *testing.T) {\n  for _, tc := range []struct{ a, b, want int }{{1,2,3},{0,0,0}} {\n    if got := Add(tc.a, tc.b); got != tc.want { t.Fatalf(\"got %d\", got) }\n  }\n}",
      "challenge": "Add a negative-number case and run go test ./... .",
      "level": "Advanced"
    },
    {
      "id": "http",
      "category": "Web",
      "title": "HTTP server and JSON",
      "summary": "Expose an API with the standard library.",
      "explanation": "net/http provides routing and response lifecycles. Set an appropriate content type, handle response encoding errors and report server startup failures; production services should also configure request timeouts.",
      "code": "package main\nimport (\"encoding/json\"; \"log\"; \"net/http\")\nfunc main() {\n  http.HandleFunc(\"/api/health\", func(w http.ResponseWriter, r *http.Request) {\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    if err := json.NewEncoder(w).Encode(map[string]string{\"status\": \"ok\"}); err != nil {\n      log.Printf(\"response failed: %v\", err)\n    }\n  })\n  log.Fatal(http.ListenAndServe(\":8080\", nil))\n}",
      "challenge": "Run it locally and request http://localhost:8080/api/health.",
      "level": "Advanced"
    }
  ]
};
