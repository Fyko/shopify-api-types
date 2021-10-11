import type { EmptyResponse } from '../../../common';
import type { DiscountCode, DiscountCodeBatch, PriceRule } from '../payloads/discount';

export type NestedDiscountCode = Record<'discount_code', DiscountCode>;
export type NestedDiscountCodes = Record<'discount_codes', DiscountCode[]>;

export type NestedDiscountCodeBatch = Record<'discount_code_creation', DiscountCodeBatch>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#create-2021-01
 */
export type PostDiscountCodeResponse = NestedDiscountCode;

export type PostDiscountCodeJSONBody = Record<
	'discount_code',
	Omit<DiscountCode, 'id' | 'created_at' | 'updated_at' | 'price_rule_id' | 'usage_count'>
>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#update-2021-01
 */
export type PutDiscountCodeResponse = NestedDiscountCode;

export type PutDiscountCodeJSONBody = Record<
	'discount_code',
	Omit<DiscountCode, 'created_at' | 'updated_at' | 'price_rule_id' | 'usage_count'>
>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#index-2021-01
 */
export type GetDiscountCodesResponse = NestedDiscountCodes;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#show-2021-01
 */
export type GetDiscountCodeResponse = NestedDiscountCode;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#lookup-2021-01
 */
export type GetDiscountCodeLocationResponse = EmptyResponse;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#destroy-2021-01
 */
export type DeleteDiscountCodeResponse = EmptyResponse;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#batch_create-2021-01
 */
export type PostDiscountCodeBatchResponse = NestedDiscountCodeBatch;

export type PostDiscountCodeBatchJSONBody = NestedDiscountCodes;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#batch_show-2021-01
 */
export type GetDiscountCodeBatchResponse = NestedDiscountCodeBatch;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode#batch_discount_codes_index-2021-01
 */
export type GetDiscountCodeBatchDiscountCodesResponse = Record<
	'discount_codes',
	{ id: number | null; code: string; errors: Record<string, unknown> }[]
>;

export type NestedPriceRule = Record<'price_rule', PriceRule>;
export type NestedPriceRules = Record<'price_rules', PriceRule[]>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule#create-2021-01
 */
export type PostPriceRuleResponse = NestedPriceRule;
export type PostPriceRuleJSONBody = NestedPriceRule;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule#update-2021-01
 */
export type PutPriceRuleResponse = NestedPriceRule;
export type PutPriceRuleJSONBody = NestedPriceRule;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule#index-2021-01
 */
export type GetPriceRulesResponse = NestedPriceRules;

export interface GetPriceRulesQuery {
	/**
	 * The maximum number of results to retrieve (default: `50`, max: `250`)
	 */
	limit?: number;
	/**
	 * Shows results after the specified ID
	 */
	since_id?: string;
	/**
	 * Shows price rules created after the provided date
	 */
	created_at_min?: string;
	/**
	 * Shows price rules created before the provided date
	 */
	created_at_max?: string;
	/**
	 * Shows price rules updated after the provided date
	 */
	updated_at_min?: string;
	/**
	 * Shows price rules updated before the provided date
	 */
	updated_at_max?: string;
	/**
	 * Shows price rules starting after the provided date
	 */
	starts_at_min?: string;
	/**
	 * Shows price rules starting before the provided date
	 */
	ends_at_max?: string;
	/**
	 * Shows price rules with times used
	 */
	times_used?: number;
}
