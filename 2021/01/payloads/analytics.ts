/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#properties-2021-01
 */
export interface Report {
	/**
	 * The category for the report
	 */
	category: string;
	/**
	 * The unique id representing the report
	 */
	id: number;
	/**
	 * The name of the report (255 characters max)
	 */
	name: string;
	/**
	 * The ShopifyQL query that generates the report
	 */
	shopify_ql: string;
	/**
	 * The date the report was last modified
	 */
	updated_at: string;
}
