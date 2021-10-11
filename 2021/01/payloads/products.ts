/**
 * https://shopify.dev/api/admin-rest/2021-10/resources/collect#resource_object
 */
export interface Collect {
	/**
	 * The ID of the custom collection containing the product.
	 */
	collection_id: number;
	/**
	 * The date when the metafield was created
	 * @readonly 
	 */
	created_at: string;
	/**
	 * The unique id of the collect
	 */
	id: string;
	/**
	 * The position of this product in a manually sorted custom collection.
	 * The first position is 1. This value is applied only when the custom collection is sorted manually.
	 */
	position: number;
	/**
	 * The unique numeric identifier for the product in the custom collection.
	 */
	product_id: number;
	/**
	 * This is the same value as position but padded with leading zeroes to make it alphanumeric-sortable.
	 * This value is applied only when the custom collection is sorted manually.
	 */
	sort_value: string;
	/**
	 * The date when the collect was last updated
	 */
	updated_at: string;
}

/**
 * https://shopify.dev/api/admin-rest/2021-10/resources/collection#top
 */
export interface Collection {
	/**
	 * A description of the collection, complete with HTML markup.
	 * Many templates display this on their collection pages.
	 */
	body_html: string;
	/**
	 * A unique, human-readable string for the collection automatically generated from its title.
	 * This is used in themes by the Liquid templating language to refer to the collection.
	 * 
	 * (limit: 255 characters)
	 */
	handle: string;
	/**
	 * The image for this collection
	 */
	image: CollectionImage;
}

export interface CollectionImage {
	/**
	 * An image attached to a collection returned as Base64-encoded binary data.
	 */
	attachment: string;
	/**
	 * The source URL that specifies the location of the image.
	 */
	src: string;
	/**
	 * The alternative text that describes the collection image.
	 */
	alt: string;
	/**
	 * The date when the image was created
	 * @readonly 
	 */
	created_at: string;
	/**
	 * The width of the image in pixels.
	 */
	width: number;
	/**
	 * The height of the image in pixels.
	 */
	height: number;
}