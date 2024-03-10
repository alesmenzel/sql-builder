---
id: "OrderByBuilder"
title: "Class: OrderByBuilder"
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
| `input` | [`OrderByInput`](../modules.md#orderbyinput) |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/builders/order-by-builder.ts:21](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L21)

## Properties

### \_input

• **\_input**: [`OrderByInputNormalized`](../modules.md#orderbyinputnormalized)

#### Defined in

[src/builders/order-by-builder.ts:19](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L19)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builder-base.ts#L5)

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

[src/builders/order-by-builder.ts:50](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L50)

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

[src/builders/order-by-builder.ts:26](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L26)

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

[src/builders/order-by-builder.ts:30](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L30)

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

[src/builders/order-by-builder.ts:34](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L34)

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

[src/builders/order-by-builder.ts:39](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/order-by-builder.ts#L39)
