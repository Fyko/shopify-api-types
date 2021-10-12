import type { CurrencyCode } from '../../../common';

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
	id: number;
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
	/**
	 * The unique id of the collection
	 */
	id: number;
	/**
	 * The time and date when the collection was made visible.
	 * Retuns `null` for a hidden collection
	 */
	published_at: string | null;
	/**
	 * Whether the collection is published to the Point of Sale channel. Valid values:
	 *
	 * * `web`: The collection is published to the Online Store channel but not published to the Point of Sale channel.
	 * * `global`: The collection is published to both the Online Store channel and the Point of Sale channel.
	 * @readonly
	 */
	published_scope: 'web' | 'global';
	/**
	 * The order in which products in the collection appear. Valid values:
	 *
	 * * `alpha-asc`: Alphabetically, in ascending order (A - Z).
	 * * `alpha-desc`: Alphabetically, in descending order (Z - A).
	 * * `best-selling`: By best-selling products.
	 * * `created`: By date created, in ascending order (oldest - newest).
	 * * `created-desc`: By date created, in descending order (newest - oldest).
	 * * `manual`: In the order set manually by the shop owner.
	 * * `price-asc`: By price, in ascending order (lowest - highest).
	 * * `price-desc`: By price, in descending order (highest - lowest).
	 *
	 * @see {@link CollectionSortOrder}
	 */
	sort_order: CollectionSortOrder;
	/**
	 * The suffix of the liquid template being used.
	 * For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template.
	 * If the value is `null`, then the collection is using the default `collection.liquid`
	 */
	template_suffix: string | null;
	/**
	 * The name of the collection. (limit: 255 characters)
	 */
	title: string;
	/**
	 * The time when the collection was last modified.
	 */
	updated_at: string;
}

export enum CollectionSortOrder {
	AlphaAsc = 'alpha-asc',
	AlphaDesc = 'alpha-desc',
	BestSelling = 'best-selling',
	Created = 'created',
	CreatedDesc = 'created-desc',
	Manual = 'manual',
	PriceAsc = 'price-asc',
	PriceDesc = 'price-desc',
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
	 * @readonly
	 */
	width: number;
	/**
	 * The height of the image in pixels.
	 * @readonly
	 */
	height: number;
}

/**
 * https://shopify.dev/api/admin-rest/2021-10/resources/customcollection#top
 */
export type CustomCollection = Collection & {
	/**
	 * Whether the custom collection is published to the Online Store channel.
	 */
	published: boolean;
};

/**
 * https://shopify.dev/api/admin-rest/2021-10/resources/product#resource_object
 */
export interface Product {
	/**
	 * A description of the product, complete with HTML markup.
	 */
	body_html: string;
	/**
	 * The date when the product was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * A unique, human-readable string for the collection automatically generated from its title.
	 * This is used in themes by the Liquid templating language to refer to the collection.
	 *
	 * (limit: 255 characters)
	 */
	handle: string;
	/**
	 * The unique id of the collection
	 */
	id: number;
	/**
	 * A list of product image objects, each one representing an image associated with the product.
	 */
	images: ProductImage[];
	/**
	 * The custom product properties.
	 * For example, Size, Color, and Material.
	 * Each product can have up to 3 options and each option value can be up to 255 characters.
	 * Product variants are made of up combinations of option values.
	 * Options cannot be created without values.
	 * To create new options, a variant with an associated option value also needs to be created.
	 */
	options: [ProductOptions | undefined, ProductOptions | undefined, ProductOptions | undefined];
	/**
	 * A categorization for the product used for filtering and searching products.
	 */
	product_type: string;
	/**
	 * The time and date when the product was published.
	 * Can be set to null to unpublish the product from the Online Store channel.
	 */
	published_at: string | null;
	/**
	 * Whether the product is published to the Point of Sale channel. Valid values:
	 *
	 * * `web`: The product is published to the Online Store channel but not published to the Point of Sale channel.
	 * * `global`: The product is published to both the Online Store channel and the Point of Sale channel.
	 * @readonly
	 */
	published_scope: 'web' | 'global';
	/**
	 * The status of the product. Valid values:
	 *
	 * * `active`: The product is ready to sell and is available to customers on the online store, sales channels, and apps. By default, existing products are set to active.
	 * * `archived`: The product is no longer being sold and isn't available to customers on sales channels and apps.
	 * * `draft`: The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft.
	 */
	status: ProductStatus;
	/**
	 * A string of comma-separated tags that are used for filtering and search.
	 * A product can have up to 250 tags. Each tag can have up to 255 characters.
	 */
	tags: string;
	/**
	 * The suffix of the Liquid template used for the product page.
	 * If this property is specified, then the product page uses a template called "product.suffix.liquid", where "suffix" is the value of this property.
	 * If this property is "" or null, then the product page uses the default template "product.liquid". (default: `null`)
	 */
	template_suffix: string | null;
	/**
	 * The name of the product.
	 */
	title: string;
	/**
	 * The date when the product was last updated.
	 * A product's `updated_at` value can change for different reasons.
	 * For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.
	 */
	updated_at: string;
	/**
	 * An array of product variants, each representing a different version of the product.
	 * The position property is read-only.
	 * The position of variants is indicated by the order in which they are listed.
	 */
	variants: ProductVariant[];
}

