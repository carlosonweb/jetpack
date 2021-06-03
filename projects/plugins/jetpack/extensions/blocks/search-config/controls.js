/**
 * External dependencies
 */
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';

export default function SearchConfigControls() {
	const site = useSelect( select => select( 'core' ).getSite() );
	const [ theme, setTheme ] = useEntityProp( 'root', 'site', 'jetpack_search_color_theme' );
	const [ resultFormat, setResultFormat ] = useEntityProp(
		'root',
		'site',
		'jetpack_search_result_format'
	);
	const [ sort, setSort ] = useEntityProp( 'root', 'site', 'jetpack_search_default_sort' );
	const [ trigger, setTrigger ] = useEntityProp( 'root', 'site', 'jetpack_search_overlay_trigger' );
	// TODO: Fix and re-enable.
	// const [ color, setColor ] = useEntityProp( 'root', 'site', 'jetpack_search_highlight_color' );
	const [ sortEnabled, setSortEnabled ] = useEntityProp(
		'root',
		'site',
		'jetpack_search_enable_sort'
	);
	const [ infiniteScroll, setInfiniteScroll ] = useEntityProp(
		'root',
		'site',
		'jetpack_search_inf_scroll'
	);
	const [ showLogo, setShowLogo ] = useEntityProp(
		'root',
		'site',
		'jetpack_search_show_powered_by'
	);

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Styling', 'jetpack' ) }>
				<SelectControl
					disabled={ ! site }
					label={ __( 'Theme', 'jetpack' ) }
					value={ theme }
					options={ [
						{ label: __( 'Light', 'jetpack' ), value: 'light' },
						{ label: __( 'Dark', 'jetpack' ), value: 'dark' },
					] }
					onChange={ setTheme }
				/>
				<SelectControl
					disabled={ ! site }
					label={ __( 'Result Format', 'jetpack' ) }
					value={ resultFormat }
					options={ [
						{ label: __( 'Minimal', 'jetpack' ), value: 'minimal' },
						{ label: __( 'Expanded (shows images)', 'jetpack' ), value: 'expanded' },
						{ label: __( 'Product (for WooCommerce stores)', 'jetpack' ), value: 'product' },
					] }
					onChange={ setResultFormat }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Search Options', 'jetpack' ) }>
				<SelectControl
					disabled={ ! site }
					label={ __( 'Sort', 'jetpack' ) }
					value={ sort }
					options={ [
						{ label: __( 'Relevance (recommended)', 'jetpack' ), value: 'relevance' },
						{ label: __( 'Newest first', 'jetpack' ), value: 'newest' },
						{ label: __( 'Oldest first', 'jetpack' ), value: 'oldest' },
					] }
					onChange={ setSort }
				/>
				<SelectControl
					disabled={ ! site }
					label={ __( 'Overlay Trigger', 'jetpack' ) }
					value={ trigger }
					options={ [
						{ label: __( 'Open when the user starts typing', 'jetpack' ), value: 'immediate' },
						{ label: __( 'Open when results are available', 'jetpack' ), value: 'results' },
					] }
					onChange={ setTrigger }
				/>
				{ /* TODO: Fix the ColorPicker implementation */ }
				{ /* <ColorPicker color={ color } onChangeComplete={ value => setColor( value.hex ) } /> */ }
				<ToggleControl
					checked={ sortEnabled }
					disabled={ ! site }
					label={ __( 'Enable Sort', 'jetpack' ) }
					onChange={ setSortEnabled }
				/>
				<ToggleControl
					checked={ infiniteScroll }
					disabled={ ! site }
					label={ __( 'Enable Infinite Scroll', 'jetpack' ) }
					onChange={ setInfiniteScroll }
				/>
				<ToggleControl
					checked={ showLogo }
					disabled={ ! site }
					label={ __( "Show 'Powered by Jetpack'", 'jetpack' ) }
					onChange={ setShowLogo }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
