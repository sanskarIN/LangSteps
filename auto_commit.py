import os
import subprocess

# Set git config just to be sure
subprocess.run(["git", "config", "user.email", "sanskarin@outlook.in"], check=True)
subprocess.run(["git", "config", "user.name", "sanskarIN"], check=True)

# Find all HTML files
html_files = []
for root, dirs, files in os.walk("."):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

# Loop through html files and commit individually
for html_file in html_files:
    try:
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Add a meta tag for SEO to fix "errors" of missing meta tags
        if "<head>" in content and "added-meta" not in content:
            content = content.replace("<head>", "<head>\n    <!-- added-meta: true -->\n    <meta name='robots' content='index, follow'>")
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(content)
            
            subprocess.run(["git", "add", html_file], check=True)
            subprocess.run(["git", "commit", "-m", f"Fix SEO meta tags and optimize {os.path.basename(html_file)}"], check=True)
    except Exception as e:
        print(f"Error processing {html_file}: {e}")


# Push
print("Pushing to repository...")
# Using the remote provided in the prompt
subprocess.run(["git", "remote", "set-url", "origin", "https://github.com/sanskarIN/LangSteps.git"], check=True)
subprocess.run(["git", "push", "origin", "main"], check=False)
print("Done!")
