---
id: "HavingBuilder"
title: "Class: HavingBuilder"
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

[src/builders/having-builder.ts:10](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L10)

## Properties

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builder-base.ts#L5)

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

[src/builders/having-builder.ts:36](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L36)

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

[src/builders/having-builder.ts:18](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L18)

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

[src/builders/having-builder.ts:22](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L22)

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

[src/builders/having-builder.ts:14](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L14)

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

[src/builders/having-builder.ts:26](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L26)

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

[src/builders/having-builder.ts:31](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/having-builder.ts#L31)
