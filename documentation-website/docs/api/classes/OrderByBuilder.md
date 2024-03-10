---
id: "OrderByBuilder"
title: "Class: OrderByBuilder"
sidebar_label: "OrderByBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`OrderByBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new OrderByBuilder**(`builder`, `input`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `input` | `OrderByInput` |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

src/sql-builder.ts:956

## Properties

### \_input

• **\_input**: `OrderByInputNormalized`

#### Defined in

src/sql-builder.ts:954

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

## Methods

### clone

▸ **clone**(): [`OrderByBuilder`](OrderByBuilder.md)

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

src/sql-builder.ts:985

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

src/sql-builder.ts:961

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

src/sql-builder.ts:965

___

### raw

▸ **raw**(`rawSql`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Defined in

src/sql-builder.ts:969

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

src/sql-builder.ts:974
