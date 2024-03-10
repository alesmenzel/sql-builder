import { describe, it, expect } from '@jest/globals'
import { Builder, fn, col, raw, OpOr, OpNot, OpAny, OpAnd, Op } from '../sql-builder'
import { WhereBuilder } from './where-builder'

describe('where-builder', () => {
  it.each([
    {
      createQuery: () =>
        new WhereBuilder(new Builder(), {
          a: 1000,
          b: 'string',
          c: new Date('2010-01-01T10:30:00-05:00'),
          d: true,
          e: fn('lower', ['value-to-lowercase']),
          f: fn('date_part', [raw("'year'"), col('created_time'), 'value']),
        }),
      expected: {
        sql: `WHERE "a" = $1 AND "b" = $2 AND "c" = $3 AND "d" = $4 AND "e" = lower($5) AND "f" = date_part('year', "created_time", $6)`,
        replacements: [
          1000,
          'string',
          new Date('2010-01-01T10:30:00-05:00'),
          true,
          'value-to-lowercase',
          'value',
        ],
      },
    },
    {
      createQuery: () =>
        new WhereBuilder(new Builder(), {
          [OpOr]: [
            {
              [OpNot]: {
                field: 'fieldA',
                filter: {
                  [OpAny]: ['1', '2', '3'],
                  filter: ':list',
                },
              },
            },
            {
              [OpAnd]: {
                a: 1000,
                b: 'string',
                c: new Date('2010-01-01T10:30:00-05:00'),
                d: true,
                e: fn('lower', ['value-to-lowercase']),
                f: fn('date_part', [raw("'year'"), col('created_time'), 'value']),
              },
            },
          ],
        }),
      expected: {
        sql:
          `WHERE NOT "fieldA" = ANY ($1:list) OR ("a" = $2 AND "b" = $3 AND "c" = $4 AND "d" = $5` +
          ` AND "e" = lower($6) AND "f" = date_part('year', "created_time", $7))`,
        replacements: [
          ['1', '2', '3'],
          1000,
          'string',
          new Date('2010-01-01T10:30:00-05:00'),
          true,
          'value-to-lowercase',
          'value',
        ],
      },
    },
    {
      createQuery: () =>
        new WhereBuilder(new Builder(), {
          [Op.$or]: [
            {
              [Op.$not]: {
                field: 'fieldA',
                filter: {
                  [OpAny]: ['1', '2', '3'],
                  filter: ':list',
                },
              },
            },
            {
              [Op.$and]: {
                a: 1000,
                b: 'string',
                c: new Date('2010-01-01T10:30:00-05:00'),
                d: true,
                e: fn('lower', ['value-to-lowercase']),
                f: fn('date_part', [raw("'year'"), col('created_time'), 'value']),
              },
            },
          ],
        }),
      expected: {
        sql:
          `WHERE NOT "fieldA" = ANY ($1:list) OR ("a" = $2 AND "b" = $3 AND "c" = $4 AND "d" = $5` +
          ` AND "e" = lower($6) AND "f" = date_part('year', "created_time", $7))`,
        replacements: [
          ['1', '2', '3'],
          1000,
          'string',
          new Date('2010-01-01T10:30:00-05:00'),
          true,
          'value-to-lowercase',
          'value',
        ],
      },
    },
  ])('generates an example sql query\nSQL: $expected', ({ createQuery, expected }) => {
    const whereBuilder = createQuery()
    expect(whereBuilder.toSQL()).toBe(expected.sql)
    expect(whereBuilder.builder.getReplacements()).toEqual(expected.replacements)
  })
})
