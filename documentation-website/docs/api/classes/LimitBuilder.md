---
id: "LimitBuilder"
title: "Class: LimitBuilder"
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`LimitBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new LimitBuilder**(`builder`, `count`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `count` | `number` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/builders/limit-builder.ts:10](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L10)

## Properties

### \_count

• **\_count**: `number`

#### Defined in

[src/builders/limit-builder.ts:8](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L8)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builder-base.ts#L5)

## Methods

### clone

▸ **clone**(): [`LimitBuilder`](LimitBuilder.md)

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/builders/limit-builder.ts:29](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L29)

___

### offset

▸ **offset**(`start`, `mode?`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `mode?` | ``"ROW"`` \| ``"ROWS"`` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Defined in

[src/builders/limit-builder.ts:15](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L15)

___

### raw

▸ **raw**(`rawSql`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Defined in

[src/builders/limit-builder.ts:19](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L19)

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

[src/builders/limit-builder.ts:24](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/limit-builder.ts#L24)
