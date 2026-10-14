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

# Add a feature: Scroll to top button in index.html
try:
    with open("index.html", "r", encoding="utf-8") as f:
        content = f.read()
    if "scroll-to-top" not in content:
        content = content.replace("</body>", """
    <!-- Scroll to Top Feature -->
    <button id="scroll-to-top" style="display:none; position:fixed; bottom:20px; right:20px; z-index:99; background:var(--accent1); color:white; border:none; padding:15px; border-radius:50%; cursor:pointer;">↑</button>
    <script>
        window.onscroll = function() {
            var btn = document.getElementById('scroll-to-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };
        document.getElementById('scroll-to-top').onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
    </script>
</body>""")
        with open("index.html", "w", encoding="utf-8") as f:
            f.write(content)
        subprocess.run(["git", "add", "index.html"], check=True)
        subprocess.run(["git", "commit", "-m", "Feature: Add scroll-to-top button in index"], check=True)
except Exception as e:
    print(f"Error adding feature: {e}")

# Push
print("Pushing to repository...")
# Using the remote provided in the prompt
subprocess.run(["git", "remote", "set-url", "origin", "https://github.com/sanskarIN/LangSteps.git"], check=True)
subprocess.run(["git", "push", "origin", "main"], check=False)
print("Done!")
