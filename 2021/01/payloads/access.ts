/**
 * https://shopify.dev/docs/admin-api/access-scopes
 */
export enum AccessScopes {
	/**
	 * Grants `read` access to:
	 * * [Article](https://shopify.dev/docs/admin-api/rest/reference/online-store/article)
	 * * [Blog](https://shopify.dev/docs/admin-api/rest/reference/online-store/blog)
	 * * [Comment](https://shopify.dev/docs/admin-api/rest/reference/online-store/comment)
	 * * [Page](https://shopify.dev/docs/admin-api/rest/reference/online-store/page)
	 * * [Redirect](https://shopify.dev/docs/admin-api/rest/reference/online-store/redirect)
	 */
	ReadContent = 'read_content',
	/**
	 * Grants `write` access to:
	 * * [Article](https://shopify.dev/docs/admin-api/rest/reference/online-store/article)
	 * * [Blog](https://shopify.dev/docs/admin-api/rest/reference/online-store/blog)
	 * * [Comment](https://shopify.dev/docs/admin-api/rest/reference/online-store/comment)
	 * * [Page](https://shopify.dev/docs/admin-api/rest/reference/online-store/page)
	 * * [Redirect](https://shopify.dev/docs/admin-api/rest/reference/online-store/redirect)
	 */
	WriteContent = 'write_content',

	/**
	 * Grants `read` access to:
	 * * [Asset](https://shopify.dev/docs/admin-api/rest/reference/online-store/asset)
	 * * [Theme](https://shopify.dev/docs/admin-api/rest/reference/online-store/theme)
	 */
	ReadThemes = 'read_themes',
	/**
	 * Grants `write` access to:
	 * * [Asset](https://shopify.dev/docs/admin-api/rest/reference/online-store/asset)
	 * * [Theme](https://shopify.dev/docs/admin-api/rest/reference/online-store/theme)
	 */
	WriteThemes = 'write_themes',

	/**
	 * Grants `read` access to:
	 * * [Product](https://shopify.dev/docs/admin-api/rest/reference/products/product)
	 * * [Product Variant](https://shopify.dev/docs/admin-api/rest/reference/products/product-variant)
	 * * [Product Image](https://shopify.dev/docs/admin-api/rest/reference/products/product-image)
	 * * [Collect](https://shopify.dev/docs/admin-api/rest/reference/products/collect)
	 * * [Custom Collection](https://shopify.dev/docs/admin-api/rest/reference/products/customcollection)
	 * * [Smart Collection](https://shopify.dev/docs/admin-api/rest/reference/products/smartcollection)
	 */
	ReadProducts = 'read_products',
	/**
	 * Grants `write` access to:
	 * * [Product](https://shopify.dev/docs/admin-api/rest/reference/products/product)
	 * * [Product Variant](https://shopify.dev/docs/admin-api/rest/reference/products/product-variant)
	 * * [Product Image](https://shopify.dev/docs/admin-api/rest/reference/products/product-image)
	 * * [Collect](https://shopify.dev/docs/admin-api/rest/reference/products/collect)
	 * * [Custom Collection](https://shopify.dev/docs/admin-api/rest/reference/products/customcollection)
	 * * [Smart Collection](https://shopify.dev/docs/admin-api/rest/reference/products/smartcollection)
	 */
	WriteProducts = 'write_products',

	/**
	 * Grants `read` access to:
	 * * [Product Listing](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/productlisting)
	 * * [Collection Listing](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/collectionlisting)
	 */
	ReadProductListings = 'read_product_listings',

	/**
	 * Grants `read` access to:
	 * * [Customer](https://shopify.dev/docs/admin-api/rest/reference/customers/customer)
	 * * [Saved Search](https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch)
	 */
	ReadCustomers = 'read_customers',
	/**
	 * Grants `write` access to:
	 * * [Customer](https://shopify.dev/docs/admin-api/rest/reference/customers/customer)
	 * * [Saved Search](https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch)
	 */
	WriteCustomers = 'write_customers',

