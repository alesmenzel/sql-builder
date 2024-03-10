---
sidebar_position: 3
---

# Limitations

Here is a list of features that are currently unsupported (but could be added in the future).

## Difficulty

- 🌶️🌶️🌶️ - its complicated
- 🌶️🌶️ - medium
- 🌶️ - easy pease

## Priority

- ⭐️⭐️⭐️ - why is not there yet?
- ⭐️⭐️ - would be nice
- ⭐️ - do we really need it though?

## The list

- [ ] 🌶️ `SelectBuilder` currently supports the most used clauses.
  - [ ] ⭐️⭐️⭐️ Add `HAVING`
  - [ ] ⭐️⭐️⭐️ Add `RETURNIGN`
  - [ ] ⭐️⭐️ Add `FOR UPDATE`.
  - [ ] ⭐️ Add `WINDOW`
  - [ ] ⭐️ Add `FETCH`
- [ ] 🌶️/⭐️⭐️⭐️ Add more tests to cover all cases.
- [ ] 🌶️🌶️/⭐️⭐️⭐️ Missing support for `UPDATE`, `INSERT`, `DELETE` (at least most common use cases)
- [ ] 🌶️🌶️/⭐️⭐️⭐️ Auto generate documentation from code (`API` docusaurus tab)
  - [ ] Actually write the docs 😄.
- [ ] 🌶️🌶️/⭐️⭐️⭐️ Examples folder for docusaurus, but they are also used for jest tests.
- [ ] 🌶️🌶️/⭐️⭐️⭐️ Changelogs in docusaurus.
- [ ] 🌶️/⭐️⭐️⭐️ Setup Github pages with docusaurus.
- [ ] 🌶️🌶️/⭐️⭐️ AI playground to generate code from SQL queries
  - [ ] Setup OAuth (maybe something like in Omni Studio?)
- [ ] 🌶️🌶️/⭐️⭐️ VSCode playground to write SQL Builder query and see the output.
  - [ ] 🌶️🌶️/⭐️⭐️ Allow to share a link to a playground (would be awesome for sharing reproductions/debugging)
- [ ] 🌶️🌶️🌶️/⭐️⭐️ Extending the Builder with Typescript types of a concrete database.
  - [ ] Prepare a script that generates types for each table/view and columns as props from the database.
  - [ ] Update SQL Builder to take advantage of the generated types.
