# Deepti Singh — Portfolio

> Full Stack Developer & Automation Engineer  
> Built with HTML, CSS, JS + Netlify serverless functions (vibe coded with Claude & Lovable)

🌐 **Live:** https://your-name.netlify.app  
📁 **GitHub:** https://github.com/DeeptiSingh1512

---

## 🗂️ Project Structure

```
deepti-portfolio/
├── index.html                  ← Main portfolio page
├── assets/
│   └── deepti.jpg              ← Your photo
├── netlify/
│   └── functions/
│       ├── contact.js          ← Serverless contact form handler
│       └── counter.js          ← Visitor counter (optional)
├── netlify.toml                ← Netlify config
├── .gitignore
└── README.md
```

---

## 🚀 Deploy to GitHub + Netlify (Step by Step)

### Step 1 — Push to GitHub

Open VS Code terminal (or any terminal) in this folder:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "feat: initial portfolio launch"

# 4. Create a new repo on github.com named: deepti-portfolio
#    (Don't add README or .gitignore when creating — we already have them)

# 5. Connect and push
git remote add origin https://github.com/DeeptiSingh1512/deepti-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Netlify (Free)

**Option A — Netlify Drop (fastest, 30 seconds):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `deepti-portfolio/` folder onto the page
3. Done — you get a live URL instantly!

**Option B — Connect GitHub (recommended — auto-deploys on every push):**
1. Go to [app.netlify.com](https://app.netlify.com) → Sign up free
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → authorize → select `deepti-portfolio`
4. Build settings:
   - Build command: *(leave blank)*
   - Publish directory: `.`
5. Click **Deploy site**
6. Every time you `git push`, your site auto-updates!

### Step 3 — Set a custom domain (optional, free)
In Netlify: **Domain settings** → Add custom domain → Follow instructions.

---

## ✉️ Enable the Contact Form

The form uses **Netlify Forms** (completely free — 100 submissions/month):

1. Netlify auto-detects the `data-netlify="true"` attribute on your form
2. Go to Netlify dashboard → **Forms** tab to see all submissions
3. Set up email notifications: **Forms → Settings → Email notifications**

No code changes needed — it works automatically on Netlify!

---

## 🔧 Customise

| What to change | Where |
|---|---|
| Your photo | Replace `assets/deepti.jpg` |
| LinkedIn URL | Search `linkedin.com/in/deepti-singh` in `index.html` |
| Recommendation text | Find `<!-- RECOMMENDATIONS -->` section |
| Project GitHub links | Find `proj-links` sections |
| Add new project | Copy a `.proj-card` block and update content |

---

## 📦 No npm install needed!
This portfolio is pure HTML/CSS/JS — zero dependencies, zero build step.
The Netlify functions use Node.js which Netlify provides automatically.

---

Built with 💜 using Claude (Anthropic) & Lovable.dev
