import type { CountResult, EmptyResponse, FieldQueryInterface } from '../../../common';
import type { Customer, CustomerAddress, CustomerInvite, CustomerSavedSearch } from '../payloads/customer';
import type { PostMetafieldJSONBody } from './metafield';

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#index-2020-04
 */
export interface GetCustomersResponse {
	customers: Customer[];
}

export interface GetCustomersQuery extends FieldQueryInterface {
	/**
	 * Restrict results to customers specified by a comma-separated list of ids
	 */
	ids?: string;
	/**
	 * Restrict results to hose after the specific id
	 */
	since_id?: string;
	/**
	 * Shows customers created after the provided date
	 */
	created_at_min?: string;
	/**
	 * Shows customers created before the provided date
	 */
	created_at_max?: string;
	/**
	 * Shows customers updated after the provided date
	 */
	updated_at_min?: string;
	/**
	 * Shows customers updated before the provided date
	 */
	updated_at_max?: string;
	/**
	 * The maximum number of results to show (50 - 250)
	 */
	limit?: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#search-2020-04
 */
export type GetCustomerSearchResponse = GetCustomersResponse;

export interface GetCustomerSearchQuery extends FieldQueryInterface {
	/**
	 * Set the field and direction by which to order results (default: `last_order_date DESC`)
	 */
	order?: string;
	/**
	 * Text to search for the the shop's customer data.
	 *
	 * Supported queries: `accepts_marketing`,`activation_date`,`address1`,`address2`,`city`,`company`,`country`,`customer_date`,`customer_first_name`,`customer_id`,`customer_last_name`,`customer_tag`,`email`,`email_marketing_state`,`first_name`,`first_order_date`,`id`,`last_abandoned_order_date`,`last_name`,`multipass_identifier`,`orders_count`,`order_date`,`phone`,`province`,`shop_id`,`state`,`tag`,`total_spent`,`updated_at`,`verified_email`,`product_subscriber_status`
	 */
	query: string;
	/**
	 * The maximum number of results to show (default: `50`, maximum: `250`)
	 */
	limit?: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#show-2020-04
 */
export interface GetCustomerResponse {
	customer: Customer;
}

export type GetCustomerQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#create-2020-04
 */
export type PostCustomerResponse = GetCustomerResponse;

type PostCustomerPassword =
	| { password?: undefined; password_confirmation?: undefined }
	| { password: string; password_confirmation: string };
export interface PostCustomerJSONBody {
	customer: Pick<Customer, 'first_name' | 'last_name' | 'email'> &
		Partial<Pick<Customer, 'first_name' | 'last_name' | 'email' | 'phone' | 'verified_email' | 'addresses'>> & {
			metafields?: PostMetafieldJSONBody[];
			send_email_invite?: boolean;
		} & PostCustomerPassword;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#update-2020-04
 */
export type PutCustomerResponse = GetCustomerResponse;

export interface PutCustomerJSONBody {
	customer: Pick<Customer, 'id'> & Partial<Customer>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#account_activation_url-2020-04
 */
export interface PostCustomerActivationURLResponse {
	/**
	 * The generated account activation URL
	 */
	account_activation_url?: string;
	/**
	 * If the request fails and errors are thrown
	 */
	errors?: string[];
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#send_invite-2020-04
 */
export interface PostCustomerAccountInviteResponse {
	customer_invite: CustomerInvite;
}

export interface PostCustomerAccountInviteJSONBody {
	customer_invite?: Partial<CustomerInvite>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#destroy-2020-04
 */
export type DeleteCustomerResponse = EmptyResponse;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#count-2020-04
 */
export type GetCustomerCountResponse = CountResult;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer#orders-2020-04
 */
// TODO: relies on Order data
export type GetCustomerOrdersResponse = unknown;

/* Customer Address */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#index-2020-04
 */
export interface GetCustomerAddressesResponse {
	addresses: CustomerAddress[];
}

export interface GetCustomerAddressesQuery {
	/**
	 * The amount of customer addresses to return (default: `50`, maximum: `250`)
	 */
	limit: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#show-2020-04
 */
export interface GetCustomerAddressResponse {
	customer_address: CustomerAddress;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#create-2020-04
 */
export type PostCustomerAddressResponse = GetCustomerAddressResponse;

export interface PostCustomerAddressJSONBody {
	address: Omit<CustomerAddress, 'name'>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#update-2020-04
 */
export type PutCustomerAddressResponse = GetCustomerAddressResponse;

export interface PutCustomerAddressJSONBody {
	address: Partial<CustomerAddress>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#destroy-2020-04
 */
export type DeleteCustomerAddressResponse = EmptyResponse;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#set-2020-04
 */
export type PutBulkCustomerAddressesResponse = EmptyResponse;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address#default-2020-04
 */
export type PutCustomerDefaultAddressResponse = GetCustomerAddressResponse;

/* Customer Saved Search */

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#index-2020-04
 */
export interface GetCustomerSavedSearchesResponse {
	customer_saved_searches: CustomerSavedSearch[];
}

export interface GetCustomerSavedSearchsQuery extends FieldQueryInterface {
	/**
	 * The maximum number of results to show (default: `50`, maximum: `250`)
	 */
	limit?: number;
	/**
	 * Restrict results to after the specified id
	 */
	since_id?: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#count-2020-04
 */
export type GetCustomerSavedSearchesCountResponse = CountResult;

export interface GetCustomerSavedSearchesCountQuery {
	/**
	 * Restrict results to after the specified id
	 */
	since_id?: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#show-2020-04
 */
export interface GetCustomerSavedSearchResponse {
	customer_saved_search: CustomerSavedSearch;
}

export type GetCustomerSavedSearchQuery = FieldQueryInterface;

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#other-2020-04
 */
export type GetCustomerSavedSearchCustomersResponse = GetCustomersResponse;

export interface GetCustomerSavedSearchCustomersQuery extends FieldQueryInterface {
	/**
	 * Set the field and direction by which to order results (default: `last_order_date DESC`)
	 */
	order?: string;
	/**
	 * The maximum number of results to show (default: `50`, maximum: `250`)
	 */
	limit?: number;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#create-2020-04
 */
export interface PostCustomerSavedSearchResponse {
	customer_saved_search: CustomerSavedSearch;
}

export interface PostCustomerSavedSearchJSONBody {
	customer_saved_search: Pick<CustomerSavedSearch, 'name' | 'query'>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#update-2020-04
 */
export type PutCustomerSavedSearchResponse = GetCustomerSavedSearchResponse;

export interface PutCustomerSavedSearchJSONBody {
	customer_saved_search: Pick<CustomerSavedSearch, 'id'> & Partial<Pick<CustomerSavedSearch, 'name' | 'query'>>;
}

/**
 * https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch#destroy-2020-04
 */
export type DeleteCustomerSavedSearchResponse = EmptyResponse;
