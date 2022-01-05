<?php
/**
 * Integration Tests for Search syncing.
 *
 * @package automattic/jetpack-sync
 */

use Automattic\Jetpack\Sync\Modules;

/**
 * Testing Search Sync modifications.
 *
 * @group jetpack-sync
 */
class Test_Jetpack_Sync_Search extends WP_Test_Jetpack_Sync_Base {

	/**
	 * Identifying number for post under test.
	 *
	 * @var int Post Id
	 */
	protected $post_id;

	/**
	 * Search Sync Module for use in tests.
	 *
	 * @var Modules\Module Search Sync Module
	 */
	protected static $search_sync;

	/**
	 * Configure Jetpack/Search settings for use in all tests.
	 *
	 * @return void
	 */
	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();

		// Activate Search module.
		\Jetpack::activate_module( 'search' );
		self::$search_sync = Modules::get_module( 'search' );
	}

	/**
	 * Deactivate search module
	 *
	 * @return void
	 */
	public static function tearDownAfterClass() {
		\Jetpack::deactivate_module( 'search' );
	}

	/**
	 * Setup test data.
	 */
	public function setUp() {
		parent::setUp();

		// create a post.
		$this->post_id = $this->factory->post->create();
		$this->sender->do_sync();
	}

	/**
	 * Test to verify search module is enabled/active.
	 */
	public function test_module_is_enabled() {
		$this->assertTrue( (bool) Modules::get_module( 'search' ) );
		$this->assertTrue( \Jetpack::is_module_active( 'search' ) );
	}

	/**
	 * Data Provider of allowed postmeta keys.
	 *
	 * @return string[][]
	 */
	public function get_allowed_postmeta_keys() {
		$search_sync = Modules::get_module( 'search' );
		$params      = array();
		$keys        = $search_sync->get_all_postmeta_keys();
		foreach ( $keys as $k ) {
			$params[] = array( $k );
		}

		return $params;
	}

	/**
	 * Data Provider of allowed taxonomies.
	 *
	 * @return string[][]
	 */
	public function get_allowed_taxonomies() {
		$search_sync = Modules::get_module( 'search' );
		$params      = array();
		$keys        = $search_sync->get_all_taxonomies();
		foreach ( $keys as $k ) {
			$params[] = array( $k );
		}

		return $params;
	}

	/**
	 * Verify that unexpected meta (not in allow list) is not synced.
	 */
	public function test_sync_does_not_include_all_meta() {
		add_post_meta( $this->post_id, 'no_sync_jetpack_search', 'foo' );

		$this->sender->do_sync();

		$this->assertEquals(
			array(),
			$this->server_replica_storage->get_metadata( 'post', $this->post_id, 'no_sync_jetpack_search' )
		);
		delete_post_meta( $this->post_id, 'no_sync_jetpack_search', 'foo' );
	}

	/**
	 * Verify that is_indexable returns true for indexable post meta.
	 */
	public function test_meta_is_indexable() {
		$this->assertTrue( self::$search_sync->is_indexable( 'postmeta', 'jetpack-search-meta0' ) );
	}

	/**
	 * Verify that is_indexable returns false for non-indexable post meta.
	 */
	public function test_meta_is_not_indexable() {
		$this->assertFalse( self::$search_sync->is_indexable( 'postmeta', 'no_one_wants_to_index_me' ), 'no_one_wants_to_index_me' );
		$this->assertFalse( self::$search_sync->is_indexable( 'postmeta', '_no_one_wants_to_index_me' ), '_no_one_wants_to_index_me' );
	}

	/**
	 * Verify that we don't have any overlap between our lists of indexed and unindexed meta.
	 */
	public function test_meta_no_overlap() {
		$indexed_keys = self::$search_sync->get_all_postmeta_keys();
		asort( $indexed_keys );
		$unindexed_keys = self::$search_sync->get_all_unindexed_postmeta_keys();
		asort( $unindexed_keys );
		$this->assertEmpty( array_intersect( $unindexed_keys, $indexed_keys ), 'Indexable meta keys are also contained in the $unindexed_postmeta array. Please remove them from the unindexed list.' );
	}

	/**
	 * Important that we double check the specification format since
	 * this will often get added to.
	 *
	 * @dataProvider get_allowed_postmeta_keys
	 * @param string $key Meta Key.
	 */
	public function test_check_postmeta_spec( $key ) {
		$spec = self::$search_sync->get_postmeta_spec( $key );

		$this->assertInternalType( 'array', $spec );
		foreach ( $spec as $key => $v ) {
			$this->assertContains(
				$key,
				array(
					'searchable_in_all_content',
					'available',
					'alternatives',
				),
				'Post meta specification has an unsupported key: ' . $key
			);
			switch ( $key ) {
				case 'searchable_in_all_content':
					$this->assertInternalType( 'bool', $spec['searchable_in_all_content'] );
					break;
				case 'available':
					$this->assertInternalType( 'bool', $spec['available'] );
					break;
				case 'alternatives':
					$this->assertInternalType( 'array', $spec['alternatives'] );
					break;
			}
		}
	}

	/**
	 * Verify that allowed taxonomies are synced.
	 *
	 * @dataProvider get_allowed_taxonomies
	 * @param string $taxonomy Taxonomy Name.
	 */
	public function test_add_taxonomy( $taxonomy ) {
		register_taxonomy(
			$taxonomy,
			'post',
			array(
				'label'        => __( 'Taxonomy Test', 'jetpack' ),
				'rewrite'      => array( 'slug' => $taxonomy ),
				'hierarchical' => true,
			)
		);

		$term = md5( wp_rand() );
		if ( 'post_format' === $taxonomy ) {
			// Special case in Core.
			$term = 'Standard';
		}
		$term_obj = wp_insert_term( $term, $taxonomy );
		wp_set_post_terms( $this->post_id, array( $term_obj['term_id'] ), $taxonomy, false );
		$this->sender->do_sync();

		// Check taxonomy and added term.
		$this->assertEquals(
			$this->get_terms( $taxonomy ),
			$this->server_replica_storage->get_terms( $taxonomy ),
			'Terms on cache site match do not match client site'
		);

		$this->assertEqualsObject(
			get_the_terms( $this->post_id, $taxonomy ),
			$this->server_replica_storage->get_the_terms( $this->post_id, $taxonomy ),
			'Adeded term does not match local term.'
		);

		// clean up - speeds up tests.
		wp_remove_object_terms( $this->post_id, array( $term_obj['term_id'] ), $taxonomy );
		unregister_taxonomy_for_object_type( $taxonomy, 'post' );
	}

	/**
	 * Verify that is_indexable returns true for indexable taxonomies.
	 */
	public function test_taxonomy_is_indexable() {
		$this->assertTrue( self::$search_sync->is_indexable( 'taxonomy', 'jetpack-search-tag0' ) );
	}

	/**
	 * Verify that is_indexable returns false for non-indexable taxonomies.
	 */
	public function test_taxonomy_is_not_indexable() {
		$this->assertFalse( self::$search_sync->is_indexable( 'taxonomy', 'no_one_wants_to_index_me' ) );
	}

	/**
	 * Verify that the allowed taxonomy list does not include any disallowed values.
	 */
	public function test_no_blacklisted_taxonomies() {
		$search_sync = Modules::get_module( 'search' );
		$taxes       = $search_sync->get_all_taxonomies();
		$anti_taxes  = \Automattic\Jetpack\Sync\Defaults::$blacklisted_taxonomies;
		$this->assertEmpty(
			array_intersect( $taxes, $anti_taxes ),
			'Some taxonomies for Search sync are explicitly in the blacklist.'
		);
	}

	/**
	 * Helper to convert WP_Term into stdClass for tests.
	 *
	 * @param string $taxonomy Taxonomy name.
	 * @return object[]
	 */
	protected function get_terms( $taxonomy ) {
		$terms = get_terms(
			array(
				'taxonomy'   => $taxonomy,
				'hide_empty' => false,
			)
		);
		// We need an array of stdClass rather than WP_Term.
		return array_map(
			function ( $object ) {
				return (object) (array) $object; },
			$terms
		);
	}

}
