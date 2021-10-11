/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode
 */
export interface DiscountCode {
	/**
	 * The case-insensitive discount code that customers use at checkout (max 255 chars)
	 */
	code: string;
	/**
	 * The date when the discount code was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * The date when the discount code was last updated
	 */
	updated_at: string;
	/**
	 * The id of this discount code
	 * @readonly
	 */
	id: number;
	/**
	 * The ID for the price rule that this discount code belongs to
	 * @readonly
	 */
	price_rule_id: number;
	/**
	 * The number of times this discount code has been used
	 * @readonly
	 */
	usage_count: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule
 */
export interface PriceRule {
	/**
	 * The allocation method of the price rule:
	 *
	 * * `each`: The discount is applied to each of the entitled items. For example, for a price rule that takes $15 off, each entitled line item in a checkout will be discounted by $15.
	 * * `across`: The calculated discount amount will be applied across the entitled items. For example, for a price rule that takes $15 off, the discount will be applied across all the entitled items.
	 *
	 * When the value of `target_type` is `shipping_line`, then this value must be `each`
	 */
	allocation_method: 'each' | 'across';
	/**
	 * The date when the price rule was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * The date when the price rule was last updated
	 */
	updated_at: string;
	/**
	 * The custom selection for the price rule:
	 *
	 * * `all`: The price rule is valid for all customers
	 * * `prerequisite`: The customer must either belong to one of the customer saved searches specified by `prerequisite_saved_search_ids`, or be one of the customers specified by `prerequisite_customer_ids`
	 */
	customer_selection: 'all' | 'prerequisite';
	/**
	 * The date when the price rule ends
	 */
	ends_at: string;
	/**
	 * A list of IDs of collections whos products will be eligible to the discount
	 * It can be used only with `target_type` set to `line_item` and `target_selection` set to entitled
	 * It can't be used in combination with `entitled_product_ids` or `entitled_variant_ids`
	 */
	entitled_collection_ids: number[];
	/**
	 * A list of IDs of shipping countries that will be entitled to the discount
	 * It can be used only with `target_type` set to `shipping_lin`e and `target_selection` set to `entitled`
	 */
	entitled_country_ids: number[];
	/**
	 * A list of IDs of products that will be entitled to the discount
	 * It can be used only with `target_type` set to `shipping_lin`e and `target_selection` set to `entitled`
	 *
	 * @note If a product variant is included in `entitled_variant_ids`, then `entitled_product_ids` can't include the ID of the product associated with that variant.
	 */
	entitled_product_its: number[];
	/**
	 * A list of IDs of product variants that will be entitled to the discount
	 * It can be used only with `target_type` set to `line_item` and `target_selection` set to `entitled`
	 *
	 * @note If a product variant is included in `entitled_variant_ids`, then `entitled_product_ids` can't include the ID of the product associated with that variant.
	 */
	entitled_variant_ids: number[];
	/**
	 * The ID of the price rule
	 */
	id: number;
	/**
	 * Whether the generated discount code will be valid only for a single use per customer
	 */
	once_per_customer: boolean;
	/**
	 * A list of customer IDs. For the price rule to be applicable, the customer must match one of the specified customers
	 * If `prerequisite_customer_ids` is populated, then `prerequisite_saved_search_ids` must be empty
	 */
	prerequisite_customer_ids: number[];
	/**
	 * The minimum number of items for the price rule to be applicable:
	 * * `greater_than_or_equal_to`: The quantity of an entitled cart item must be greater than or equal to this value
	 */
	prerequisite_quantity_range: { greater_than_or_equal_to: number };
	/**
	 * A list of customer saved search IDs
	 * For the price rule to be applicable, the customer must be in the group of customers matching a customer saved search
	 * If `prerequisite_saved_search_id`s is populated, then `prerequisite_customer_ids` must be empty
	 */
	prerequisite_saved_search_ids: number[];
	/**
	 * The maximum shipping price for the price rule to be applicable:
	 * * `less_than_or_equal_to`: The shipping price must be less than or equal to this value
	 */
	prerequisite_shipping_price_range: { less_than_or_equal_to: string };
	/**
	 * The minimum subtotal for the price rule to be applicable:
	 * * `greater_than_or_equal_to`: The subtotal of the entitled cart items must be greater than or equal to this value for the discount to apply
	 */
	prerequisite_subtotal_range: { greater_than_or_equal_to: string };
	/**
	 * The prerequisite purchase for a Buy X Get Y discount:
	 * * `prerequisite_amount`: The minimum purchase amount required to be entitled to the discount
	 */
	prerequisite_to_entitlement_purchase: { prerequisite_amount: string };
	/**
	 * The date when the price rule starts
	 */
	starts_at: string;
	/**
	 * The target selection method of the price rule:
	 *
	 * * `all`: The price rule applies the discount to all line items in the checkout
	 * * `entitled`: The price rule applies the discount to selected entitlements only
	 */
	target_selection: 'all' | 'entitled';
	/**
	 * The target type that the price rule applies to:
	 *
	 * * `line_item`: the price rule applies to the cart's line items
	 * * `shipping_line`: the price rule applies to the cart's shipping lines
	 */
	/**
	 * The title of the price rule.
	 * This is used by the Shopify admin search to retrieve discounts.
	 * It is also displayed on the Discounts page of the Shopify admin for bulk discounts.
	 *
	 * For non-bulk discounts, the discount code is displayed on the admin.
	 *
	 * @note For a consistent search experience, use the same value for `title` as the `code` property of the associated discount code.
	 */
	title: string;
	/**
	 * The maximum number of times the price rule can be used, per discount code
	 */
	usage_limit: number;
	/**
	 * List of product ids that will be a prerequisites for a Buy X Get Y type discount. The `prerequisite_product_ids` can be used only with:
	 *
	 * * `target_type` set to `line_item`
	 * * `target_selection` set to `entitled`
	 * * `allocation_method` set to `each`
	 * * `prerequisite_to_entitlement_quantity_ratio` defined
	 *
	 * @note If a product variant is included in `prerequisite_variant_ids`, then `prerequisite_product_ids` can't include the ID of the product associated with that variant
	 */
	prerequisite_product_ids: number[];
	/**
	 * List of variant ids that will be a prerequisites for a Buy X Get Y type discount. The `prerequisite_variant_ids` can be used only with:
	 *
	 * * `target_type` set to `line_item`
	 * * `target_selection` set to `entitled`
	 * * `allocation_method` set to `each`
	 * * `prerequisite_to_entitlement_quantity_ratio` defined
	 *
	 * @note If a product is included in `prerequisite_product_ids`, then `prerequisite_variant_ids` can't include the ID of any variants associated with that product
	 */
	prerequisite_variant_ids: number[];
	/**
	 * List of collection ids that will be a prerequisites for a Buy X Get Y discount. The `entitled_collection_ids` can be used only with:
	 *
	 * * `target_type` set to `line_item`
	 * * `target_selection` set to `entitled`
	 * * `allocation_method` set to `each`
	 * * `prerequisite_to_entitlement_quantity_ratio` defined
	 *
	 * Cannot be used in combination with `prerequisite_product_ids` or `prerequisite_variant_ids`
	 */
	prerequisite_collection_ids: number[];
	/**
	 * The value of the price rule.
	 * If if the value of `target_type` is `shipping_line`, then only `-100` is accepted. The value must be negative.
	 */
	value: number;
	/**
	 * The value type of the price rule:
	 *
	 * * `fixed_amount`: Applies a discount of `value` as a unit of the store's currency. For example, if `value` is -30 and the store's currency is USD, then $30 USD is deducted when the discount is applied
	 * * `precentage`: Applies a percentage discount of `value`. For example, if `value` is -30, then 30% will be deducted when the discount is applied
	 *
	 * If target_type is `shipping_line`, then only percentage is accepted
	 */
	value_type: 'fixed_amount' | 'percentage';
	/**
	 * Buy/Get ratio for a Buy X Get Y discount. `prerequisite_quantity` defines the necessary 'buy' quantity and `entitled_quantity` the offered 'get' quantity.
	 *
	 * The `prerequisite_to_entitlement_quantity_ratio` can be used only with:
	 *
	 * * `value_type` set to `percentage`
	 * * `target_type` set to `line_item`
	 * * `target_selection` set to `entitled`
	 * * `allocation_method` set to `each`
	 * * `prerequisite_product_ids` or `prerequisite_variant_ids` or `prerequisite_collection_ids` defined
	 * * `entitled_product_ids` or `entitled_variant_ids` or `entitled_collection_ids` defined
	 *
	 * @note Cannot be used in combination with `prerequisite_subtotal_range`, `prerequisite_quantity_range` or `prerequisite_shipping_price_range`
	 */
	prerequisite_to_entitlement_quantity_ratio: { prerequisite_quantity: number; entitled_quantity: number };
	/**
	 * The number of times the discount can be allocated on the cart - if eligible.
	 * For example a Buy 1 hat Get 1 hat for free discount can be applied 3 times on a cart having more than 6 hats, where maximum of 3 hats get discounted - if the `allocation_limit` is 3
	 * Empty (`null`) `allocation_limit` means unlimited number of allocations.
	 *
	 * @note `allocation_limit` is only working with Buy X Get Y discount. The default value on creation will be `null` (unlimited).
	 */
	allocation_limit: number;
}
