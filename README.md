# DBMS Notes

[Open the notebook](https://rustem-garr.github.io/dbms-notes/)

15 connected notes, 240 concept cards and **154 independent practice questions**. Concept counts vary from 12–20 per note according to coverage. The concept explanation and its question share one clickable card; the reverse shows only the answer. Each note also has 10–12 independent tasks: 6 multiple-choice questions, 2–4 SQL-writing tasks and 2 written responses. The practice prompts differ from the cards.

Nine worked guides explain report construction, normalization, procedural code, design validation, schedules and recovery. Abbreviations are expanded alongside content and on the terms page.

Two timed sets each contain 30 choices and two integrated written cases. Their multiple-choice items are disjoint between sets but drawn from independent practice; the UI reports previously checked items. Four integrated cases are reserved for timed mode. Answers stay hidden until submission or expiry. The default 90-minute duration is configurable and is not an official time limit. Automatic marks out of 60 and written self-assessment out of 40 remain separate. Timed submissions are retained, not overwritten by restarts.

The dashboard tracks first multiple-choice attempts separately from retries, written drafts, model views and a personal error log. Progress uses browser-local storage (`dbms-notebook-v2`); existing card ratings and drafts are preserved. Clearing site data removes progress.

SQL is a writing workspace, not an execution engine. Equivalent valid answers may differ. Vendor-specific models name their database dialect. Run SQL in the matching database to verify executable behavior.

## Development

Static HTML, CSS and JavaScript served by GitHub Pages from the main branch root. No build dependencies.

- `node --check app.js`
- `node tests.cjs`
- `python3 tests_sql.py`

Checks cover content integrity, independent prompts, progress, timed-mode state and selected portable SQL models with boundary-case data. They do not execute SQL Server or PostgreSQL procedural code.
