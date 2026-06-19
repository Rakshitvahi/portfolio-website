# CLAUDE.md — Portfolio Website

## Architecture

Static single-page website. No build tool, no framework, no package manager. Three files:

- `index.html` — HTML skeleton with empty section containers (sections are populated by JS)
- `script.js` — All content data + DOM rendering logic
- `styles.css` — All styling, dark theme with cyan (`#00bcd4`) as the accent color

**To run:** just open `index.html` in a browser. No server needed.

---

## How content is structured

All content lives in `script.js` as embedded JSON objects — **not in the HTML**.

### Work experience & education → `data` object (script.js:26)
```js
const data = {
  work: { heading, items: [{ title, description, details, logo }] },
  partTimeWork: { heading, items: [...] },
  education: { heading, items: [{ title, description, logo }] }
}
```
- `logo` is a relative path to `assets/` (e.g. `"assets/GE.png"`)
- `details` uses `\n` as a split point — first chunk is always shown, rest is hidden behind a "Read More" button

### Skills section → `skillsData` object (script.js:190)
```js
const skillsData = {
  categories: [{ title, tools: [{ name, iconClass?, imagePath? }] }]
}
```
- Tools use either a `devicon` CSS class (`iconClass`) or a local SVG file (`imagePath`)
- `imagePath` tools render as `<img>` tags; `iconClass` tools render as `<i>` tags

### Projects section (script.js:306)
- Fetched live from the GitHub API: `https://api.github.com/users/RakshitVahi/repos`
- Repos with a description are shown first; repos without are shown last
- Each card also fetches `repo.languages_url` to build the tech stack list
- No caching — API is hit fresh on every page load

---

## DOM structure (index.html)

Each section has an empty container that JS populates:

| Section | Container ID |
|---|---|
| Work experience (full-time) | `#work-container` |
| Work experience (part-time) | `#part-time-container` |
| Skills & Tools | `#skills-container` |
| Education | `#education-container` |
| Projects | `#projects-container` |

Headings for Work and Education are also set via JS (e.g. `#work-heading`, `#education-heading`).

---

## Assets

All images live in `assets/`:

| File | Used for |
|---|---|
| `pic.png` | Profile photo (hero section, circular) |
| `pattern.png` | Body background (tiled, fixed attachment) |
| `GE.png` | GE Healthcare logo |
| `NEU.png` | Northeastern University logo |
| `PES.png` | PESIT university logo |
| `cgi.png` | CGI logo |
| `eka.jpg` | Eka Software Solutions logo |
| `aws.svg` | AWS icon (skills section, no devicon available) |
| `maven.svg` | Maven icon (skills section, no devicon available) |

---

## Styling notes

- Accent color: `#00bcd4` (cyan) — used for buttons, icon defaults, underlines
- Card background: `#101516` (near black)
- Body background: tiled `assets/pattern.png` with `background-attachment: fixed`
- Navbar is sticky, floating pill shape (`width: 45vw`, `border-radius: 30px`), goes to `90vw` on mobile
- Social bar (LinkedIn, Email, GitHub) is a fixed right-edge vertical strip with a pop-up animation
- Cards lift on hover (`translateY(-10px)`) and title turns yellow (`#f5df18`)
- Typing effect in hero cycles through: "a Backend Developer", "a Java Expert", "a RESTful API Developer" (script.js:2)

---

## Where to make changes

| Task | Where |
|---|---|
| Add/edit a job | `data.work.items` array in script.js |
| Add/edit a part-time role | `data.partTimeWork.items` in script.js |
| Add/edit education | `data.education.items` in script.js |
| Add a skill category or tool | `skillsData.categories` in script.js |
| Change typing effect text | `texts` array at script.js:2 |
| Change hero icons | `<div class="skills-item">` in index.html (~line 51) |
| Change contact links | Contact section in index.html (~line 136) and social bar (~line 65) |
| Change colors/layout | styles.css |
| Add a company logo | Drop image in `assets/`, reference path in the data object |
