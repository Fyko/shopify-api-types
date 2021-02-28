/**
 * https://shopify.dev/docs/admin-api/rest/reference/metafield#properties-2020-04
 */
export interface Metafield {
	/**
	 * The date when the metafield was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * The date when the metafield was last updated
	 */
	updated_at: string;
	/**
	 * The description of the information the metafield contains
	 */
	description: string | null;
	/**
	 * The unique id of the metafield
	 */
	id: number;
	/**
	 * The name of the metafield (3 - 30 characters)
	 * @required
	 */
	key: string;
	/**
	 * The container for a set of metafields (2 - 20 characters)
	 * @required
	 */
	namespace: string;
	/**
	 * The unique id of the resource that the metafield is attached to
	 */
	owner_id: number;
	/**
	 * The type of resource that the metafield is attached to
	 */
	owner_resource: string;
	/**
	 * The information to be stored as metadata
	 * * When the namespace is `tags`, the key is equal to `alt` (max 512 characters)
	 *
	 * The maximum length of `value` depends on {@link Metafield#value_type value_type}:
	 * * `value_type` is `string`: max 5,000,000 characters
	 * * `value_type` is `integer`: max 100,000 characters
	 * * `value_type` is `json_string`: max 100,000 characters
	 */
	value: string | number;
	/**
	 * The metafield's information type
	 */
	value_type: 'string' | 'integer' | 'json_string';
}
