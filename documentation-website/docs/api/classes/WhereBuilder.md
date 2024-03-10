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

[src/builders/where-builder.ts:164](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L164)

## Properties

### \_condition

• **\_condition**: [`WhereCondition`](../modules.md#wherecondition)

#### Defined in

[src/builders/where-builder.ts:161](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L161)

___

### \_conditionNormalized

• **\_conditionNormalized**: [`WhereConditionNormalized`](../modules.md#whereconditionnormalized)

#### Defined in

[src/builders/where-builder.ts:162](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L162)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builder-base.ts#L5)

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

[src/builders/where-builder.ts:477](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L477)

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

[src/builders/where-builder.ts:375](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L375)

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

[src/builders/where-builder.ts:344](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L344)

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

[src/builders/where-builder.ts:368](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L368)

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

[src/builders/where-builder.ts:198](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L198)

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

[src/builders/where-builder.ts:219](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L219)

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

[src/builders/where-builder.ts:207](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L207)

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

[src/builders/where-builder.ts:315](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L315)

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

[src/builders/where-builder.ts:266](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L266)

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

[src/builders/where-builder.ts:228](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L228)

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

[src/builders/where-builder.ts:330](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L330)

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

[src/builders/where-builder.ts:291](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L291)

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

[src/builders/where-builder.ts:275](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L275)

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

[src/builders/where-builder.ts:244](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L244)

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

[src/builders/where-builder.ts:304](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L304)

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

[src/builders/where-builder.ts:337](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L337)

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

[src/builders/where-builder.ts:507](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L507)

___

### groupBy

▸ **groupBy**(`groupByInput`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupByInput` | [`GroupByInput`](../modules.md#groupbyinput) |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/builders/where-builder.ts:173](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L173)

___

### having

▸ **having**(): [`WhereBuilder`](WhereBuilder.md)

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Defined in

[src/builders/where-builder.ts:177](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L177)

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

[src/builders/where-builder.ts:185](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L185)

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

[src/builders/where-builder.ts:189](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L189)

___

### orderBy

▸ **orderBy**(`orderByInput`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderByInput` | [`OrderByInput`](../modules.md#orderbyinput) |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Defined in

[src/builders/where-builder.ts:181](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L181)

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

[src/builders/where-builder.ts:193](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L193)

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

[src/builders/where-builder.ts:501](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/where-builder.ts#L501)
