---
id: "modules"
title: "sql-builder"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [Builder](classes/Builder.md)
- [BuilderError](classes/BuilderError.md)
- [ColumnFragment](classes/ColumnFragment.md)
- [FromBuilder](classes/FromBuilder.md)
- [FunctionFragment](classes/FunctionFragment.md)
- [GroupByBuilder](classes/GroupByBuilder.md)
- [HavingBuilder](classes/HavingBuilder.md)
- [JoinBuilder](classes/JoinBuilder.md)
- [LimitBuilder](classes/LimitBuilder.md)
- [OffsetBuilder](classes/OffsetBuilder.md)
- [OrderByBuilder](classes/OrderByBuilder.md)
- [RawBuilder](classes/RawBuilder.md)
- [RawFragment](classes/RawFragment.md)
- [ReplaceByName](classes/ReplaceByName.md)
- [SelectBuilder](classes/SelectBuilder.md)
- [WhereBuilder](classes/WhereBuilder.md)
- [WithBuilder](classes/WithBuilder.md)

## Interfaces

- [FragmentInterface](interfaces/FragmentInterface.md)

## Type Aliases

### BuilderOptions

Ƭ **BuilderOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `comment?` | `string` |
| `parentBuilder?` | [`Builder`](classes/Builder.md) |
| `replacements?` | `unknown`[] |
| `steps?` | `BuilderInterface`[] |

#### Defined in

src/sql-builder.ts:1071

___

### FromItem

