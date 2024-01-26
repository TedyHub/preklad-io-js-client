Preklad.IO API Client

# Preklad.IO API Client - v1.0.0

## Table of contents

### Classes

- [ApiConfig](classes/ApiConfig.md)
- [ApiError](classes/ApiError.md)

### Type Aliases

- [FetchFunction](README.md#fetchfunction)
- [TranslateOptions](README.md#translateoptions)

### Variables

- [config](README.md#config)
- [translation](README.md#translation)

## Type Aliases

### FetchFunction

Ƭ **FetchFunction**: (`url`: `string`, `options`: `object`) => `Promise`\<`any`\>

#### Type declaration

▸ (`url`, `options`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `object` |

##### Returns

`Promise`\<`any`\>

#### Defined in

[config.ts:1](https://github.com/TedyHub/preklad-io-js-client/blob/ab72497/src/config.ts#L1)

___

### TranslateOptions

Ƭ **TranslateOptions**: `Object`

Optional

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ignoreWords?` | `string`[] |
| `noCache?` | `boolean` |

#### Defined in

[translate.ts:9](https://github.com/TedyHub/preklad-io-js-client/blob/ab72497/src/translate.ts#L9)

## Variables

### config

• `Const` **config**: [`ApiConfig`](classes/ApiConfig.md)

Configuration object

#### Defined in

[config.ts:67](https://github.com/TedyHub/preklad-io-js-client/blob/ab72497/src/config.ts#L67)

___

### translation

• `Const` **translation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clearCache` | () => `void` |
| `config` | [`ApiConfig`](classes/ApiConfig.md) |
| `find` | (`key`: `string`, `to`: `string`, `from`: `string`) => `string` |
| `tr` | (`translateData`: `string` \| {}, `toLanguage`: `string`, `fromLanguage`: `string`, `options`: [`TranslateOptions`](README.md#translateoptions)) => `Promise`\<`NonNullable`\<`unknown`\> \| `string`\> |

#### Defined in

[translate.ts:250](https://github.com/TedyHub/preklad-io-js-client/blob/ab72497/src/translate.ts#L250)
