---
id: "GroupByBuilder"
title: "Class: GroupByBuilder"
sidebar_label: "GroupByBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`GroupByBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new GroupByBuilder**(`builder`, `input`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `input` | `GroupByInput` |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/sql-builder.ts:877](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L877)

## Properties

### \_input

• **\_input**: `GroupByInput`

#### Defined in

[src/sql-builder.ts:875](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L875)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

## Methods

### clone

▸ **clone**(`builder`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/sql-builder.ts:908](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L908)

___

### having

▸ **having**(): [`GroupByBuilder`](GroupByBuilder.md)

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/sql-builder.ts:882](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L882)

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

[src/sql-builder.ts:890](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L890)

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

[src/sql-builder.ts:894](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L894)

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

[src/sql-builder.ts:886](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L886)

___

### raw

▸ **raw**(`rawSql`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/sql-builder.ts:898](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L898)

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

[src/sql-builder.ts:903](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L903)
