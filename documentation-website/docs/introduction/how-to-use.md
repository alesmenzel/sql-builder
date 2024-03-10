---
sidebar_position: 2
---

# How to use

The package provides a few ways to build the query, here is a simple join example with a condition.

> You can pass any value to the `.where()` clause without worrying about SQL injection, the values are
> replaced with parameters (`$1, $2, ...`).

```js
import { select, Op } from '@alesmenzel/sql-builder'

const { sql, replacements } = select(['field_a', 'field_b', 'field_c'])
  .from('my_table', (table) =>
    table
      .join({
        tableName: 'table_b',
        joinType: 'USING',
        rawCondition: 'field_b',
      })
      .join({
        tableName: 'table_c',
        type: 'LEFT OUTER',
        joinType: 'ON',
        rawCondition: 'table_b.field_c = table_c.field_x',
      })
  )
  .where({
    field_b: 'value',
    field_d: true,
    field_e: 1000,
  })
  .builder.output()

// TODO: Add the example output
```
