# DBMS Notes

**Website:** https://rustem-garr.github.io/dbms-notes/

## Study features

- 15 topic notes, with concise explanations and worked examples.
- 184 flip flashcards and 184 multiple-choice questions covering the same concept bank.
- Answer-choice shuffling, explained results, and a review queue for missed questions.
- A full mock with 30 MCQs (60 points) and two self-assessed essays (40 points).
- Four essay exercises with model answers and five-item rubrics.
- Browser-local progress, quiz drafts and essay drafts; responsive layout and dark mode.

Questions are exam-style practice, not predictions of the actual exam. The supplied mock document's distractors were reconstructed. Essay scores are self-assessments. Repeating familiar questions is not proof of exam readiness.

## Scope and sources

The site's Sources page maps each note to course chapters, labs and review questions. Notes 1–8 and 10 contain review-priority topics. Note 12 covers recovery from chapter 22 and Assignment 8 because no separate source folder 12 was supplied. The other topics extend coverage beyond the provided midterm review.

Only original explanations, questions and site code are included. Original PDFs, textbook files, private submissions and personal details are not published.

SQL examples distinguish SQL Server/T-SQL from PostgreSQL/PL/pgSQL. These study examples are not production banking code.

## Development

No build step or package dependencies. Serve this directory with any static HTTP server, for example:

```sh
python3 -m http.server 8000
node tests.cjs
```

- `content.js`: study content and question bank.
- `app.js`: navigation, cards, assessments and local progress.
- `style.css`: responsive visual design.
- `index.html`: application shell.

GitHub Pages serves `main` from the repository root. `.nojekyll` keeps the static files unchanged.

Progress uses the local-storage key `dbms-notebook-v1`. It is device/browser-specific and clearing site data removes it. Starting a quiz replaces the current quiz draft; latest per-note scores remain. Fonts use Google Fonts with system fallbacks; no analytics or account service is included.