/**
 * https://shopify.dev/api/admin-rest/2021-10/resources/product-image#resource_object
 */
export interface ProductImage {
	/**
	 * The date when the image was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * The unique id of the collection
	 */
	id: number;
	/**
	 * The order of the product image in the list.
	 * The first product image is at position 1 and is the "main" image for the product.
	 */
	position: number;
	/**
	 * The id of the product associated with the image.
	 */
	product_id: number;
	/**
	 * An array of variant ids associated with the image.
	 */
	variant_ids: number[];
	/**
	 * Specifies the location of the product image.
	 * This parameter supports [URL filters](https://shopify.dev/docs/liquid/reference/filters/url-filters#img_url) that you can use to retrieve modified copies of the image.
	 * For example, add `_small`, to the filename to retrieve a scaled copy of the image at 100 x 100 px (for example, `ipod-nano_small.png`),
	 * or add `_2048x2048` to retrieve a copy of the image constrained at 2048 x 2048 px resolution (for example, `ipod-nano_2048x2048.png`).
	 */
	src: string;
	/**
	 * The width of the image in pixels.
	 * @readonly
	 */
	width: number;
	/**
	 * The height of the image in pixels.
	 * @readonly
	 */
	height: number;
	/**
	 * The date when the image was last updated
	 * @readonly
	 */
	updated_at: string;
}

export interface ProductOptions {
	id: number;
	name: string;
	options: string[];
	position: number;
	product_id: number;
}

export enum ProductStatus {
	Active = 'active',
	Archived = 'archived',
	Draft = 'draft',
}

/**
 * https://shopify.dev/api/admin-rest/2021-01/resources/product-variant#resource_object
 */
