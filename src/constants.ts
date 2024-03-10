export const DEFAULT_LIKE_ESCAPE = '|'

export const OpEq = Symbol('$eq')
export const OpNeq = Symbol('$neq')
export const OpIn = Symbol('$in')
export const OpAny = Symbol('$any')
export const OpSome = Symbol('$some')
export const OpAll = Symbol('$all')
export const OpGt = Symbol('$gt')
export const OpGte = Symbol('$gte')
export const OpLt = Symbol('$lt')
export const OpLte = Symbol('$lte')
export const OpOr = Symbol('$or')
export const OpAnd = Symbol('$and')
export const OpNot = Symbol('$not')
export const OpRaw = Symbol('$raw')
export const OpLike = Symbol('$like')
export const OpILike = Symbol('$ilike')
export const OpBetween = Symbol('$between')

export const Op = {
  $eq: OpEq,
  $neq: OpNeq,
  $in: OpIn,
  $any: OpAny,
  $some: OpSome,
  $all: OpAll,
  $gt: OpGt,
  $gte: OpGte,
  $lt: OpLt,
  $lte: OpLte,
  $or: OpOr,
  $and: OpAnd,
  $not: OpNot,
  $raw: OpRaw,
  $like: OpLike,
  $iLike: OpILike,
  $between: OpBetween,
}

export const Skip = Symbol('skip')
export const REPLACE_BY_NUMBER = Symbol('$')

export class ReplaceByName {
  _name: string

  constructor(name: string) {
    this._name = name
  }
}

export class BuilderError extends Error {}
