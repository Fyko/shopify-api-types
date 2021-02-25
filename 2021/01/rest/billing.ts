import type { FieldQueryInterface } from '../../../common';
import type {
	ApplicationCharge,
	ApplicationCredit,
	RecurringApplicationCharge,
	UsageCharge,
} from '../payloads/billing';

/* Application Charge */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge#create-2021-01
 */
export interface PostApplicationChargeResult {
	application_charge: ApplicationCharge;
}

export type PostApplicationChargeJSONBody = Pick<ApplicationCharge, 'name' | 'price' | 'return_url'> &
	Partial<Pick<ApplicationCharge, 'test'>>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge#show-2021-01
 */
export interface GetApplicationChargeResult {
	application_charge: ApplicationCharge;
}

export type GetApplicationChargeQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge#index-2021-01
 */
export interface GetApplicationChargesResult {
	application_charges: ApplicationCharge[];
}

export interface GetApplicationChargesQuery extends FieldQueryInterface {
	/**
	 * Restrict results to after the specified id
	 */
	since_id?: string;
}

/* ApplicationCredit */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit#create-2021-01
 */
export interface PostApplicationCreditResult {
	application_credit: ApplicationCredit;
}

export type PostApplicationCreditJSONBody = Pick<ApplicationCredit, 'description' | 'amount'> &
	Partial<Pick<ApplicationCredit, 'test'>>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit#index-2021-01
 */
export interface GetApplicationCreditsResult {
	application_credits: ApplicationCredit[];
}

export type GetApplicationCreditsQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit#show-2021-01
 */
export interface GetApplicationCreditResult {
	application_credit: ApplicationCredit;
}

export type GetApplicationCreditQuery = GetApplicationCreditsQuery;

// pickup here tomorrow: https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge
/* Recurring Application Charge */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#create-2021-01
 */
export interface PostRecurringApplicationChargeResponse {
	recurring_application_charge: RecurringApplicationCharge;
}

export type PostRecurringApplicationChargeJSONBody = Pick<
	RecurringApplicationCharge,
	'name' | 'price' | 'return_url' | 'trial_days'
> &
	Partial<Pick<RecurringApplicationCharge, 'capped_amount' | 'terms'>>;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#show-2021-01
 */
export interface GetRecurringApplicationChargeResponse {
	recurring_application_charge: RecurringApplicationCharge;
}

export type GetRecurringApplicationChargeQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#index-2021-01
 */
export interface GetRecurringApplicationChargesResponse {
	recurring_application_charges: RecurringApplicationCharge[];
}

export interface GetRecurringApplicationChargesQyery extends FieldQueryInterface {
	/**
	 * Restrict results to after the specified id
	 */
	since_id?: string;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#destroy-2021-01
 */
export type DeleteRecurringApplicationChargeResult = never;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#update-2021-01
 */
export type PutRecurringApplicationCharge = GetRecurringApplicationChargeResponse;

export interface PutRecurringApplicationQuery {
	/**
	 * The new capped_amount of an active recurring application charge
	 */
	'recurring_application_charge[capped_amount]': number;
}

/* Usage Charge */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/usagecharge#create-2021-01
 */
export interface PostUsageChargeResponse {
	usage_charge: UsageCharge;
}

export interface PostUsageChargeJSONBody {
	usage_charge: Pick<UsageCharge, 'description' | 'price'>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/usagecharge#show-2021-01
 */
export interface GetUsageChargeResponse {
	usage_charge: UsageCharge;
}

export type GetUsageChargeQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/usagecharge#index-2021-01
 */
export interface GetUsageChargesResponse {
	usage_charges: UsageCharge[];
}

export type GetUsageChargesQuery = FieldQueryInterface;
