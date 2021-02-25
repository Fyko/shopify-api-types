export interface TestInterface {
	/**
	 * Whether or not the object is a test
	 */
	test: true | null;
}

export interface FieldQueryInterface {
	/**
	 * A comma-separated list of fields to include in the response
	 */
	fields?: string;
}
