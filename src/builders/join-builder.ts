import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { compose, escapeName, parenthesis } from '../utils'
import { Builder } from './builder'

export type JoinItem = {
  tableName: string
  schema?: string
  alias?: string
  type?:
    | 'INNER'
    | 'LEFT'
    | 'RIGHT'
    | 'FULL'
    | 'LEFT OUTER'
    | 'RIGHT OUTER'
    | 'FULL OUTER'
    | 'CROSS'
    | 'NATURAL'
  joinType: 'ON' | 'USING'
  // TODO: This is just raw query
  rawCondition: string
}

export class JoinBuilder extends BuilderBase implements BuilderInterface {
  _joins: JoinItem[] = []

  constructor(builder: Builder) {
    super(builder)
  }

  join(join: JoinItem, { enabled = true }: { enabled?: boolean } = {}) {
    if (enabled) {
      this._joins.push(join)
    }
    return this
  }

  toSQL() {
    return compose(
      this._joins.map(({ type, tableName, schema, alias, joinType, rawCondition }) => {
        return compose([
          type,
          'JOIN',
          compose([schema && escapeName(schema), escapeName(tableName)], '.'),
          alias && `AS ${escapeName(alias)}`,
          type !== 'CROSS' && joinType,
          type !== 'NATURAL' && type !== 'CROSS' && parenthesis(rawCondition),
        ])
      }),
      '\n'
    )
  }

  clone(builder: Builder): BuilderInterface {
    return new JoinBuilder(builder)
  }
}