	/**
	 * Grants `read` access to:
	 * * [Abandoned checkouts](https://shopify.dev/docs/admin-api/rest/reference/orders/abandoned-checkouts)
	 * * [Customer](https://shopify.dev/docs/admin-api/rest/reference/customers/customer)
	 * * [Fulfillment](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillment)
	 * * [Order](https://shopify.dev/docs/admin-api/rest/reference/orders/order)
	 * * [Transaction](https://shopify.dev/docs/admin-api/rest/reference/orders/transaction)
	 */
	ReadOrders = 'read_orders',
	/**
	 * Grants `read` access to:
	 * * [Abandoned checkouts](https://shopify.dev/docs/admin-api/rest/reference/orders/abandoned-checkouts)
	 * * [Customer](https://shopify.dev/docs/admin-api/rest/reference/customers/customer)
	 * * [Fulfillment](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillment)
	 * * [Order](https://shopify.dev/docs/admin-api/rest/reference/orders/order)
	 * * [Transaction](https://shopify.dev/docs/admin-api/rest/reference/orders/transaction)
	 */
	WriteOrders = 'write_orders',
	/**
	 * Grants `read` access to:
	 * * [Abandoned checkouts](https://shopify.dev/docs/admin-api/rest/reference/orders/abandoned-checkouts)
	 * * [Customer](https://shopify.dev/docs/admin-api/rest/reference/customers/customer)
	 * * [Fulfillment](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillment)
	 * * [Order](https://shopify.dev/docs/admin-api/rest/reference/orders/order)
	 * * [Transaction](https://shopify.dev/docs/admin-api/rest/reference/orders/transaction)
	 *
	 * and grants access to all orders rather than the default window of 60 days worth of orders
	 */
	ReadAllOrders = 'read_all_orders',

	/**
	 * Grants `write` access to GraphQL Admin API [order editing](https://shopify.dev/tutorials/edit-an-existing-order-with-admin-api) features
	 */
	WriteOrderEdits = 'write_order_edits',

	/**
	 * Grants `read` access to:
	 * * [Draft Order](https://shopify.dev/docs/admin-api/rest/reference/orders/draftorder)
	 */
	ReadDraftOrders = 'read_draft_orders',
	/**
	 * Grants `write` access to:
	 * * [Draft Order](https://shopify.dev/docs/admin-api/rest/reference/orders/draftorder)
	 */
	WriteDraftOrders = 'write_draft_orders',

	/**
	 * Grants `read` access to:
	 * * [Inventory Level](https://shopify.dev/docs/admin-api/rest/reference/inventory/inventorylevel)
	 * * [Inventory Item](https://shopify.dev/docs/admin-api/rest/reference/inventory/inventoryitem)
	 */
	ReadInventory = 'read_inventory',
	/**
	 * Grants `write` access to:
	 * * [Inventory Level](https://shopify.dev/docs/admin-api/rest/reference/inventory/inventorylevel)
	 * * [Inventory Item](https://shopify.dev/docs/admin-api/rest/reference/inventory/inventoryitem)
	 */
	WriteInventory = 'write_inventory',

	/**
	 * Grants `read` access to:
	 * * [Location](https://shopify.dev/docs/admin-api/rest/reference/inventory/location)
	 */
	ReadLocations = 'read_locations',

	/**
	 * Grants `read` access to:
	 * * [Script Tag](https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag)
	 */
	ReadScriptTags = 'read_script_tags',
	/**
	 * Grants `write` access to:
	 * * [Script Tag](https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag)
	 */
	WriteScriptTags = 'write_script_tags',

	/**
	 * Grants `read` access to:
	 * * [Fulfullment Service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	ReadFulfillments = 'read_fulfillments',
	/**
	 * Grants `write` access to:
	 * * [Fulfullment Service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	WriteFulfillments = 'write_fulfillments',

	/**
	 * Grants `read` access to [Fulfillment Order](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder) resources assigned to a location managed by your [fulfillment service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	ReadAssignedFulfillmentOrders = 'read_assigned_fulfillment_orders',
	/**
	 * Grants `write` access to [Fulfillment Order](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder) resources assigned to a location managed by your [fulfillment service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	WriteAssignedFulfillmentOrders = 'write_assigned_fulfillment_orders',

	/**
	 * Grants `read` access to [Fulfillemtn Order](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder) resources assigned to merchant-managed locations
	 */
	ReadMerchantManagedFulfillmentOrders = 'read_merchant_managed_fulfillment_orders',
	/**
	 * Grants `write` access to [Fulfillemtn Order](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder) resources assigned to merchant-managed locations
	 */
	WriteMerchantManagedFulfillmentOrders = 'write_merchant_managed_fulfillment_orders',

	/**
	 * Grants `read` access to [Fulfillment Order]https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder() resources assigned to a location managed by any [fulfillment service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	ReadThirdPartyFulfillmentOrders = 'read_third_party_fulfillment_orders',
	/**
	 * Grants `write` access to [Fulfillment Order](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder) resources assigned to a location managed by any [fulfillment service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice)
	 */
	WriteThirdPartyFulfillmentOrders = 'write_third_party_fulfillment_orders',

	/**
	 * Grants `read` access to:
	 * * [Carrier Service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/carrierservice)
	 * * [Country](https://shopify.dev/docs/admin-api/rest/reference/store-properties/country)
	 * * [Province](https://shopify.dev/docs/admin-api/rest/reference/store-properties/province)
	 */
	ReadShipping = 'read_shipping',
	/**
	 * Grants `write` access to:
	 * * [Carrier Service](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/carrierservice)
	 * * [Country](https://shopify.dev/docs/admin-api/rest/reference/store-properties/country)
	 * * [Province](https://shopify.dev/docs/admin-api/rest/reference/store-properties/province)
	 */
	WriteShipping = 'write_shipping',

