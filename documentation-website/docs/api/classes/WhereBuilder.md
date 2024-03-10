---
id: "WhereBuilder"
title: "Class: WhereBuilder"
sidebar_label: "WhereBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`WhereBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new WhereBuilder**(`builder`, `condition`): [`WhereBuilder`](WhereBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `condition` | [`WhereCondition`](../modules.md#wherecondition) |

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/sql-builder.ts:520](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L520)

## Properties

### \_condition

• **\_condition**: [`WhereCondition`](../modules.md#wherecondition)

#### Defined in

[src/sql-builder.ts:517](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L517)

___

### \_conditionNormalized

• **\_conditionNormalized**: [`WhereConditionNormalized`](../modules.md#whereconditionnormalized)

#### Defined in

[src/sql-builder.ts:518](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L518)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

## Methods

### \_buildCondition

▸ **_buildCondition**(`condition`, `level?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `condition` | [`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized) \| [`WhereConditionNormalized`](../modules.md#whereconditionnormalized) | `undefined` |
| `level` | `number` | `0` |

#### Returns

`string`

#### Defined in

[src/sql-builder.ts:833](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L833)

___

### \_buildConditionItem

▸ **_buildConditionItem**(`«destructured»`, `level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized) |
| `level` | `number` |

#### Returns

`string`

#### Defined in

[src/sql-builder.ts:731](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L731)

___

### \_buildNestedCondition

▸ **_buildNestedCondition**(`condition`, `level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`WhereNestedConditionNormalized`](../modules.md#wherenestedconditionnormalized) |
| `level` | `number` |

#### Returns

`string`

#### Defined in

[src/sql-builder.ts:700](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L700)

___

### \_getReplacement

▸ **_getReplacement**(`filter`, `op`, `...paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`WhereOperator`](../modules.md#whereoperator) |
| `op` | `symbol` |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[src/sql-builder.ts:724](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L724)

___

### \_isNested

▸ **_isNested**\<`T`\>(`condition`): condition is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WhereNestedCondition`](../modules.md#wherenestedcondition) \| [`WhereNestedConditionNormalized`](../modules.md#wherenestedconditionnormalized) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `unknown` |

#### Returns

condition is T

#### Defined in

[src/sql-builder.ts:554](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L554)

___

### \_normalizeConditionItem

▸ **_normalizeConditionItem**(`«destructured»`): [`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WhereConditionItem`](../modules.md#whereconditionitem) |

#### Returns

[`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized)

#### Defined in

[src/sql-builder.ts:575](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L575)

___

### \_normalizeConditions

▸ **_normalizeConditions**(`conditions`): [`WhereConditionNormalized`](../modules.md#whereconditionnormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | [`WhereCondition`](../modules.md#wherecondition) |

#### Returns

[`WhereConditionNormalized`](../modules.md#whereconditionnormalized)

#### Defined in

[src/sql-builder.ts:563](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L563)

___

### \_normalizeField

▸ **_normalizeField**(`value`): [`WhereFieldValueNormalized`](../modules.md#wherefieldvaluenormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`WhereFieldValue`](../modules.md#wherefieldvalue) |

#### Returns

[`WhereFieldValueNormalized`](../modules.md#wherefieldvaluenormalized)

#### Defined in

[src/sql-builder.ts:671](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L671)

___

### \_normalizeFields

▸ **_normalizeFields**(`conditions`): [`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | [`WhereObjectFields`](../modules.md#whereobjectfields) |

#### Returns

[`WhereConditionItemNormalized`](../modules.md#whereconditionitemnormalized)[]

#### Defined in

[src/sql-builder.ts:622](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L622)

___

### \_normalizeFilter

▸ **_normalizeFilter**(`filter`): [`WhereConditionItemFilterNormalized`](../modules.md#whereconditionitemfilternormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`WhereConditionItemFilter`](../modules.md#whereconditionitemfilter) |

#### Returns

[`WhereConditionItemFilterNormalized`](../modules.md#whereconditionitemfilternormalized)

#### Defined in

[src/sql-builder.ts:584](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L584)

___

### \_normalizeLike

▸ **_normalizeLike**(`condition`): [`WhereOpLikeValueNormalized`](../modules.md#whereoplikevaluenormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`WhereOpLikeValue`](../modules.md#whereoplikevalue) |

#### Returns

[`WhereOpLikeValueNormalized`](../modules.md#whereoplikevaluenormalized)

#### Defined in

[src/sql-builder.ts:686](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L686)

___

### \_normalizeMultiNested

▸ **_normalizeMultiNested**(`conditions`): [`WhereNestedNormalized`](../modules.md#wherenestednormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | [`WhereMultiNested`](../modules.md#wheremultinested) |

#### Returns

[`WhereNestedNormalized`](../modules.md#wherenestednormalized)

#### Defined in

[src/sql-builder.ts:647](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L647)

___

### \_normalizeNestedFilters

▸ **_normalizeNestedFilters**(`condition`): [`WhereNestedConditionNormalized`](../modules.md#wherenestedconditionnormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`WhereNestedCondition`](../modules.md#wherenestedcondition) |

#### Returns

[`WhereNestedConditionNormalized`](../modules.md#wherenestedconditionnormalized)

#### Defined in

[src/sql-builder.ts:631](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L631)

___

### \_normalizeOperator

▸ **_normalizeOperator**(`operator`): [`WhereOperatorNormalized`](../modules.md#whereoperatornormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`WhereOperator`](../modules.md#whereoperator) |

#### Returns

[`WhereOperatorNormalized`](../modules.md#whereoperatornormalized)

#### Defined in

[src/sql-builder.ts:600](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L600)

___

### \_normalizeSingleNested

▸ **_normalizeSingleNested**(`condition`): [`WhereNestedNormalized`](../modules.md#wherenestednormalized)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`WhereSingleNested`](../modules.md#wheresinglenested) |

#### Returns

[`WhereNestedNormalized`](../modules.md#wherenestednormalized)

#### Defined in

[src/sql-builder.ts:660](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L660)

___

### \_resolveFunction

▸ **_resolveFunction**(`name`, `escape?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| [`FunctionFragment`](FunctionFragment.md) |
| `escape?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/sql-builder.ts:693](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L693)

___

### clone

▸ **clone**(`builder`): [`WhereBuilder`](WhereBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/sql-builder.ts:863](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L863)

___

### groupBy

▸ **groupBy**(`groupByInput`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupByInput` | `GroupByInput` |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/sql-builder.ts:529](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L529)

___

### having

▸ **having**(): [`WhereBuilder`](WhereBuilder.md)

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Defined in

[src/sql-builder.ts:533](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L533)

___

### limit

▸ **limit**(`count`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Defined in

[src/sql-builder.ts:541](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L541)

___

### offset

▸ **offset**(`start`, `mode`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `mode` | ``"ROW"`` \| ``"ROWS"`` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Defined in

[src/sql-builder.ts:545](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L545)

___

### orderBy

▸ **orderBy**(`orderByInput`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderByInput` | `OrderByInput` |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Defined in

[src/sql-builder.ts:537](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L537)

___

### raw

▸ **raw**(`rawSql`): [`WhereBuilder`](WhereBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Defined in

[src/sql-builder.ts:549](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L549)

___

### toSQL

▸ **toSQL**(): `string`

#### Returns

`string`

#### Implementation of

BuilderInterface.toSQL

#### Overrides

BuilderBase.toSQL

#### Defined in

[src/sql-builder.ts:857](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L857)
