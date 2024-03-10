---
id: "RawFragment"
title: "Class: RawFragment"
sidebar_label: "RawFragment"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`FragmentInterface`](../interfaces/FragmentInterface.md)

## Constructors

### constructor

• **new RawFragment**(`sql`): [`RawFragment`](RawFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`RawFragment`](RawFragment.md)

#### Defined in

src/sql-builder.ts:351

## Properties

### \_sql

• **\_sql**: `string`

#### Defined in

src/sql-builder.ts:349

## Methods

### toSQL

▸ **toSQL**(`_builder`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_builder` | [`Builder`](Builder.md) |

#### Returns

`string`

#### Implementation of

[FragmentInterface](../interfaces/FragmentInterface.md).[toSQL](../interfaces/FragmentInterface.md#tosql)

#### Defined in

src/sql-builder.ts:355