	/**
	 * Grants `read` access to:
	 * * [Analytics API](https://shopify.dev/tutorials/get-store-metrics-with-analytics-api)
	 */
	ReadAnalytics = 'read_analytics',

	/**
	 * Grants `read` access to:
	 * * [User]https://shopify.dev/docs/admin-api/rest/reference/plus/user() (Shopify Plus)
	 */
	ReadUsers = 'read_users',
	/**
	 * Grants `write` access to:
	 * * [User](https://shopify.dev/docs/admin-api/rest/reference/plus/user) (Shopify Plus)
	 */
	WriteUsers = 'write_users',

	/**
	 * Grants `read` access to:
	 * * [Checkout](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/checkout)
	 */
	ReadCheckouts = 'read_checkouts',
	/**
	 * Grants `write` access to:
	 * * [Checkout](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/checkout)
	 */
	WriteCheckouts = 'write_checkouts',

	/**
	 * Grants `read` access to:
	 * * [Reports](https://shopify.dev/docs/admin-api/rest/reference/analytics/report)
	 */
	ReadReports = 'read_reports',
	/**
	 * Grants `write` access to:
	 * * [Reports](https://shopify.dev/docs/admin-api/rest/reference/analytics/report)
	 */
	WriteReports = 'write_reports',

	/**
	 * Grants `read` access to:
	 * * [Price Rules](https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule)
	 */
	ReadPriceRules = 'read_price_rules',
	/**
	 * Grants `write` access to:
	 * * [Price Rules](https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule)
	 */
	WritePriceRules = 'write_price_rules',

	/**
	 * Grants `write` access to GraphQL Admin API [Discounts features](https://shopify.dev/tutorials/create-and-manage-discounts-with-admin-api)
	 */
	ReadDiscounts = 'read_discounts',
	/**
	 * Grants `write` access to GraphQL Admin API [Discounts features](https://shopify.dev/tutorials/create-and-manage-discounts-with-admin-api)
	 */
	WriteDiscounts = 'write_discounts',

	/**
	 * Grants `read` access to:
	 * * [Marketing Event](https://shopify.dev/docs/admin-api/rest/reference/marketingevent)
	 */
	ReadMarketingEvents = 'read_marketing_events',
	/**
	 * Grants `write` access to:
	 * * [Marketing Event](https://shopify.dev/docs/admin-api/rest/reference/marketingevent)
	 */
	WriteMarketingEvents = 'write_marketing_events',

	/**
	 * Grants `read` access to:
	 * * [ResourceFeedback](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/resourcefeedback)
	 */
	ReadResourceFeedbacks = 'read_resource_feedbacks',
	/**
	 * Grants `write` access to:
	 * * [ResourceFeedback](https://shopify.dev/docs/admin-api/rest/reference/sales-channels/resourcefeedback)
	 */
	WriteResourceFeedbacks = 'write_resource_feedbacks',

	/**
	 * Grants `read` access to:
	 * * [Payout](https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/payout)
	 * * [Balance](https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/balance)
	 * * [Transaction](https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/transaction)
	 */
	ReadShopifyPaymentsPayouts = 'read_shopify_payments_payouts',

	/**
	 * Grants `read` access to:
	 * * [Disputes](https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/dispute)
	 */
	ReadShopifyPaymentsDisputes = 'read_shopify_payments_disputes',

	/**
	 * Grants `read` access to:
	 * * [Translatable Resouce](https://shopify.dev/docs/admin-api/graphql/reference/translations/translatableresource)
	 */
	ReadTranslations = 'read_translations',
	/**
	 * Grants `write` access to:
	 * * [Translatable Resouce](https://shopify.dev/docs/admin-api/graphql/reference/translations/translatableresource)
	 */
	WriteTranslations = 'write_translations',

	/**
	 * Grants `read` access to:
	 * * [Shop Locale](https://shopify.dev/docs/admin-api/graphql/reference/translations/shoplocale)
	 */
	ReadLocales = 'read_locales',
	/**
	 * Grants `write` access to:
	 * * [Shop Locale](https://shopify.dev/docs/admin-api/graphql/reference/translations/shoplocale)
	 */
	WriteLocales = 'write_locales',
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/accessscope#properties-2021-01
 */
export interface AccessScope {
	/**
	 * The access scopes associated to the access token.
	 */
	access_scopes: { handle: AccessScopes };
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/access/storefrontaccesstoken#properties-2021-01
 */
export interface StorefrontAccessToken {
	/**
	 * The unique id representing this access token
	 */
	id: number;
	/**
	 * The issued access token
	 */
	access_token: string;
	/**
	 * The date the access token was created
	 */
	created_at: string;
	/**
	 * The arbitrary title for each token
	 *
	 * @note no constrain on uniqueness
	 */
	title: string;
}
