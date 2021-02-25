import type { TestInterface } from '../../../common';

export enum ApplicationChargeStatus {
	/**
	 * The application charge is pending approval by the merchant
	 */
	Pending = 'pending',
	/**
	 * The application charge has been activated by the app and will be paid out to the Partner
	 */
	Active = 'active',
	/**
	 * The application charge was declined by the merchant
	 */
	Declined = 'declined',
	/**
	 * The application charge was not accepted within two days of being created
	 */
	Expired = 'expired',
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge#properties-2021-01
 */
export interface ApplicationCharge extends TestInterface {
	/**
	 * The URL where the merchant accepts or declines the application charge
	 */
	confirmation_url: string;
	/**
	 * The date the application charge was created
	 */
	created_at: string;
	/**
	 * The unique id representing the application charge
	 */
	id: number;
	/**
	 * The name of the application
	 */
	name: string;
	/**
	 * The price of the application charge (0.50 - 10,000)
	 */
	price: string;
	/**
	 *  The URL where the merchant is redirected after accepting a charge
	 */
	return_url: string;
	/**
	 * The status of the application charge
	 */
	status: ApplicationChargeStatus;
	/**
	 * The date the application charge was last updated
	 */
	updated_at: string;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit#properties-2021-01
 */
export interface ApplicationCredit extends TestInterface {
	/**
	 * The description of the application credit
	 */
	description: string;
	/**
	 * The unique id representing the application credit
	 */
	id: number;
	/**
	 * The amount refunded by the application credit
	 */
	amount: number;
}

export enum RecurringApplicationChargeStatus {
	/**
	 * The recurring charge is pending
	 */
	Pending = 'pending',
	/**
	 * The recurring charge is activated (the only status that causes a merchant to be charged)
	 */
	Active = 'active',
	/**
	 * The recurring charge has been declined
	 */
	Declined = 'declined',
	/**
	 * The recurring charge was not accepted within two days of being created
	 */
	Expired = 'expired',
	/**
	 * The recurring charge is on hold due to a shop subscription non-payment
	 */
	Frozen = 'frozen',
	/**
	 * The developer cancelled the recurring charge
	 */
	Cancelled = 'cancelled',
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge#properties-2021-01
 */
export interface RecurringApplicationCharge extends TestInterface {
	/**
	 * The date the customer activated the recurring application charge (null if not activated)
	 */
	activated_on: string | null;
	/**
	 * The date when the customer is billed (null if not accepted)
	 */
	billing_on: string | null;
	/**
	 * The date when the merchant cancelled the recurring application charge (null if not cancelled)
	 */
	cancelled_on: string | null;
	/**
	 * The limit a customer can be charged for usagebased billing
	 */
	capped_amount?: string;
	/**
	 * The URL where the merchant accepts or declines the recurring application charge
	 */
	confirmation_url: string;
	/**
	 * The date the recurring application charge was created
	 */
	created_at: string;
	/**
	 * The unique id representing the recurring application charge
	 */
	id: number;
	/**
	 * The name of the recurring application charge
	 */
	name: string;
	/**
	 * THe price of the recurring application charge
	 */
	price: string;
	/**
	 * The URL where the merchant is redirected after accepting the charge
	 */
	return_url: string;
	/**
	 * The URL where the merchant is redirected after accepting the charge with the charge id appended
	 */
	decorated_return_url: string;
	/**
	 * The status of the recurring charge
	 */
	status: RecurringApplicationChargeStatus;
	/**
	 * The terms and conditions of usage-based billing charges
	 */
	terms?: string;
	/**
	 * The number of days that the customer is eligible for a free trial
	 */
	trial_days: number;
	/**
	 * The date when the free trial ends
	 */
	trial_ends_on: string | null;
	/**
	 * The date the recurring application charge was last updated
	 */
	updated_at: string;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/billing/usagecharge#properties-2021-01
 */
export interface UsageCharge {
	/**
	 * The date the usage charge was created
	 */
	created_at: string;
	/**
	 * The description of the usage charge
	 */
	description: string;
	/**
	 * The unique id of the usage charge
	 */
	id: number;
	/**
	 * The price of the usage charge
	 */
	price: number;
	/**
	 * The unique id of the recurring application charge the usage charge belongs to
	 */
	recurring_application_charge_id: number;
	/**
	 * The date the usage charge was last updated
	 */
	updated_at: string;
}
