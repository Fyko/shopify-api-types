import type { CurrencyCode } from '../../../common';
import type { Metafield } from './metafield';

export enum CustomerAccountState {
	/**
	 * The customer doesn't have an active account
	 */
	Disabled = 'disabled',
	/**
	 * The customer has recieved an email to create an account
	 */
	Invited = 'invited',
	/**
	 * The customer has crated an account
	 */
	Enabled = 'enabled',
	/**
	 * The customer declined the email invite to crate an account
	 */
	Declined = 'declined',
}

export enum CustomerTaxExceptions {
	/**
	 * This customer is exempt from all Canadian taxes.
	 */
	ExemptAll = 'EXEMPT_ALL',

	/**
	 * This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada.
	 */
	CAStatusCardExemption = 'CA_STATUS_CARD_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada.
	 */
	CADiplomatExemption = 'CA_DIPLOMAT_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia.
	 */
	CABCResellerExemption = 'CA_BC_RESELLER_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba.
	 */
	CAMBResellerExemption = 'CA_MB_RESELLER_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan.
	 */
	CASKResellerExemption = 'CA_SK_RESELLER_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia.
	 */
	CABCCommercialFisheryExemption = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba.
	 */
	CAMBCommercialFisheryExemption = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia.
	 */
	CANSCommercialFisheryExemption = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island.
	 */
	CAPECommercialFisheryExemption = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan.
	 */
	CASKCommercialFisheryExemption = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia.
	 */
	CABCProductionAndMachineryExemption = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan.
	 */
	CASKProductionAndMachineryExemption = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia.
	 */
	CABCSubContractorExemption = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan.
	 */
	CASKSubContractorExemption = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia.
	 */
	CABCContractorExemption = 'CA_BC_CONTRACTOR_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan.
	 */
	CASKContractorExemption = 'CA_SK_CONTRACTOR_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario.
	 */
	CAONPurchaseExemption = 'CA_ON_PURCHASE_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba.
	 */
	CAMBFarmerExemption = 'CA_MB_FARMER_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia.
	 */
	CANSFarmerExemption = 'CA_NS_FARMER_EXEMPTION',

