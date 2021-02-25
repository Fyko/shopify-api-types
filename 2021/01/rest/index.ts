export * from './access';

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
};
