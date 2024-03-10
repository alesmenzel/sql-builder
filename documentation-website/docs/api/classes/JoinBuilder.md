---
id: "JoinBuilder"
title: "Class: JoinBuilder"
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`JoinBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new JoinBuilder**(`builder`): [`JoinBuilder`](JoinBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`JoinBuilder`](JoinBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/builders/join-builder.ts:28](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/join-builder.ts#L28)

## Properties

### \_joins

• **\_joins**: [`JoinItem`](../modules.md#joinitem)[] = `[]`

#### Defined in

[src/builders/join-builder.ts:26](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/join-builder.ts#L26)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builder-base.ts#L5)

## Methods

### clone

▸ **clone**(`builder`): `BuilderInterface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

`BuilderInterface`

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/builders/join-builder.ts:55](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/join-builder.ts#L55)

___

### join

▸ **join**(`join`, `«destructured»?`): [`JoinBuilder`](JoinBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `join` | [`JoinItem`](../modules.md#joinitem) | `undefined` |
| `«destructured»` | `Object` | `{}` |
| › `enabled?` | `boolean` | `true` |

#### Returns

[`JoinBuilder`](JoinBuilder.md)

#### Defined in

[src/builders/join-builder.ts:32](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/join-builder.ts#L32)

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

[src/builders/join-builder.ts:39](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/join-builder.ts#L39)
