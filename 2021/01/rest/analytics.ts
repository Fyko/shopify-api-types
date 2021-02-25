import type { Report } from '../payloads/analytics';

export interface GetReportsQuery {
	/**
	 * A comma-separated list of report ids
	 */
	ids?: string;
	/**
	 * The amount of results to return (50 - 250)
	 * @default 50
	 */
	limit?: number;
	/**
	 * Restricts results to after the specified id
	 */
	since_id?: number;
	/**
	 * Shows reports last updated after date (format: 2014-04-25T16:15:47-04:00)
	 */
	updated_at_min?: string;
	/**
	 * Shows reports last updated before date (format: 2014-04-25T16:15:47-04:00)
	 */
	updated_at_max?: string;
	/**
	 * A comma-separated list of fields to include in the response
	 */
	fields?: string;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#index-2021-01
 */
export interface GetReportsResult {
	reports: Report[];
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#show-2021-01
 */
export interface GetReportResult {
	report: Report;
}

export type PostReportJSONBody = Pick<Report, 'name' | 'shopify_ql'>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#create-2021-01
 */
export interface PostReportResult {
	report: Report;
}

export interface PutReportJSONBody {
	report: Pick<Report, 'id'> & Partial<Report>;
}
/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#update-2021-01
 */
export interface PutReportResult {
	report: Report;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/analytics/report#destroy-2021-01
 */
export type DeleteReportResult = never;
