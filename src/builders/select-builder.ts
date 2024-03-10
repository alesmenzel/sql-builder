import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { BuilderError } from '../constants'
import { list, escapeName, castAs } from '../utils'
import { Builder } from './builder'
import { FromItem, FromJoin, FromBuilder } from './from-builder'
import { RawBuilder } from './raw-builder'

export type SelectFieldNormalized = { fieldName: string; escape?: boolean; castAs?: string }
export type SelectField = string | SelectFieldNormalized
export type SelectFieldMapping = {
  [field: string]: SelectField
}

export class SelectBuilder extends BuilderBase implements BuilderInterface {
  _fields: SelectFieldNormalized[]
  _mapping: SelectFieldMapping

  constructor(builder: Builder, fields: SelectField[], mapping?: SelectFieldMapping) {
    super(builder)
    this._fields = fields.map((field) => {
      if (typeof field === 'string') {
        return { fieldName: field, escape: true } satisfies SelectFieldNormalized
      }
      return field
    })
    this._mapping = mapping
  }

  // mapping = { fieldA: 'column_a', fieldB: { field: 'ARRAY (SELECT id FROM tableX)', escape: false } }
  // TODO: Select from mapping, e.g. new SelectBuilder(builder, fields, mapping)

  from(fromItem: FromItem, fromJoin?: FromJoin) {
    return new FromBuilder(this.builder, fromItem, fromJoin)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    if (!this._fields.length) throw new BuilderError('Empty fields for select.')
    return `SELECT ${list(
      this._fields.map((field) => {
        let name = field.fieldName
        if (field.escape) name = escapeName(field.fieldName)
        if (field.castAs) name = castAs(field.fieldName, field.castAs)
        return name
      })
    )}`
  }

  clone(builder: Builder) {
    return new SelectBuilder(builder, this._fields)
  }
}
