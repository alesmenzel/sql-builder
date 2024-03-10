---
id: "HavingBuilder"
title: "Class: HavingBuilder"
sidebar_label: "HavingBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`HavingBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new HavingBuilder**(`builder`): [`HavingBuilder`](HavingBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`HavingBuilder`](HavingBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/sql-builder.ts:914](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L914)

## Properties

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

## Methods

### clone

▸ **clone**(`builder`): [`HavingBuilder`](HavingBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`HavingBuilder`](HavingBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/sql-builder.ts:939](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L939)

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

[src/sql-builder.ts:922](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L922)

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

[src/sql-builder.ts:926](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L926)

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

[src/sql-builder.ts:918](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L918)

___

### raw

▸ **raw**(`rawSql`): [`HavingBuilder`](HavingBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`HavingBuilder`](HavingBuilder.md)

#### Defined in

[src/sql-builder.ts:930](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L930)

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

[src/sql-builder.ts:935](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L935)
