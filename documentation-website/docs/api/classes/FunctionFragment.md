---
id: "FunctionFragment"
title: "Class: FunctionFragment"
sidebar_label: "FunctionFragment"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`FragmentInterface`](../interfaces/FragmentInterface.md)

## Constructors

### constructor

• **new FunctionFragment**(`name`, `args?`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `args` | `FunctionFragmentArg`[] | `[]` |

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Defined in

src/sql-builder.ts:374

## Properties

### \_args

• **\_args**: `FunctionFragmentArg`[]

#### Defined in

src/sql-builder.ts:372

___

### \_name

• **\_name**: `string`

#### Defined in

src/sql-builder.ts:371

## Methods

### toSQL

▸ **toSQL**(`builder`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

`any`

#### Implementation of

[FragmentInterface](../interfaces/FragmentInterface.md).[toSQL](../interfaces/FragmentInterface.md#tosql)

#### Defined in

src/sql-builder.ts:379
