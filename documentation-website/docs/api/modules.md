---
id: "modules"
title: "@alesmenzel/sql-builder"
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

[src/builders/builder.ts:9](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/builder.ts#L9)

___

### FromItem

Ƭ **FromItem**: `string` \| [`FromItemTable`](modules.md#fromitemtable) \| [`FromItemSubSelect`](modules.md#fromitemsubselect)

#### Defined in

[src/builders/from-builder.ts:16](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L16)

___

### FromItemNormalized

Ƭ **FromItemNormalized**: [`FromItemTable`](modules.md#fromitemtable) \| [`FromItemSubSelect`](modules.md#fromitemsubselect)

#### Defined in

[src/builders/from-builder.ts:17](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L17)

___

### FromItemSubSelect

Ƭ **FromItemSubSelect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alias?` | `string` |
| `select` | [`Builder`](classes/Builder.md) |

#### Defined in

[src/builders/from-builder.ts:15](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L15)

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

[src/builders/from-builder.ts:13](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L13)

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

[src/builders/from-builder.ts:14](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L14)

___

### FunctionFragmentArg

Ƭ **FunctionFragmentArg**: `string` \| `number` \| `boolean` \| `Date` \| \{ `escape?`: `boolean` ; `value`: `string`  } \| [`FunctionFragment`](classes/FunctionFragment.md) \| [`ColumnFragment`](classes/ColumnFragment.md) \| [`RawFragment`](classes/RawFragment.md)

#### Defined in

[src/fragments/function-fragment.ts:7](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/function-fragment.ts#L7)

___

### GroupByInput

Ƭ **GroupByInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |
| `modifier?` | [`GroupByModifier`](modules.md#groupbymodifier) |

#### Defined in

[src/builders/group-by-builder.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L11)

___

### GroupByModifier

Ƭ **GroupByModifier**: ``"ALL"`` \| ``"DISTINCT"``

#### Defined in

[src/builders/group-by-builder.ts:10](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L10)

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

[src/builders/join-builder.ts:6](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/join-builder.ts#L6)

___

### OrderByInput

Ƭ **OrderByInput**: [`OrderByItem`](modules.md#orderbyitem) \| [`OrderByItem`](modules.md#orderbyitem)[]

#### Defined in

[src/builders/order-by-builder.ts:15](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/order-by-builder.ts#L15)

___

### OrderByInputNormalized

Ƭ **OrderByInputNormalized**: [`OrderByItem`](modules.md#orderbyitem)[]

#### Defined in

[src/builders/order-by-builder.ts:16](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/order-by-builder.ts#L16)

___

### OrderByItem

Ƭ **OrderByItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `nulls?` | ``"FIRST"`` \| ``"LAST"`` |
| `order?` | ``"ASC"`` \| ``"DESC"`` \| ``"USING"`` |
| `using?` | `string` |

#### Defined in

[src/builders/order-by-builder.ts:9](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/order-by-builder.ts#L9)

___

### SelectField

Ƭ **SelectField**: `string` \| [`SelectFieldNormalized`](modules.md#selectfieldnormalized)

#### Defined in

[src/builders/select-builder.ts:10](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/select-builder.ts#L10)

___

### SelectFieldMapping

Ƭ **SelectFieldMapping**: `Object`

#### Index signature

▪ [field: `string`]: [`SelectField`](modules.md#selectfield)

#### Defined in

[src/builders/select-builder.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/select-builder.ts#L11)

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

[src/builders/select-builder.ts:9](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/select-builder.ts#L9)

___

### WhereAndCondition

Ƭ **WhereAndCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpAnd]` | [`WhereMultiNested`](modules.md#wheremultinested) |

#### Defined in

[src/builders/where-builder.ts:58](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L58)

___

### WhereAndConditionNormalized

Ƭ **WhereAndConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpAnd]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized)[] |

#### Defined in

[src/builders/where-builder.ts:120](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L120)

___

### WhereCondition

Ƭ **WhereCondition**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereObjectFields`](modules.md#whereobjectfields) \| [`WhereConditionItem`](modules.md#whereconditionitem)[]

#### Defined in

[src/builders/where-builder.ts:109](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L109)

___

### WhereConditionItem

Ƭ **WhereConditionItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | `string` \| \{ `escape?`: `boolean` ; `name`: `string`  } |
| `filter` | [`WhereConditionItemFilter`](modules.md#whereconditionitemfilter) |

#### Defined in

[src/builders/where-builder.ts:104](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L104)

___

### WhereConditionItemFilter

Ƭ **WhereConditionItemFilter**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereFieldValue`](modules.md#wherefieldvalue)

#### Defined in

[src/builders/where-builder.ts:102](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L102)

___

### WhereConditionItemFilterNormalized

Ƭ **WhereConditionItemFilterNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereFieldValueNormalized`](modules.md#wherefieldvaluenormalized)

#### Defined in

[src/builders/where-builder.ts:147](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L147)

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

[src/builders/where-builder.ts:151](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L151)

___

### WhereConditionNormalized

Ƭ **WhereConditionNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereConditionItemNormalized`](modules.md#whereconditionitemnormalized)[]

#### Defined in

[src/builders/where-builder.ts:156](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L156)

___

### WhereFieldValue

Ƭ **WhereFieldValue**: [`WhereUserValue`](modules.md#whereuservalue) \| [`WhereUserValue`](modules.md#whereuservalue)[] \| [`WhereOperator`](modules.md#whereoperator)

#### Defined in

[src/builders/where-builder.ts:97](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L97)

___

### WhereFieldValueNormalized

Ƭ **WhereFieldValueNormalized**: typeof [`Skip`](modules.md#skip) \| [`FunctionFragment`](classes/FunctionFragment.md) \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) \| [`WhereOperatorNormalized`](modules.md#whereoperatornormalized)

#### Defined in

[src/builders/where-builder.ts:141](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L141)

___

### WhereMultiNested

Ƭ **WhereMultiNested**: ([`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereConditionItem`](modules.md#whereconditionitem))[] \| [`WhereObjectFields`](modules.md#whereobjectfields)

#### Defined in

[src/builders/where-builder.ts:53](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L53)

___

### WhereNestedCondition

Ƭ **WhereNestedCondition**: [`WhereOrCondition`](modules.md#whereorcondition) \| [`WhereAndCondition`](modules.md#whereandcondition) \| [`WhereNotCondition`](modules.md#wherenotcondition)

#### Defined in

[src/builders/where-builder.ts:50](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L50)

___

### WhereNestedConditionNormalized

Ƭ **WhereNestedConditionNormalized**: [`WhereOrConditionNormalized`](modules.md#whereorconditionnormalized) \| [`WhereAndConditionNormalized`](modules.md#whereandconditionnormalized) \| [`WhereNotConditionNormalized`](modules.md#wherenotconditionnormalized)

#### Defined in

[src/builders/where-builder.ts:112](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L112)

___

### WhereNestedNormalized

Ƭ **WhereNestedNormalized**: [`WhereNestedConditionNormalized`](modules.md#wherenestedconditionnormalized) \| [`WhereConditionItemNormalized`](modules.md#whereconditionitemnormalized)[]

#### Defined in

[src/builders/where-builder.ts:117](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L117)

___

### WhereNotCondition

Ƭ **WhereNotCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpNot]` | [`WhereSingleNested`](modules.md#wheresinglenested) |

#### Defined in

[src/builders/where-builder.ts:64](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L64)

___

### WhereNotConditionNormalized

Ƭ **WhereNotConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpNot]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized) |

#### Defined in

[src/builders/where-builder.ts:121](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L121)

___

### WhereObjectFields

Ƭ **WhereObjectFields**: `Object`

#### Index signature

▪ [field: `string`]: [`WhereFieldValue`](modules.md#wherefieldvalue)

#### Defined in

[src/builders/where-builder.ts:51](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L51)

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

[src/builders/where-builder.ts:73](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L73)

___

### WhereOpFilter

Ƭ **WhereOpFilter**: ``":csv"`` \| ``":list"`` \| ``":json"`` \| `string`

#### Defined in

[src/builders/where-builder.ts:79](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L79)

___

### WhereOpLikeValue

Ƭ **WhereOpLikeValue**: `string` \| [`FunctionFragment`](classes/FunctionFragment.md) \| \{ `escape?`: `string` ; `value`: `string` \| [`FunctionFragment`](classes/FunctionFragment.md)  }

#### Defined in

[src/builders/where-builder.ts:68](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L68)

___

### WhereOpLikeValueNormalized

Ƭ **WhereOpLikeValueNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `escape?` | `string` |
| `value` | `string` \| [`FunctionFragment`](classes/FunctionFragment.md) |

#### Defined in

[src/builders/where-builder.ts:123](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L123)

___

### WhereOperator

Ƭ **WhereOperator**: \{ `[OpEq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpNeq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLike]`: [`WhereOpLikeValue`](modules.md#whereoplikevalue) ; `filter?`: `never`  } \| \{ `[OpILike]`: [`WhereOpLikeValue`](modules.md#whereoplikevalue) ; `filter?`: `never`  } \| \{ `[OpIn]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAny]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpSome]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAll]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpBetween]`: [`WhereOpBetweenValue`](modules.md#whereopbetweenvalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpRaw]`: `string` ; `filter?`: `never`  }

#### Defined in

[src/builders/where-builder.ts:81](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L81)

___

### WhereOperatorNormalized

Ƭ **WhereOperatorNormalized**: \{ `[OpEq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpNeq]`: [`WhereUserValue`](modules.md#whereuservalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLike]`: [`WhereOpLikeValueNormalized`](modules.md#whereoplikevaluenormalized) ; `filter?`: `never`  } \| \{ `[OpILike]`: [`WhereOpLikeValueNormalized`](modules.md#whereoplikevaluenormalized) ; `filter?`: `never`  } \| \{ `[OpIn]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAny]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpSome]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpAll]`: [`WhereUserValue`](modules.md#whereuservalue)[] ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpBetween]`: [`WhereOpBetweenValue`](modules.md#whereopbetweenvalue) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpGte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLt]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpLte]`: `number` \| [`WhereValueReplacement`](modules.md#wherevaluereplacement) ; `filter?`: [`WhereOpFilter`](modules.md#whereopfilter)  } \| \{ `[OpRaw]`: `string`  }

#### Defined in

[src/builders/where-builder.ts:125](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L125)

___

### WhereOrCondition

Ƭ **WhereOrCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpOr]` | [`WhereMultiNested`](modules.md#wheremultinested) |

#### Defined in

[src/builders/where-builder.ts:55](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L55)

___

### WhereOrConditionNormalized

Ƭ **WhereOrConditionNormalized**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[OpOr]` | [`WhereNestedNormalized`](modules.md#wherenestednormalized)[] |

#### Defined in

[src/builders/where-builder.ts:119](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L119)

___

### WhereSingleNested

Ƭ **WhereSingleNested**: [`WhereNestedCondition`](modules.md#wherenestedcondition) \| [`WhereConditionItem`](modules.md#whereconditionitem)

#### Defined in

[src/builders/where-builder.ts:62](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L62)

___

### WhereUserValue

Ƭ **WhereUserValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `Date` \| typeof [`Skip`](modules.md#skip) \| [`FunctionFragment`](classes/FunctionFragment.md) \| [`WhereValueReplacement`](modules.md#wherevaluereplacement)

#### Defined in

[src/builders/where-builder.ts:39](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L39)

___

### WhereValueReplacement

Ƭ **WhereValueReplacement**: typeof [`REPLACE_BY_NUMBER`](modules.md#replace_by_number) \| [`ReplaceByName`](classes/ReplaceByName.md)

#### Defined in

[src/builders/where-builder.ts:38](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L38)

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

[src/builders/with-builder.ts:8](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L8)

___

### WithQueryInput

Ƭ **WithQueryInput**: [`WithQuery`](modules.md#withquery) \| [`WithQuery`](modules.md#withquery)[]

#### Defined in

[src/builders/with-builder.ts:14](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L14)

## Variables

### DEFAULT\_LIKE\_ESCAPE

• `Const` **DEFAULT\_LIKE\_ESCAPE**: ``"|"``

#### Defined in

[src/constants.ts:1](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L1)

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

[src/constants.ts:21](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L21)

___

### OpAll

• `Const` **OpAll**: typeof [`OpAll`](modules.md#opall)

#### Defined in

[src/constants.ts:8](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L8)

___

### OpAnd

• `Const` **OpAnd**: typeof [`OpAnd`](modules.md#opand)

#### Defined in

[src/constants.ts:14](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L14)

___

### OpAny

• `Const` **OpAny**: typeof [`OpAny`](modules.md#opany)

#### Defined in

[src/constants.ts:6](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L6)

___

### OpBetween

• `Const` **OpBetween**: typeof [`OpBetween`](modules.md#opbetween)

#### Defined in

[src/constants.ts:19](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L19)

___

### OpEq

• `Const` **OpEq**: typeof [`OpEq`](modules.md#opeq)

#### Defined in

[src/constants.ts:3](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L3)

___

### OpGt

• `Const` **OpGt**: typeof [`OpGt`](modules.md#opgt)

#### Defined in

[src/constants.ts:9](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L9)

___

### OpGte

• `Const` **OpGte**: typeof [`OpGte`](modules.md#opgte)

#### Defined in

[src/constants.ts:10](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L10)

___

### OpILike

• `Const` **OpILike**: typeof [`OpILike`](modules.md#opilike)

#### Defined in

[src/constants.ts:18](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L18)

___

### OpIn

• `Const` **OpIn**: typeof [`OpIn`](modules.md#opin)

#### Defined in

[src/constants.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L5)

___

### OpLike

• `Const` **OpLike**: typeof [`OpLike`](modules.md#oplike)

#### Defined in

[src/constants.ts:17](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L17)

___

### OpLt

• `Const` **OpLt**: typeof [`OpLt`](modules.md#oplt)

#### Defined in

[src/constants.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L11)

___

### OpLte

• `Const` **OpLte**: typeof [`OpLte`](modules.md#oplte)

#### Defined in

[src/constants.ts:12](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L12)

___

### OpNeq

• `Const` **OpNeq**: typeof [`OpNeq`](modules.md#opneq)

#### Defined in

[src/constants.ts:4](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L4)

___

### OpNot

• `Const` **OpNot**: typeof [`OpNot`](modules.md#opnot)

#### Defined in

[src/constants.ts:15](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L15)

___

### OpOr

• `Const` **OpOr**: typeof [`OpOr`](modules.md#opor)

#### Defined in

[src/constants.ts:13](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L13)

___

### OpRaw

• `Const` **OpRaw**: typeof [`OpRaw`](modules.md#opraw)

#### Defined in

[src/constants.ts:16](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L16)

___

### OpSome

• `Const` **OpSome**: typeof [`OpSome`](modules.md#opsome)

#### Defined in

[src/constants.ts:7](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L7)

___

### REPLACE\_BY\_NUMBER

• `Const` **REPLACE\_BY\_NUMBER**: typeof [`REPLACE_BY_NUMBER`](modules.md#replace_by_number)

#### Defined in

[src/constants.ts:42](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L42)

___

### Skip

• `Const` **Skip**: typeof [`Skip`](modules.md#skip)

#### Defined in

[src/constants.ts:41](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/constants.ts#L41)

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

[src/utils.ts:28](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L28)

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

[src/sql-builder.ts:18](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/sql-builder.ts#L18)

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

[src/utils.ts:32](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L32)

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

[src/utils.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L11)

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

[src/utils.ts:3](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L3)

___

### fn

▸ **fn**(`name`, `args?`): [`FunctionFragment`](classes/FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args?` | [`FunctionFragmentArg`](modules.md#functionfragmentarg)[] |

#### Returns

[`FunctionFragment`](classes/FunctionFragment.md)

#### Defined in

[src/sql-builder.ts:14](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/sql-builder.ts#L14)

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

[src/utils.ts:18](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L18)

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

[src/utils.ts:39](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L39)

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

[src/utils.ts:23](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/utils.ts#L23)

___

### query

▸ **query**(): [`Builder`](classes/Builder.md)

#### Returns

[`Builder`](classes/Builder.md)

#### Defined in

[src/sql-builder.ts:6](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/sql-builder.ts#L6)

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

[src/sql-builder.ts:22](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/sql-builder.ts#L22)

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

[src/sql-builder.ts:10](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/sql-builder.ts#L10)
