---
id: "JoinBuilder"
title: "Class: JoinBuilder"
sidebar_label: "JoinBuilder"
sidebar_position: 0
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

[src/sql-builder.ts:185](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L185)

## Properties

### \_joins

• **\_joins**: [`JoinItem`](../modules.md#joinitem)[] = `[]`

#### Defined in

[src/sql-builder.ts:183](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L183)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

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

[src/sql-builder.ts:212](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L212)

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

[src/sql-builder.ts:189](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L189)

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

[src/sql-builder.ts:196](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L196)
