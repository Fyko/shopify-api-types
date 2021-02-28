import type { CountResult, EmptyResponse, FieldQueryInterface } from '../../../common';
import type { Metafield } from '../payloads/metafield';

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#index-2020-04
 */
export interface GetMetafieldsResult {
	metafields: Metafield[];
}

export interface GetMetafieldsQuery extends FieldQueryInterface {
	/**
	 * Amount of results to return (50-250)
	 */
	limit?: number;
	/**
	 * Restrict results to after the specific id
	 */
	since_id: number;
	/**
	 * Shows metafields created after the provided date
	 */
	created_at_min?: string;
	/**
	 * Shows metafields created before the provided date
	 */
	created_at_max?: string;
	/**
	 * Shows metafields updated after the provided date
	 */
	updated_at_min?: string;
	/**
	 * Shows metafields updated before the provided date
	 */
	updated_at_max?: string;
	/**
	 * Shows metafields within the given namespace
	 */
	namespace?: string;
	/**
	 * Show metafields with the provided key
	 */
	key?: string;
	/**
	 * Shows metafields with the provided value type
	 */
	value_type?: 'string' | 'integer';
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#index-2020-04
 */
export type GetProductImageMetafieldsResults = GetMetafieldsResult;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#count-2020-04
 */
export type GetMetafieldCountResult = CountResult;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#show-2020-04
 */
export interface GetMetafieldResponse {
	metafield: Metafield;
}

export type GetMetafieldQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#create-2020-04
 */
export type PostMetafieldResponse = GetMetafieldResponse;

export interface PostMetafieldJSONBody {
	metafield: Pick<Metafield, 'namespace' | 'key' | 'value' | 'value_type'>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#update-2020-04
 */
export type PutMetafieldResponse = GetMetafieldResponse;

export interface PutMetafieldJSONBody {
	metafield: Pick<Metafield, 'key' | 'value' | 'value_type'>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#destroy-2020-04
 */
export type DeleteMetafieldResponse = EmptyResponse;
