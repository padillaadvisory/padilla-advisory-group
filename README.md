# Padilla Advisory Group — Website

A fast static site built with [Eleventy](https://www.11ty.dev/). One-page homepage + a weekly blog ("The Downsizing Journal"). Hosted on Netlify, auto-deploys from Git.

---

## Run it locally

```bash
npm install
npm start      # live preview at http://localhost:8080
npm run build  # outputs the finished site to /_site
```

---

## ✍️ Add a blog post (the weekly workflow)

This is the whole job. To publish a new article:

1. Create a file in **`src/blog/posts/`** named `YYYY-MM-DD-a-short-slug.md`
   (e.g. `2026-08-06-what-your-home-costs-you.md`).
2. Start it with this front matter, then write the article in Markdown below it:

   ```markdown
   ---
   title: "Your headline goes here"
   description: "One or two sentences. Shows in search results, the blog list, and social shares."
   date: 2026-08-06
   ---

   Your article body, in plain Markdown. Use ## for section headings,
   **bold**, - bullet lists, 1. numbered lists, and > for pull quotes.
   ```

3. Commit and push. Netlify rebuilds and publishes automatically — usually within a minute.

**That's it.** You never touch HTML. Everything else updates itself:

- the post gets the site's design, author box, and call-to-action
- it's added to the blog index at `/blog/`
- it's added to `sitemap.xml` and the RSS feed at `/feed.xml`
- it gets `BlogPosting` structured data (the schema that helps Google and AI search engines cite it)

### Front matter reference

| Field         | Required | Notes                                                        |
|---------------|----------|--------------------------------------------------------------|
| `title`       | yes      | The headline. Also the SEO title and social title.           |
| `description` | yes      | 1–2 sentences. SEO meta + blog-list excerpt + social summary.|
| `date`        | yes      | `YYYY-MM-DD`. Controls ordering (newest first).              |
| `image`       | no       | Path like `/assets/my-image.jpg` for the social share image. |
| `disclaimer`  | no       | Set to `false` to hide the "not tax/legal advice" footer.    |

> **For the Claude Code job:** output each post as a single Markdown file in
> `src/blog/posts/` using the front matter above, filename `YYYY-MM-DD-slug.md`.
> No HTML, no other files. Commit it and the pipeline handles the rest.

---

## Deploy (one-time setup)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git →** pick the repo.
   Build settings are already defined in `netlify.toml` (build `npm run build`, publish `_site`).
3. Point the domain (`padillaadvisorygroup.com`, registered at Squarespace):
   - In Netlify, add the custom domain.
   - In Squarespace's DNS settings, add the DNS records Netlify shows you.
   - **Keep your Google email (MX) records** in Squarespace DNS so email keeps working.

After that, every `git push` publishes automatically.

---

## Launching a new market later (the franchise clone)

Copy this whole project, then edit **one file** — `src/_data/site.js` — changing the
name, URL, city, phone, email, and address. The homepage, blog, footer, and schema all
read from it. Swap the anchor city (e.g. Los Angeles → Dallas) and you have market #2.

---

## Structure

```
src/
  _data/site.js         ← single source of truth (name, contact, city…)
  _includes/            ← base layout, header, footer, blog-post layout
  assets/               ← logos, portrait, PDF, css, js
  blog/
    index.njk           ← the blog listing page
    posts/*.md          ← ONE MARKDOWN FILE PER ARTICLE (add here)
  index.njk             ← homepage
  thank-you.html        ← playbook download page (after email capture)
  feed.njk, sitemap.njk ← auto-generated feed + sitemap
```
