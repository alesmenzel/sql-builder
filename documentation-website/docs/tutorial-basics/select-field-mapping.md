---
sidebar_position: 1
---

# Select field mapping

When writing a search/`GET` endpoint, you usually want the user allow to select specific fields. Some of those fields might even be calculated and do not exist in the database directly.

Let assume the database has the following table:

| `actor_id` (`INTEGER`) | `actor` (`VARCHAR`) | `born_year` (`INTEGER`) | `is_czech` (`BOOLEAN`) |
| ---------------------- | ------------------- | ----------------------- | ---------------------- |
| `1`                    | `Jim Carrey`        | `1962`                  | false                  |
| `2`                    | `Rowan Atkinson`    | `1955`                  | false                  |
| `3`                    | `Milena Dvorská`    | `1938`                  | true                   |

## Select Czech actors born before 1950

```js title="actor-query.js"
import { select } from '@alesmenzel/sql-builder'

// TODO: Prepare examples
```
