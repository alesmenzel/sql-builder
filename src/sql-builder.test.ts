import { describe, it, expect } from '@jest/globals'
import { OpAnd, OpGte, OpIn, OpLike, OpNeq, OpOr, OpRaw, query, select } from './sql-builder'

describe('sql-builder', () => {
  describe('examples', () => {
    it.each([
      {
        createQuery: () =>
          query()
            .with({
              queryName: 'query_name',
              alias: 'some_alias',
              builder: query()
                .select(['x', 'y', 'z'])
                .from('tableC')
                .where({
                  [OpOr]: [
                    {
                      field: 'field1',
                      filter: 'something',
                    },
                    {
                      [OpAnd]: {
                        field2: 123,
                        field3: { [OpGte]: 1000 },
                      },
                    },
                  ],
                }).builder,
            })
            .select(['yolo', 'molo', 'kolo'])
            .from('tableTop')
            .where({
              x: 1,
              y: 2,
              z: 3,
            })
            .limit(100)
            .offset(2000).builder,
        expected: {
          sql:
            'WITH "query_name" AS "some_alias" (SELECT "x", "y", "z"\n' +
            'FROM "tableC"\n' +
            'WHERE "field1" = $1 OR ("field2" = $2 AND "field3" >= $3))\n' +
            'SELECT "yolo", "molo", "kolo"\n' +
            'FROM "tableTop"\n' +
            'WHERE "x" = $4 AND "y" = $5 AND "z" = $6\n' +
            'LIMIT $7\n' +
            'OFFSET $8',
          replacements: ['something', 123, 1000, 1, 2, 3, 100, 2000],
        },
      },
      {
        createQuery: () =>
          select(['a', 'b', 'c'])
            .from('tableA')
            .where({
              fieldA_1: 'something',
              fieldA_2: 1000,
              fieldA_3: true,
              fieldA_4: ['1', '2', '3'],
              fieldA_5: [100, 200, 300],
              fieldB: { [OpNeq]: 'something-else' },
              fieldC: { [OpLike]: '%something-else%' },
              fieldD: { [OpRaw]: 'IS NOT NULL' },
              fieldE: { [OpIn]: ['1', '2', '3'] },
              // TODO: replacement tokens?
              // fieldF: { $in: Builder.$ }, // numeric replacements
              // fieldG: { $in: Builder.$$('name') } // named replacements
            }).builder,
        expected: {
          sql:
            'SELECT "a", "b", "c"\n' +
            'FROM "tableA"\n' +
            `WHERE "fieldA_1" = $1 AND "fieldA_2" = $2 AND "fieldA_3" = $3 AND "fieldA_4" IN ($4) AND ` +
            `"fieldA_5" IN ($5) AND "fieldB" != $6 AND "fieldC" LIKE $7 ESCAPE '|' AND "fieldD" IS NOT NULL AND ` +
            `"fieldE" IN ($8)`,
          replacements: [
            'something',
            1000,
            true,
            ['1', '2', '3'],
            [100, 200, 300],
            'something-else',
            '%something-else%',
            ['1', '2', '3'],
          ],
        },
      },
      {
        createQuery: () =>
          query()
            .with({
              queryName: 'query_name',
              alias: 'some_alias',
              builder: query()
                .select(['x', 'y', 'z'])
                .from('tableC')
                .where({
                  [OpOr]: [
                    {
                      field: 'field1',
                      filter: 'something',
                    },
                    {
                      [OpAnd]: {
                        field2: 123,
                        field3: { [OpGte]: 1000 },
                      },
                    },
                  ],
                }).builder,
            })
            .select(['yolo', 'molo', 'kolo'])
            .from({ tableName: 'tableTop' }, (table) =>
              table
                .join({
                  tableName: 'tableB',
                  alias: 't',
                  type: 'INNER',
                  joinType: 'ON',
                  rawCondition: 'tableTop.x = t.y',
                })
                .join({
                  tableName: 'tableC',
                  type: 'LEFT OUTER',
                  joinType: 'ON',
                  rawCondition: 'tableTop.x = tableB.y',
                })
            )
            .where({
              x: 1,
              y: 2,
              z: 3,
            })
            .limit(100)
            .offset(2000).builder,
        expected: {
          sql:
            'WITH "query_name" AS "some_alias" (SELECT "x", "y", "z"\n' +
            'FROM "tableC"\n' +
            'WHERE "field1" = $1 OR ("field2" = $2 AND "field3" >= $3))\n' +
            'SELECT "yolo", "molo", "kolo"\n' +
            'FROM "tableTop" INNER JOIN "tableB" AS "t" ON (tableTop.x = t.y)\n' +
            'LEFT OUTER JOIN "tableC" ON (tableTop.x = tableB.y)\n' +
            'WHERE "x" = $4 AND "y" = $5 AND "z" = $6\n' +
            'LIMIT $7\n' +
            'OFFSET $8',
          replacements: ['something', 123, 1000, 1, 2, 3, 100, 2000],
        },
      },
    ])('generates an example sql query\nSQL: $expected', ({ createQuery, expected }) => {
      const builder = createQuery()
      expect(builder.toSQL()).toBe(expected.sql)
      expect(builder.getReplacements()).toEqual(expected.replacements)
    })
  })
})
