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
| `args` | [`FunctionFragmentArg`](../modules.md#functionfragmentarg)[] | `[]` |

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Defined in

[src/fragments/function-fragment.ts:21](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/function-fragment.ts#L21)

## Properties

### \_args

• **\_args**: [`FunctionFragmentArg`](../modules.md#functionfragmentarg)[]

#### Defined in

[src/fragments/function-fragment.ts:19](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/function-fragment.ts#L19)

___

### \_name

• **\_name**: `string`

#### Defined in

[src/fragments/function-fragment.ts:18](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/function-fragment.ts#L18)

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

[src/fragments/function-fragment.ts:26](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/function-fragment.ts#L26)
