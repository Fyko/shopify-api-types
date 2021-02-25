<div style="text-align:center;"><h1>Shopify API Types</h1></div>

[![GitHub](https://img.shields.io/github/license/fyko/shopify-api-types)](https://github.com/fyko/shopify-api-types/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/shopify-api-types?color=crimson&logo=npm)](https://www.npmjs.com/package/shopify-api-types)

Simple type definitions for the [Shopify Admin API](https://shopify.dev/docs/admin-api).

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install shopify-api-types
yarn add shopify-api-types
pnpm add shopify-api-types
```

## Project Structure

The exports of each API version is split into three main parts:

- Endpoint options will follow the following structure: `<HTTP Method><Type><Query|JSONBody|Result>` where the type represents what it will return.

  - For example, `GETProductsResult` or `GETProductsQuery`.

- If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

  - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `REST` route object).

- There may be types exported that are identical for all versions. These will be exported as is and can be found in the `common` directory. They will still be prefixed accordingly as described above.

## Usage

You can `require` / `import` the module directly, which will give you the latest types as of the current API version. This is considered the `default` version and will be updated according to Shopify's default API version; this means it may break at any point in time.

> We **strongly recommend** you use a version when importing this module! This will prevent breaking changes when updating the module.

```js
const { Customer } = require('shopify-api-types');
```

```ts
// TypeScript/ES Module support
import { Customer } from 'shopify-api-types';
```

You should instead consider adding the API version you want to target by appending `/20**/**`, where the first `**` represents the API year version and the second `**` represents the API month version (ask Shopify why they version their API like this).

```js
const { Customer } = require('shopify-api-types/2020/01');
```

```ts
// TypeScript/ES Module support
import { Customer } from 'shopify-api-types/2020/01';
```

## Honorable Mentions
Thanks to [Vlad](https://github.com/vladfrangu)'s [`discord-api-types`](https://github.com/discordjs/discord-api-types) over at [Discord.js](https://github.com/discordjs) for the file structure/flow/etc.