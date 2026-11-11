# DBMS Notes

[Open the notebook](https://rustem-garr.github.io/dbms-notes/)

Each card teaches a concept, asks a related question, and reveals a model response when flipped. Abbreviations are expanded alongside the content and in the terms page.

Practice includes 90 multiple-choice questions, 32 SQL-writing tasks and 32 written responses. Each note revisits its card questions in practice mode. Mixed practice selects 12 multiple-choice, 4 SQL and 4 written tasks. SQL and written work use model responses and specific self-assessment checklists; SQL is not executed by the website.

Drafts, card ratings and practice progress are stored in your browser. Version 2 uses separate storage from the earlier notebook.

## Development

Static HTML, CSS and JavaScript. No build dependencies. GitHub Pages serves the main branch root.

Run `node tests.cjs` and `python3 tests_sql.py` to validate content, state transitions and selected portable SQL models. Vendor-specific procedural models require their named database engines and are not executed by these checks.
