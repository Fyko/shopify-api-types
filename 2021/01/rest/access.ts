import type { AccessScope, StorefrontAccessToken } from '../payloads';

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/accessscope#index-2021-01
 */
export type GetAccessScopesResult = AccessScope;

export type PostStorefrontAccessTokenJSONBody = Pick<StorefrontAccessToken, 'title'>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/storefrontaccesstoken#create-2021-01
 */
export interface PostStorefrontAccessTokenResult {
	storefront_access_token: StorefrontAccessToken;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/storefrontaccesstoken#destroy-2021-01
 */
export type DeleteStorefrontAccessTokenResult = never;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/storefrontaccesstoken#index-2021-01
 */
export interface GetStorefrontAccessTokensResult {
	storefront_access_tokens: StorefrontAccessToken[];
}