export interface ProductVariant {
	/**
	 * The barcode, UPC, or ISBN number for the product.
	 */
	barcode: string;
	/**
	 * The original price of the item before an adjustment or a sale.
	 */
	compare_at_price: string;
	/**
	 * The date the variant was created
	 * @readonly
	 */
	created_at: string;
	/**
	 * The fulfillment service associated with the product variant.
	 * Valid values: manual or the handle of a fulfillment service.
	 */
	fulfillment_service: 'manual' | 'string';
	/**
	 * The weight of the variant in grams
	 */
	grams: number;
	/**
	 * The unique id of the variant
	 */
	id: number;
	/**
	 * The unique numeric identifier for a product's image. The image must be associated to the same product as the variant.
	 */
	image_id: number;
	/**
	 * The unique identifier for the inventory item, which is used in the Inventory API to query for inventory information.
	 */
	inventory_item_id: number;
	/**
	 * The fulfillment service that tracks the number of items in stock for the product variant. Valid values:
	 *
	 * * `shopify`: You are tracking inventory yourself using the admin.
	 * * `null`: You aren't tracking inventory on the variant.
	 * * the handle of a fulfillment service that has inventory management enabled: This must be the same fulfillment service referenced by the fulfillment_service property.
	 */
	inventory_management: string | null;
	/**
	 * Whether customers are allowed to place an order for the product variant when it's out of stock. Valid values:
	 * * `deny`: Customers are not allowed to place orders for the product variant if it's out of stock.
	 * * `continue`: Customers are allowed to place orders for the product variant if it's out of stock.
	 * Default value: `deny`.
	 */
	inventory_policy: 'deny' | 'continue';
	/**
	 * An aggregate of inventory across all locations. To adjust inventory at a specific location, use the InventoryLevel resource.
	 */
	inventory_quantity: number;
	/**
	 * The custom properties that a shop owner uses to define product variants.
	 */
	option: ProductVariantOption;
	/**
	 * A list of the variant's presentment prices and compare-at prices in each of the shop's enabled presentment currencies
	 * @note Requires the header 'X-Shopify-Api-Features': 'include-presentment-prices'.
	 */
	presentment_prices?: Record<'presentment_prices', ProductVariantPresentmentPrices>;
	/**
	 * The order of the product variant in the list of product variants. The first position in the list is 1.
	 * The position of variants is indicated by the order in which they are listed.
	 */
	position: number;
	/**
	 * The price of the product variant.
	 */
	price: number;
	/**
	 * The unique numeric identifier for the product.
	 */
	product_id: number;
	/**
	 * A unique identifier for the product variant in the shop. Required in order to connect to a FulfillmentService.
	 */
	sku?: number;
	/**
	 * Whether a tax is charged when the product variant is sold.
	 */
	taxable: boolean;
	/**
	 * This parameter applies only to the stores that have the Avalara AvaTax app installed. Specifies the Avalara tax code for the product variant
	 */
	tax_code: string;
	/**
	 * The title of the product variant.
	 * The title field is a concatenation of the option1, option2, and option3 fields.
	 * You can only update title indirectly using the option fields.
	 * @readonly
	 */
	readonly title: string;
	/**
	 * The date when the variant was last modified
	 * @readonly
	 */
	updated_at: string;
	/**
	 * The weight of the product variant in the unit system specified with weight_unit.
	 */
	weight: number;
	/**
	 * The unit of measurement that applies to the product variant's weight.
	 * If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied.
	 * Valid values: `g`, `kg`, `oz`, and `lb`.
	 */
	weight_unit: ProductVariantWeightUnit;
}

export enum ProductVariantWeightUnit {
	Grams = 'g',
	Kilograms = 'kg',
	Ounces = 'oz',
	Pounds = 'lb',
}

export interface ProductVariantOption {
	option1: string;
	option2?: string;
	option3?: string;
}

export interface BasePrice {
	amount: string;
	currency_code: CurrencyCode;
}

export interface ProductVariantPresentmentPrices {
	price: BasePrice;
	compare_at_price?: BasePrice;
}

/**
 * https://shopify.dev/api/admin-rest/2021-01/resources/smartcollection#resource_object
 */
export interface SmartCollection {
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
	 * The unique id of the collection
	 */
	id: number;
	/**
	 * The image for this collection
	 */
	image: SmartCollectionImage;