	/**
	 * This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan.
	 */
	CASKFarmerExemption = 'CA_SK_FARMER_EXEMPTION',
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#properties-2020-04
 */
export interface Customer {
	/**
	 * Whether the customer has consented to receive marketing material via email
	 */
	accepts_marketing: boolean;
	/**
	 * The date when the customer consented to recieving marketing material by email
	 */
	accepts_marketing_updated_at: string;
	/**
	 * A list of the ten most recently updated addresses for the customer
	 */
	addresses: Omit<Customer, 'name'> & { customer_id: number; id: number }[];
	/**
	 * The three-letter code for the currency that the customer used when they paid for their last order.
	 * @readonly
	 */
	currency: CurrencyCode;
	/**
	 * The date the customer was created
	 */
	created_at: string;
	/**
	 * The default address for the customer
	 */
	default_address: Omit<Customer, 'name'> & { customer_id: number; id: number };
	/**
	 * The unique email for the customer
	 */
	email: string;
	/**
	 * The customer's first name
	 */
	first_name: string;
	/**
	 * The unique id for the customer
	 */
	id: string;
	/**
	 * The customer's last name
	 */
	last_name: string;
	/**
	 * The id of the customer's last order
	 * @readonly
	 */
	last_order_id: number | null;
	/**
	 * The name of the customer's last order
	 */
	last_order_name: string | null;
	/**
	 * Attached additional metadata
	 */
	metafield: Metafield;
	/**
	 * The marketing level subscription opt-in level
	 */
	marketing_opt_in_level: 'single_opt_in' | 'confirmed_opt_in' | 'unknown' | null;
	/**
	 * The unique identifier for the customer that's used with Multipass login
	 */
	multipass_identifier: number | unknown;
	/**
	 * The number of orders associated with this customer
	 * @readonly
	 */
	orders_count: number;
	/**
	 * The unique phone number for this customer
	 */
	phone: string;
	/**
	 * The state of the customer's account with the shop
	 */
	state: CustomerAccountState;
	/**
	 * A list of comma-separated values of tags the shop owner has attached to a customer
	 */
	tags: string;
	/**
	 * Whether the customer is except from paying taxes on their order
	 */
	tax_exempt: boolean;
	/**
	 * Whether the customer is excempt from paying specific taxes on their order. Canadian taxes only.
	 */
	tax_exemptions: CustomerTaxExceptions[];
	/**
	 * The total amount of money the customer has spent across their order
	 * @readonly
	 */
	total_spent: string;
	/**
	 * The date when the customer information was last updated
	 */
	updated_at: string;
	/**
	 * Whether the customer has verified their email
	 * @reaodnly
	 */
	verified_email: boolean;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#properties-2020-04
 */
export interface CustomerAddress {
	/**
	 * The customer's mailing address
	 */
	address1: string;
	/**
	 * An additional field for the customer's mailing address
	 */
	address2: string;
	/**
	 * The customer's city, town or village
	 */
	city: string;
	/**
	 * The customer's country
	 */
	country: string;
	/**
	 * The two-letter country code corresponding to the customer's country
	 * @readonly
	 */
	country_code: string;
	/**
	 * The customer's normalized country name
	 */
	country_name: string;
	/**
	 * The customer's company
	 */
	company: string | null;
	/**
	 * The customer's first name
	 */
	first_name: string;
	/**
	 * The customer's last name
	 */
	last_name: string;
	/**
	 * The customer's first and last name
	 */
	name: string;
	/**
	 * The customer's phone number at this address
	 */
	phone: string;
	/**
	 * The customer's region name. Typically a prvince, state or prefecture
	 */
	province: string;
	/**
	 * The two-letter code for the customer's region
	 */
	province_code: string;
	/**
	 * The customer's postal code, also known as zip, postcard, Eircode, etc.
	 */
	zip: string;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#customer-saved-search-queries-2020-04
 */
export enum CustomerSavedSearchQueries {
	/**
	 * Filters customers by whether they accept email marketing.
	 * 0 = doesn't accept
	 * 1 = accepts
	 */
	AcceptsMarketing = 'accepts_marketing',
	/**
	 * Retrieves customers from a specified country
	 */
	Country = 'country',
	/**
	 * Retrieves customers who were created within a set period of time:
	 *
	 *	* `past_week`: Return customers who were created in the last week.
	 *	* `past_month`: Return customers who were created in the last month.
	 *	* `last_3_months`: Return customers who were created in the last 3 months.
	 *	* `past_quarter`: Return customers who were created in the last quarter.
	 *	* `past_year`: Return customers who were created in the last year.
	 *	* `yyyy-m-d`: Return customers who were created on a set date.
	 *	* `>yyyy-m-d`: Return customers who were created after a set date.
	 *	* `<yyyy-m-d`: Return customers who were created before a set date.
	 */
	CustomerDate = 'customer_date',
	/**
	 * Retrieves customers who abandoned a cart within a set period of time:
	 *
	 * * `last_week`: Returns customers who abandoned a cart in the last week
	 * * `last_month`: Returns customers who abandoned a cart within the last month
	 */
	LastAbandonedOrderDate = 'last_abandoned_order_date',
	/**
	 * Retrieves customers who placed an order within a set period of time:
	 *
	 *	* `last_week`: Return customers who placed an order in the last week.
	 *	* `last_month`: Return customers who placed an order in the last month.
	 *	* `last_3_months`: Return customers who placed an order in the last 3 months.
	 *	* `last_year`: Return customers who placed an order in the last year.
	 *	* `>yyyy-m-d`: Return customers who placed an order after a set date.
	 *	* `<yyyy-m-d`: Return customers placed an order before a set date.
	 */
	OrderDate = 'order_date',
	/**
	 * Retreives customers by the number of orders they've placed with the store:
	 *
	 * * `>number_of_orders`: Returns customers who have placed fewer than the specified number of orders
	 * * `<number_of_orders`: Returns customers who have placed more than the specified number of orders
	 * * `number_of_orders`: Returns customers who have placed the specified number of orders
	 */
	OrdersCount = 'orders_count',
	/**
	 * Filter customers by their customer account status:
	 *
	 * * `declined`: Returns customers who have been invited to create an account but declined
	 * * `disabled`: Returns customers whose account is disabled
	 * * `enabled`: Returns customers who have a customer account
	 * * `invited`: Returns customers who have been invited to create an account
	 */
	Status = 'status',
	/**
	 * Filter customers by tag. Valid values are any existing customer tag contained in quotation marks:
	 * @example `"Big Spender"`
	 */
	Tag = 'tag',
	/**
	 * Retreives customers by the total amount that they have spent across all of their orders:
	 *
	 * * `>money_amount`: Returns customers who have spent less than the specified amount of money
	 * * `<money_amount`: Returns customers who have spent more than the specified amount of money
	 * * `money_amount`: Returns customers who have spent the specified amount of money
	 */
	TotalSpent = 'total_spent',
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#properties-2020-04
 */
export interface CustomerSavedSearch {
	/**
	 * The date when the customer saved search was created
	 */
	created_at: string;
	/**
	 * The inique id of the customer saved search
	 * @readonly
	 */
	id: number;
	/**
	 * The name of the customer saved search
	 */
	name: string;
	/**
	 * The set of conditions that determins which customers are returned by the saved search
	 */
	query: string;
	/**
	 * The date when the customer saved search was last modified
	 * @readonly
	 */
	updated_at: string;
}

export interface CustomerInvite {
	/**
	 * The email the invite was sent to
	 */
	to: string;
	/**
	 * The email the invite was sent from
	 */
	from: string;
	/**
	 * The subject of the email
	 */
	subject: string;
	/**
	 * A custom message included in the invite
	 */
	custom_message: string;
	/**
	 * Any emails BCC'd in the email
	 */
	bcc: string[];
}
