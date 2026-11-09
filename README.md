# 00-shen.github.io

Personal academic homepage, served by GitHub Pages at <https://00-shen.github.io/>.

The site is three static files with no build step or framework: `index.html` holds the content, `styles.css` the design and `script.js` the mobile menu and section highlight. Layout and visual design are adapted from [pms01260.github.io](https://pms01260.github.io/) with the author's permission.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8080` here and visit <http://localhost:8080>.

## Editing

- **Publications.** There are two groups: *Published & Accepted* and *Under Review*.
  - Each paper is one `<li>`. Put the newest first.
  - The badge is `<span class="pub-type journal">Journal</span>` or `<span class="pub-type conference">Conference</span>`.
  - When a paper is accepted, move its `<li>` into the first group, add the venue and links, and update both `pub-count` numbers.
  - Under review: write `Under review · <venue>`; journals by full name, conferences by acronym.
- **CV.** Hidden for now. To bring it back, add `assets/CV.pdf` and restore the CV card and the CV menu link.
- **Photo.** Replace `assets/profile.jpg` with another square image.
- **Removing a section.** Delete its `<section>`, then delete its links from both nav bars at the top of `index.html`.
