export * from './access';
export * from './analytics';
export * from './billing';

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
	storefrontAccessToken(id: number) {
		return `/admin/api/2021-01/storefront_access_tokens/${id}.json` as const;
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
	report(id: number) {
		return `/admin/api/2021-01/reports/${id}.json` as const;
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
	recurringApplicationCharge(id: number) {
		return `/admin/api/2021-01/recurring_application_charges/${id}.json` as const;
	},
	/**
	 * Route for:
	 * - PUT `/admin/api/2021-01/recurring_application_charges/{recurring_application_charge.id}/customize.json`
	 */
	customizeRecurringApplicationCharge(id: number) {
		return `/admin/api/2021-01/recurring_application_charges/${id}/customize.json` as const;
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
};