	/**
	 * The time and date when the collection was made visible.
	 * Retuns `null` for a hidden collection
	 */
	published_at: string | null;
	/**
	 * Whether the collection is published to the Point of Sale channel. Valid values:
	 *
	 * * `web`: The collection is published to the Online Store channel but not published to the Point of Sale channel.
	 * * `global`: The collection is published to both the Online Store channel and the Point of Sale channel.
	 * @readonly
	 */
	published_scope: 'web' | 'global';
	/**
	 * The order in which products in the collection appear. Valid values:
	 *
	 * * `alpha-asc`: Alphabetically, in ascending order (A - Z).
	 * * `alpha-desc`: Alphabetically, in descending order (Z - A).
	 * * `best-selling`: By best-selling products.
	 * * `created`: By date created, in ascending order (oldest - newest).
	 * * `created-desc`: By date created, in descending order (newest - oldest).
	 * * `manual`: In the order set manually by the shop owner.
	 * * `price-asc`: By price, in ascending order (lowest - highest).
	 * * `price-desc`: By price, in descending order (highest - lowest).
	 *
	 * @see {@link CollectionSortOrder}
	 */
	sort_order: CollectionSortOrder;
	/**
	 * Whether the product must match all the rules to be included in the smart collection. Valid values:
	 * * `true`: Products only need to match one or more of the rules to be included in the smart collection.
	 * * `false`: Products must match all of the rules to be included in the smart collection.
	 */
	disjunctive: boolean;
	/**
	 * The list of rules that define what products go into the smart collection. Each rule has the following properties:

     * * **column**: The property of a product being used to populate the smart collection.
	 *
     * 	Valid values for text relations:
     * 	*	`title`: The product title.
     * 	*	`type`: The product type.
     * 	*	`vendor`: The name of the product vendor.
     * 	*	`variant_title`: The title of a product variant.
	 * 
     * 	Valid values for number relations:
     * 	*	`variant_compare_at_price`: The compare price.
     * 	*	`variant_weight`: The weight of the product.
     * 	*	`variant_inventory`: The inventory stock. Note: not_equals does not work with this property.
     * 	*	`variant_price`: product price.
	 * 
     * 	Valid values for an equals relation:
     * 	*	`tag`: A tag associated with the product.
	 * 
     * * **relation**: The relationship between the column choice, and the condition.
	 * 
     * 	Valid values for number relations:
     * 	*	`greater_than` The column value is greater than the condition.
     * 	*	`less_than` The column value is less than the condition.
     * 	*	`equals` The column value is equal to the condition.
     * 	*	`not_equals` The column value is not equal to the condition.
	 * 
     * 	Valid values for text relations:
     * 	*	`equals`: Checks if the column value is equal to the condition value.
     * 	*	`not_equals`: Checks if the column value is not equal to the condition value.
     * 	*	`starts_with`: Checks if the column value starts with the condition value.
     * 	*	`ends_with`: Checks if the column value ends with the condition value.
     * 	*	`contains`: Checks if the column value contains the condition value.
     * 	*	`not_contains`: Checks if the column value does not contain the condition value.
     * **condition**: Select products for a smart collection using a condition. Values are either strings or numbers, depending on the relation value.
	 */
	rules: SmartCollectionRule[];
	/**
	 * The suffix of the liquid template being used.
	 * For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template.
	 * If the value is `null`, then the collection is using the default `collection.liquid`
	 */
	template_suffix: string | null;
	/**
	 * The name of the collection. (limit: 255 characters)
	 */
	title: string;
	/**
	 * The time when the collection was last modified.
	 */
	updated_at: string;
}

export interface SmartCollectionImage {
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
}

export enum SmartCollectionRuleColumn {
	Title = 'title',
	Type = 'type',
	Vendor = 'vendor',
	VariantTitle = 'variant_title',
	VariantCompareAtPrice = 'variant_compare_at_price',
	VariantWeight = 'variant_weight',
	VariantInventory = 'variant_inventory',
	VariantPrice = 'variant_price',
	Tag = 'tag',
}

export enum SmartCollectionRuleRelation {
	GreaterThen = 'greater_than',
	LessThan = 'less_than',
	Equals = 'equals',
	NotEquals = 'not_equals',
	StartsWith = 'starts_with',
	EndsWith = 'ends_with',
	Contains = 'contains',
	NotContains = 'not_contains',
}

export interface SmartCollectionRule {
	column: SmartCollectionRuleColumn;
	relation: SmartCollectionRuleRelation;
	condition: string | number;
}
