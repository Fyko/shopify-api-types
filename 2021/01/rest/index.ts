export * from './access';
export * from './analytics';
export * from './customers';
export * from './billing';
export * from './metafield';

export const APIVersion = '2021-01';
export const Routes = {
	/**
	 * Route for:
	 * - GET `/admin/oauth/access_scopes.json`
	 */
	accessScopes() {
		return '/admin/oauth/access_scopes.json' as const;
	},
	/**
	 * Route for:
	 * - GET  `/admin/api/2021-01/storefront_access_tokens.json`
	 * - POST `/admin/api/2021-01/storefront_access_tokens.json`
	 */
	storefrontAccessTokens() {
		return `/admin/api/2021-01/storefront_access_tokens.json` as const;
	},
	/**
	 * Route for:
	 * - DELETE `/admin/api/2021-01/storefront_access_tokens/{storefront_access_token.id}.json `
	 */
	storefrontAccessToken(storefrontAccessTokenId: number) {
		return `/admin/api/2021-01/storefront_access_tokens/${storefrontAccessTokenId}.json` as const;
	},
	/**
	 * Route for:
	 * - GET  `/admin/api/2021-01/reports.json`
	 * - POST `/admin/api/2021-01/reports.json`
	 */
	reports() {
		return '/admin/api/2021-01/reports.json' as const;
	},
	/**
	 * Route for:
	 * - GET    `/admin/api/2021-01/reports/{report.id}.json`
	 * - PUT    `/admin/api/2021-01/reports/{report.id}.json`
	 * - DELETE `/admin/api/2021-01/reports/{report.id}.json`
	 */
	report(reportId: number) {
		return `/admin/api/2021-01/reports/${reportId}.json` as const;
	},
	/**
	 * Route for:
	 * - GET  `/admin/api/2021-01/recurring_application_charges.json`
	 * - POST `/admin/api/2021-01/recurring_application_charges.json`
	 */
	recurringApplicationCharges() {
		return '/admin/api/2021-01/recurring_application_charges.json' as const;
	},
	/**
	 * Route for:
	 * - GET    `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}.json`
	 * - DELETE `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}.json`
	 */
	recurringApplicationCharge(recurringApplicationChargeId: number) {
		return `/admin/api/2021-01/recurring_application_charges/${recurringApplicationChargeId}.json` as const;
	},
	/**
	 * Route for:
	 * - PUT `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}/customize.json`
	 */
	customizeRecurringApplicationCharge(recurringApplicationChargeId: number) {
		return `/admin/api/2021-01/recurring_application_charges/${recurringApplicationChargeId}/customize.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}/usage_charges.json`
	 * - POST `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}/usage_charges.json`
	 */
	usageCharges(recurringApplicationChargeId: number) {
		return `/admin/api/2021-01/recurring_application_charges/${recurringApplicationChargeId}/usage_charges.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}/usage_charges/{usage_charge.id}.json`
	 */
	usageCharge(recurringApplicationChargeId: number, usageChargeId: number) {
		return `/admin/api/2021-01/recurring_application_charges/${recurringApplicationChargeId}/usage_charges/${usageChargeId}.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2020-04/metafields.json`
	 * - POST `/admin/api/2020-04/metafields.json`
	 */
	metafields() {
		return `/admin/api/2020-04/metafields.json` as const;
	},
	/**
	 * Route for:
	 * - GET    `/admin/api/2020-04/metafields/{metafield.id}.json`
	 * - PUT    `/admin/api/2020-04/metafields/{metafield.id}.json`
	 * - DELETE `/admin/api/2020-04/metafields/{metafield.id}.json`
	 */
	metafield(metafieldId: number) {
		return `/admin/api/2020-04/metafields/${metafieldId}.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2020-04/metafields/count.json`
	 */
	metafieldCount() {
		return `/admin/api/2020-04/metafields/count.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2020-04/metafields.json?metafield[owner_id]={owner.id}&metafield[owner.resource]={owner.resouce}
	 */
	productImageMetafields(ownerId: number, ownerResource: string) {
		return `/admin/api/2020-04/metafields.json?metafield[owner_id]=${ownerId}&metafield[owner.resource]=${ownerResource}` as const;
	},
	/**
	 * Route for:
	 * - GET  `/admin/api/2020-04/customers.json`
	 * - POST `/admin/api/2020-04/customers.json`
	 */
	customers() {
		return `/admin/api/2020-04/customers.json` as const;
	},
	/**
	 * Route for:
	 * - GET     `/admin/api/2020-04/customers/{customer.id}.json`
	 * - PUT     `/admin/api/2020-04/customers/{customer.id}.json`
	 * - DELETE  `/admin/api/2020-04/customers/{customer.id}.json`
	 */
	customer(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}.json` as const;
	},
	/**
	 * Route for:
	 * - GET `/admin/api/2020-04/customers/search.json`
	 */
	customerSearch() {
		return `/admin/api/2020-04/customers/search.json` as const;
	},
	/**
	 * Route for:
	 * - POST `/admin/api/2020-04/customers/{customer.id}/account_activation_url.json`
	 */
	customerAccountActivationUrl(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}/account_activation_url.json` as const;
	},
	/**
	 * Route for:
	 * - POST `/admin/api/2020-04/customers/{customer.id}/send_invite.json`
	 */
	customerSendInvite(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}/send_invite.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customers/count.json`
	 */
	customerCount() {
		return `/admin/api/2020-04/customers/count.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customers/{customer_id}/orders.json`
	 */
	customerOrders(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}/orders.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customers/{customer.id}/addresses.json`
	 * - POST `/admin/api/2020-04/customers/{customer.id}/addresses.json`
	 */
	customerAddresses(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}/addresses.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customers/{customer.id}/addresses/{address.id}.json`
	 * - PUT `/admin/api/2020-04/customers/{customer.id}/addresses/{address.id}.json`
	 * - DELETE `/admin/api/2020-04/customers/{customer.id}/addresses/{address.id}.json`
	 */
	customerAddress(customerId: number, addressId: number) {
		return `/admin/api/2020-04/customers/${customerId}/addresses/${addressId}.json` as const;
	},
	/**
	 * Route for:
	 * - PUT `/admin/api/2020-04/customers/{customer.id}/addresses/set.json`
	 */
	setCustomerAddresses(customerId: number) {
		return `/admin/api/2020-04/customers/${customerId}/addresses/set.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - PUT `/admin/api/2020-04/customers/{customer.id}/addresses/{address.id}/default.json`
	 */
	setDefaultCustomerAddress(customerId: number, addressId: number) {
		return `/admin/api/2020-04/customers/${customerId}/addresses/${addressId}/default.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customer_saved_searches.json`
	 * - POST `/admin/api/2020-04/customer_saved_searches.json`
	 */
	customerSavedSearches() {
		return `/admin/api/2020-04/customer_saved_searches.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customer_saved_searches/count.json`
	 */
	customerSavedSearchesCount() {
		return `/admin/api/2020-04/customer_saved_searches/count.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customer_saved_searches/{customer_saved_search.id}.json`
	 * - PUT `/admin/api/2020-04/customer_saved_searches/{customer_saved_search.id}.json`
	 * - DELETE `/admin/api/2020-04/customer_saved_searches/{customer_saved_search.id}.json`
	 */
	customerSavedSearch(customerSavedSearchId: number) {
		return `/admin/api/2020-04/customer_saved_searches/${customerSavedSearchId}.json` as const;
	},
	/**
	 * Route for:
	 *
	 * - GET `/admin/api/2020-04/customer_saved_searches/{customer_saved_search.id}/customers.json`
	 */
	customerSavedSearchCustomers(customerSavedSearchId: number) {
		return `/admin/api/2020-04/customer_saved_searches/${customerSavedSearchId}/customers.json` as const;
	},
};
// NOTE: remember metafield routes on products later