Ƭ **FromItem**: `string` \| [`FromItemTable`](modules.md#fromitemtable) \| [`FromItemSubSelect`](modules.md#fromitemsubselect)

#### Defined in

src/sql-builder.ts:220

___

### FromItemNormalized

Ƭ **FromItemNormalized**: [`FromItemTable`](modules.md#fromitemtable) \| [`FromItemSubSelect`](modules.md#fromitemsubselect)

#### Defined in

src/sql-builder.ts:221

___

### FromItemSubSelect

Ƭ **FromItemSubSelect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias?` | `string` |
| `select` | [`Builder`](classes/Builder.md) |

#### Defined in

src/sql-builder.ts:219

___

### FromItemTable

Ƭ **FromItemTable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias?` | `string` |
| `schema?` | `string` |
| `tableName` | `string` |

#### Defined in

src/sql-builder.ts:217

___

### FromJoin

Ƭ **FromJoin**: (`table`: [`JoinBuilder`](classes/JoinBuilder.md)) => `void`

#### Type declaration

▸ (`table`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `table` | [`JoinBuilder`](classes/JoinBuilder.md) |

##### Returns

`void`

#### Defined in

src/sql-builder.ts:218

___

### JoinItem

Ƭ **JoinItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias?` | `string` |
| `joinType` | ``"ON"`` \| ``"USING"`` |
| `rawCondition` | `string` |
| `schema?` | `string` |
| `tableName` | `string` |
| `type?` | ``"INNER"`` \| ``"LEFT"`` \| ``"RIGHT"`` \| ``"FULL"`` \| ``"LEFT OUTER"`` \| ``"RIGHT OUTER"`` \| ``"FULL OUTER"`` \| ``"CROSS"`` \| ``"NATURAL"`` |

#### Defined in

src/sql-builder.ts:163

___

### SelectField

Ƭ **SelectField**: `string` \| [`SelectFieldNormalized`](modules.md#selectfieldnormalized)

#### Defined in

src/sql-builder.ts:114

___

### SelectFieldMapping

Ƭ **SelectFieldMapping**: `Object`

#### Index signature

▪ [field: `string`]: [`SelectField`](modules.md#selectfield)

#### Defined in

src/sql-builder.ts:115

___

### SelectFieldNormalized

Ƭ **SelectFieldNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `castAs?` | `string` |
| `escape?` | `boolean` |
| `fieldName` | `string` |

#### Defined in

src/sql-builder.ts:113

___

### WhereAndCondition

Ƭ **WhereAndCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpAnd]` | [`WhereMultiNested`](modules.md#wheremultinested) |

#### Defined in

src/sql-builder.ts:414

___

### WhereAndConditionNormalized

Ƭ **WhereAndConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpAnd]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized)[] |

#### Defined in

src/sql-builder.ts:476

___

### WhereCondition

Ƭ **WhereCondition**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereObjectFields`](modules.md#whereobjectfields) \| [`WhereConditionItem`](modules.md#whereconditionitem)[]

#### Defined in

src/sql-builder.ts:465

___

### WhereConditionItem

Ƭ **WhereConditionItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | `string` \| \{ `escape?`: `boolean` ; `name`: `string`  } |
| `filter` | [`WhereConditionItemFilter`](modules.md#whereconditionitemfilter) |

#### Defined in

src/sql-builder.ts:460

___

### WhereConditionItemFilter

Ƭ **WhereConditionItemFilter**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereFieldValue`](modules.md#wherefieldvalue)

#### Defined in

src/sql-builder.ts:458

___

### WhereConditionItemFilterNormalized

Ƭ **WhereConditionItemFilterNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereFieldValueNormalized`](modules.md#wherefieldvaluenormalized)

#### Defined in

src/sql-builder.ts:503

___

### WhereConditionItemNormalized

Ƭ **WhereConditionItemNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | \{ `escape?`: `boolean` ; `name`: `string` \| [`FunctionFragment`](classes/FunctionFragment.md)  } |
| `field.escape?` | `boolean` |
| `field.name` | `string` \| [`FunctionFragment`](classes/FunctionFragment.md) |
| `filter` | [`WhereConditionItemFilterNormalized`](modules.md#whereconditionitemfilternormalized) |

#### Defined in

src/sql-builder.ts:507

___

### WhereConditionNormalized

Ƭ **WhereConditionNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereConditionItemNormalized`](modules.md#whereconditionitemnormalized)[]

#### Defined in

src/sql-builder.ts:512

___

### WhereFieldValue

Ƭ **WhereFieldValue**: [`WhereUserValue`](modules.md#whereuservalue) \| [`WhereUserValue`](modules.md#whereuservalue)[] \| [`WhereOperator`](modules.md#whereoperator)

#### Defined in

src/sql-builder.ts:453

___

### WhereFieldValueNormalized

Ƭ **WhereFieldValueNormalized**: typeof [`Skip`](modules.md#skip) \| [`FunctionFragment`](classes/FunctionFragment.md) \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) \| [`WhereOperatorNormalized`](modules.md#whereoperatornormalized)

#### Defined in

src/sql-builder.ts:497

___

### WhereMultiNested

Ƭ **WhereMultiNested**: ([`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereConditionItem`](modules.md#whereconditionitem))[] \| [`WhereObjectFields`](modules.md#whereobjectfields)

#### Defined in

src/sql-builder.ts:409

___

### WhereNestedCondition

Ƭ **WhereNestedCondition**: [`WhereOrCondition`](modules.md#whereorcondition) \| [`WhereAndCondition`](modules.md#whereandcondition) \| [`WhereNotCondition`](modules.md#wherenotcondition)

#### Defined in

src/sql-builder.ts:406

___

### WhereNestedConditionNormalized

Ƭ **WhereNestedConditionNormalized**: [`WhereOrConditionNormalized`](modules.md#whereorconditionnormalized) \| [`WhereAndConditionNormalized`](modules.md#whereandconditionnormalized) \| [`WhereNotConditionNormalized`](modules.md#wherenotconditionnormalized)

#### Defined in

src/sql-builder.ts:468

___

### WhereNestedNormalized

Ƭ **WhereNestedNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereConditionItemNormalized`](modules.md#whereconditionitemnormalized)[]

#### Defined in

src/sql-builder.ts:473

___

### WhereNotCondition

Ƭ **WhereNotCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpNot]` | [`WhereSingleNested`](modules.md#wheresinglenested) |

#### Defined in

src/sql-builder.ts:420

___

### WhereNotConditionNormalized

Ƭ **WhereNotConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpNot]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized) |

#### Defined in

src/sql-builder.ts:477

___

### WhereObjectFields

Ƭ **WhereObjectFields**: `Object`

#### Index signature

▪ [field: `string`]: [`WhereFieldValue`](modules.md#wherefieldvalue)

#### Defined in

src/sql-builder.ts:407

___

### WhereOpBetweenValue

Ƭ **WhereOpBetweenValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | [`WhereUserValue`](modules.md#whereuservalue) |
| `start` | [`WhereUserValue`](modules.md#whereuservalue) |
| `symmetric?` | `boolean` |

#### Defined in

src/sql-builder.ts:429

___

### WhereOpFilter

Ƭ **WhereOpFilter**: ``":csv"`` \| ``":list"`` \| ``":json"`` \| `string`

#### Defined in

src/sql-builder.ts:435

___

### WhereOpLikeValue

Ƭ **WhereOpLikeValue**: `string` \| [`FunctionFragment`](classes/FunctionFragment.md) \| \{ `escape?`: `string` ; `value`: `string` \| [`FunctionFragment`](classes/FunctionFragment.md)  }

#### Defined in

src/sql-builder.ts:424

___

### WhereOpLikeValueNormalized

Ƭ **WhereOpLikeValueNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `escape?` | `string` |
| `value` | `string` \| [`FunctionFragment`](classes/FunctionFragment.md) |

#### Defined in

src/sql-builder.ts:479

___

### WhereOperator

Ƭ **WhereOperator**: \{ `[OpEq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpNeq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLike]`: [`WhereOpLikeValue`](modules.md#whereoplikevalue) ; `filter?`: `never`  } \| \{ `[OpILike]`: [`WhereOpLikeValue`](modules.md#whereoplikevalue) ; `filter?`: `never`  } \| \{ `[OpIn]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAny]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpSome]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAll]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpBetween]`: [`WhereOpBetweenValue`](modules.md#whereopbetweenvalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpRaw]`: `string` ; `filter?`: `never`  }

#### Defined in

src/sql-builder.ts:437

___

### WhereOperatorNormalized

Ƭ **WhereOperatorNormalized**: \{ `[OpEq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpNeq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLike]`: [`WhereOpLikeValueNormalized`](modules.md#whereoplikevaluenormalized) ; `filter?`: `never`  } \| \{ `[OpILike]`: [`WhereOpLikeValueNormalized`](modules.md#whereoplikevaluenormalized) ; `filter?`: `never`  } \| \{ `[OpIn]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAny]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpSome]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAll]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpBetween]`: [`WhereOpBetweenValue`](modules.md#whereopbetweenvalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpRaw]`: `string`  }

#### Defined in

src/sql-builder.ts:481

___

### WhereOrCondition

Ƭ **WhereOrCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpOr]` | [`WhereMultiNested`](modules.md#wheremultinested) |

#### Defined in

src/sql-builder.ts:411

___

### WhereOrConditionNormalized

Ƭ **WhereOrConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpOr]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized)[] |

#### Defined in

src/sql-builder.ts:475

___

### WhereSingleNested

Ƭ **WhereSingleNested**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereConditionItem`](modules.md#whereconditionitem)

#### Defined in

src/sql-builder.ts:418

___

### WhereUserValue

Ƭ **WhereUserValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `Date` \| typeof [`Skip`](modules.md#skip) \| [`FunctionFragment`](classes/FunctionFragment.md) \| [`WhereValueReplacement`](modules.md#wherevaluereplacement)

#### Defined in

src/sql-builder.ts:395

___

### WhereValueReplacement

Ƭ **WhereValueReplacement**: typeof [`REPLACE_BY_NUMBER`](modules.md#replace_by_number) \| [`ReplaceByName`](classes/ReplaceByName.md)

#### Defined in

src/sql-builder.ts:394

___

### WithQuery

Ƭ **WithQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias` | `string` |
| `builder` | [`Builder`](classes/Builder.md) |
| `columns?` | `string`[] |
| `queryName` | `string` |

#### Defined in

src/sql-builder.ts:65

___

### WithQueryInput

Ƭ **WithQueryInput**: [`WithQuery`](modules.md#withquery) \| [`WithQuery`](modules.md#withquery)[]

#### Defined in

src/sql-builder.ts:71

## Variables

### DEFAULT\_LIKE\_ESCAPE

• `Const` **DEFAULT\_LIKE\_ESCAPE**: ``"|"``

#### Defined in

src/sql-builder.ts:6

___

### Op

• `Const` **Op**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$all` | `symbol` |
| `$and` | `symbol` |
| `$any` | `symbol` |
| `$between` | `symbol` |
| `$eq` | `symbol` |
| `$gt` | `symbol` |
| `$gte` | `symbol` |
| `$iLike` | `symbol` |
| `$in` | `symbol` |
| `$like` | `symbol` |
| `$lt` | `symbol` |
| `$lte` | `symbol` |
| `$neq` | `symbol` |
| `$not` | `symbol` |
| `$or` | `symbol` |
| `$raw` | `symbol` |
| `$some` | `symbol` |

#### Defined in

src/sql-builder.ts:310

___

### OpAll

• `Const` **OpAll**: typeof [`OpAll`](modules.md#opall)

#### Defined in

src/sql-builder.ts:297

___

### OpAnd

• `Const` **OpAnd**: typeof [`OpAnd`](modules.md#opand)

#### Defined in

src/sql-builder.ts:303

___

### OpAny

• `Const` **OpAny**: typeof [`OpAny`](modules.md#opany)

#### Defined in

src/sql-builder.ts:295

___

### OpBetween

• `Const` **OpBetween**: typeof [`OpBetween`](modules.md#opbetween)

#### Defined in

src/sql-builder.ts:308

___

### OpEq

• `Const` **OpEq**: typeof [`OpEq`](modules.md#opeq)

#### Defined in

src/sql-builder.ts:292

___

### OpGt

• `Const` **OpGt**: typeof [`OpGt`](modules.md#opgt)

#### Defined in

src/sql-builder.ts:298

___

### OpGte

• `Const` **OpGte**: typeof [`OpGte`](modules.md#opgte)

#### Defined in

src/sql-builder.ts:299

___

### OpILike

• `Const` **OpILike**: typeof [`OpILike`](modules.md#opilike)

#### Defined in

src/sql-builder.ts:307

___

### OpIn

• `Const` **OpIn**: typeof [`OpIn`](modules.md#opin)

#### Defined in

src/sql-builder.ts:294

___

### OpLike

• `Const` **OpLike**: typeof [`OpLike`](modules.md#oplike)

#### Defined in

src/sql-builder.ts:306

___

### OpLt

• `Const` **OpLt**: typeof [`OpLt`](modules.md#oplt)

#### Defined in

src/sql-builder.ts:300

___

### OpLte

• `Const` **OpLte**: typeof [`OpLte`](modules.md#oplte)

#### Defined in

src/sql-builder.ts:301

___

### OpNeq

• `Const` **OpNeq**: typeof [`OpNeq`](modules.md#opneq)

#### Defined in

src/sql-builder.ts:293

___

### OpNot

• `Const` **OpNot**: typeof [`OpNot`](modules.md#opnot)

#### Defined in

src/sql-builder.ts:304

___

### OpOr

• `Const` **OpOr**: typeof [`OpOr`](modules.md#opor)

#### Defined in

src/sql-builder.ts:302

___

### OpRaw

• `Const` **OpRaw**: typeof [`OpRaw`](modules.md#opraw)

#### Defined in

src/sql-builder.ts:305

___

### OpSome

• `Const` **OpSome**: typeof [`OpSome`](modules.md#opsome)

#### Defined in

src/sql-builder.ts:296

___

### REPLACE\_BY\_NUMBER

• `Const` **REPLACE\_BY\_NUMBER**: typeof [`REPLACE_BY_NUMBER`](modules.md#replace_by_number)

#### Defined in

src/sql-builder.ts:1067

___

### Skip

• `Const` **Skip**: typeof [`Skip`](modules.md#skip)

#### Defined in

src/sql-builder.ts:330

## Functions

### castAs

▸ **castAs**(`field`, `type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `type` | `string` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:33

___

### col

▸ **col**(`name`): [`ColumnFragment`](classes/ColumnFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ColumnFragment`](classes/ColumnFragment.md)

#### Defined in

src/sql-builder.ts:1185

___

### compose

▸ **compose**(`items`, `separator?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `items` | (`string` \| `number` \| `boolean`)[] | `undefined` |
| `separator` | `string` | `' '` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:37

___

### escapeLike

▸ **escapeLike**(`value`, `escape`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `escape` | `string` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:16

___

### escapeName

▸ **escapeName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:8

___

### fn

▸ **fn**(`name`, `args?`): [`FunctionFragment`](classes/FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args?` | `FunctionFragmentArg`[] |

#### Returns

[`FunctionFragment`](classes/FunctionFragment.md)

#### Defined in

src/sql-builder.ts:1181

___

### ifset

▸ **ifset**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:23

___

### list

▸ **list**(`values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `string`[] |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:44

___

### parenthesis

▸ **parenthesis**(`value`, `count?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `count?` | `number` |

#### Returns

`string`

#### Defined in

src/sql-builder.ts:28

___

### query

▸ **query**(): [`Builder`](classes/Builder.md)

#### Returns

[`Builder`](classes/Builder.md)

#### Defined in

src/sql-builder.ts:1173

___

### raw

▸ **raw**(`sql`): [`RawFragment`](classes/RawFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`RawFragment`](classes/RawFragment.md)

#### Defined in

src/sql-builder.ts:1189

___

### select

▸ **select**(`fields`): [`SelectBuilder`](classes/SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |

#### Returns

[`SelectBuilder`](classes/SelectBuilder.md)

#### Defined in

src/sql-builder.ts:1177
