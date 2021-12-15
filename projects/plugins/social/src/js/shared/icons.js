/**
 * External dependencies
 */
import { G, Icon, Path, Polygon, Rect, SVG } from '@wordpress/components';
import classNames from 'classnames';
import colorStudio from '@automattic/color-studio';

/**
 * Internal dependencies
 */
import './icons.scss';
import { getIconColor } from './block-icons';

/**
 * Constants
 */
const PALETTE = colorStudio.colors;
const COLOR_JETPACK = PALETTE[ 'Jetpack Green 40' ];

export const MediaLibraryIcon = () => (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z" />
		<Path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z" />
	</SVG>
);

export const GooglePhotosIcon = props => (
	<SVG
		height="24"
		width="24"
		viewBox="1.2 10.8 169.6 169.6"
		xmlns="http://www.w3.org/2000/svg"
		{ ...props }
	>
		<Path
			d="m43.6 49.4c23.4 0 42.4 19 42.4 42.4v3.9h-80.9c-2.1 0-3.8-1.7-3.9-3.9 0-23.4 19-42.4 42.4-42.4z"
			fill="#f6bc04"
		/>
		<Path
			d="m132.2 53.2c0 23.4-19 42.4-42.4 42.4h-3.8v-80.9c0-2.1 1.7-3.9 3.8-3.9 23.5 0 42.4 19 42.4 42.4z"
			fill="#ea4335"
		/>
		<Path
			d="m128.4 141.9c-23.4 0-42.4-19-42.4-42.4v-3.9h80.9c2.1 0 3.9 1.7 3.9 3.8 0 23.5-19 42.5-42.4 42.5z"
			fill="#4285f4"
		/>
		<Path
			d="m39.8 138c0-23.4 19-42.4 42.4-42.4h3.8v80.9c0 2.1-1.7 3.8-3.9 3.9-23.4 0-42.3-19-42.3-42.4z"
			fill="#34a853"
		/>
	</SVG>
);

export const PexelsIcon = props => (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" { ...props }>
		<Path d="M14 7H9v10h3.9v-3.8H14c1.7 0 3.1-1.4 3.1-3.1C17.2 8.4 15.8 7 14 7z" />
		<Path d="M20.5 2h-17C2.7 2 2 2.7 2 3.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zm-5.6 13.2V19H7V5h7c2.8 0 5.1 2.3 5.1 5.1.1 2.5-1.8 4.7-4.2 5.1z" />
	</SVG>
);

export const GooglePhotosLogo = () => {
	const st0 = '#F6B704';
	const st1 = '#E54335';
	const st2 = '#4280EF';
	const st3 = '#34A353';
	const st4 = '#757575';
	return (
		<SVG
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/SVG"
			x="0px"
			y="0px"
			viewBox="0 0 1292 448"
			style={ {
				enableBackground: 'new 0 0 1292 448',
			} }
		>
			<G id="Icon">
				<Path
					class="st0"
					fill={ st0 }
					d="M171.6,177.4c23.4,0,42.4,19,42.4,42.4v3.9h-80.9c-2.1,0-3.8-1.7-3.9-3.9C129.2,196.4,148.2,177.4,171.6,177.4
		C171.6,177.4,171.6,177.4,171.6,177.4z"
				></Path>
				<Path
					class="st1"
					fill={ st1 }
					d="M260.2,181.2c0,23.4-19,42.4-42.4,42.4H214v-80.9c0-2.1,1.7-3.9,3.8-3.9h0
		C241.3,138.8,260.2,157.8,260.2,181.2C260.2,181.2,260.2,181.2,260.2,181.2z"
				></Path>
				<Path
					class="st2"
					fill={ st2 }
					d="M256.4,269.9c-23.4,0-42.4-19-42.4-42.4v-3.9h80.9c2.1,0,3.9,1.7,3.9,3.8v0
		C298.8,250.9,279.8,269.9,256.4,269.9C256.4,269.9,256.4,269.9,256.4,269.9z"
				></Path>
				<Path
					class="st3"
					fill={ st3 }
					d="M167.8,266c0-23.4,19-42.4,42.4-42.4c0,0,0,0,0,0h3.9v80.9c0,2.1-1.7,3.8-3.9,3.9
		C186.7,308.4,167.8,289.4,167.8,266z"
				></Path>
			</G>
			<G id="Photos">
				<Path
					class="st4"
					fill={ st4 }
					d="M796,272v-91.6h31.2c15.2,0,28.7,11.3,28.7,27.3s-13.4,27.3-28.7,27.3h-19.4V272H796z M827.5,223.6
		c8.8,0,16-7.2,16-16s-7.2-16-16-16h-19.7v32H827.5z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M875.8,209.3l-0.5,8.7h0.5c3.3-5.8,11.3-10.8,19.8-10.8c16,0,23.9,10.9,23.9,26.4V272h-11.8v-36.6
		c0-13-6.5-17.4-15.5-17.4c-10.2,0-16.5,9.7-16.5,19.3V272H864v-91.6h11.8V209.3z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M993.8,240.6c0,19.1-13.4,33.4-32.2,33.4s-32.2-14.3-32.2-33.4s13.4-33.4,32.2-33.4S993.8,221.6,993.8,240.6z
		 M982,240.6c0-14.3-10-22.6-20.5-22.6s-20.5,8.3-20.5,22.6s10,22.7,20.5,22.7S982,255,982,240.6L982,240.6z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M1008,252.9V220h-11v-10.7h11v-19.2h11.8v19.2h15.3V220h-15.3v32c0,7,2.9,10.2,8.4,10.2c1.8,0.1,3.7-0.3,5.4-1
		l4.1,10.1c-3,1.2-6.2,1.8-9.5,1.7C1015,273,1008,265.7,1008,252.9z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M1105.8,240.6c0,19.1-13.4,33.4-32.2,33.4s-32.2-14.3-32.2-33.4s13.4-33.4,32.2-33.4
		S1105.8,221.6,1105.8,240.6z M1094,240.6c0-14.3-10-22.6-20.5-22.6s-20.5,8.3-20.5,22.6s10,22.7,20.5,22.7S1094,255,1094,240.6
		L1094,240.6z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M1111,256.1l10.5-4.4c3.3,7.9,9.5,11.8,17,11.8c7.3,0,12.5-3.6,12.5-8.8c0-3.2-1.9-6.6-8.6-8.3l-12.7-3.1
		c-5.8-1.4-16.8-6.4-16.8-17.4c0-11.4,11.8-18.7,24.8-18.7c10.9,0,20.3,5,24.2,14.6l-10.2,4.2c-2.4-5.9-8.2-8.3-14.3-8.3
		c-6.7,0-12.4,3-12.4,8.1c0,4,3.3,6.1,8.3,7.3l12.4,2.9c12.4,2.9,17.3,10.6,17.3,18.3c0,11.1-10,19.7-24.7,19.7
		C1123.2,274,1114.7,265.1,1111,256.1z"
				></Path>
			</G>
			<G id="Google">
				<Path
					class="st4"
					fill={ st4 }
					d="M348.7,221.6c0-28.9,24.3-52.5,53.2-52.5c13.5-0.2,26.4,5,36,14.5l-10.1,10.1c-6.9-6.7-16.2-10.4-25.9-10.2
		c-21.1,0-37.6,17-37.6,38.2s16.5,38.1,37.6,38.1c13.7,0,21.5-5.5,26.5-10.5c4.1-4.1,6.8-10,7.8-18H402v-14.4h48.3
		c0.5,3,0.8,6,0.8,9c0,10.8-2.9,24.1-12.4,33.5c-9.2,9.6-21,14.7-36.6,14.7C373,274,348.7,250.5,348.7,221.6z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M490,206.5c-18.7,0-33.9,14.2-33.9,33.8S471.3,274,490,274s33.9-14.3,33.9-33.8S508.7,206.5,490,206.5z
		 M490,260.7c-10.2,0-19.1-8.4-19.1-20.5s8.8-20.5,19.1-20.5s19.1,8.3,19.1,20.5S500.2,260.7,490,260.7z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M564,206.5c-18.7,0-33.9,14.2-33.9,33.8S545.3,274,564,274s33.9-14.3,33.9-33.8S582.7,206.5,564,206.5z
		 M564,260.7c-10.2,0-19.1-8.4-19.1-20.5s8.8-20.5,19.1-20.5s19.1,8.3,19.1,20.5S574.2,260.7,564,260.7z"
				></Path>
				<Path
					class="st4"
					fill={ st4 }
					d="M654.8,208.5v5.5h-0.5c-3.3-4-9.7-7.6-17.8-7.6c-16.9,0-32.4,14.9-32.4,33.9s15.5,33.7,32.4,33.7
		c8.1,0,14.5-3.6,17.8-7.7h0.5v4.9c0,12.9-6.9,19.8-18,19.8c-9.1,0-14.7-6.5-17-12l-12.9,5.4c5,12.1,16.8,20.1,30,20
		c17.4,0,32.1-10.2,32.1-35.2v-60.7H654.8z M637.8,260.7c-10.2,0-18.8-8.6-18.8-20.4s8.6-20.6,18.8-20.6s18,8.7,18,20.6
		S647.9,260.7,637.8,260.7L637.8,260.7z"
				></Path>
				<Rect x="679.2" y="172.7" class="st4" fill={ st4 } width="14.8" height="99.3"></Rect>
				<Path
					class="st4"
					fill={ st4 }
					d="M734.7,260.7c-7.6,0-12.9-3.5-16.4-10.2l45.2-18.7L762,228c-2.8-7.6-11.4-21.5-28.9-21.5s-31.9,13.7-31.9,33.8
		c0,19,14.3,33.8,33.5,33.8c11.3,0.1,21.9-5.6,28.2-15l-11.5-7.7C747.5,257,742.3,260.7,734.7,260.7z M733.6,219.5
		c5.9,0,10.9,2.9,12.5,7.2l-30.2,12.5C715.5,226.2,726,219.5,733.6,219.5L733.6,219.5z"
				></Path>
			</G>
		</SVG>
	);
};

export const JetpackLogo = ( { size = 24, className } ) => (
	<SVG
		className={ classNames( 'jetpack-logo', className ) }
		width={ size }
		height={ size }
		viewBox="0 0 32 32"
	>
		<Path
			className="jetpack-logo__icon-circle"
			fill={ COLOR_JETPACK }
			d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z"
		/>
		<Polygon className="jetpack-logo__icon-triangle" fill="#fff" points="15,19 7,19 15,3 " />
		<Polygon className="jetpack-logo__icon-triangle" fill="#fff" points="17,29 17,13 25,13 " />
	</SVG>
);

// @TODO: Import those from https://github.com/Automattic/social-logos when that's possible.
// Currently we can't directly import icons from there, because all icons are bundled in a single file.
// This means that to import an icon from there, we'll need to add the entire bundle with all icons to our build.
// In the future we'd want to export each icon in that repo separately, and then import them separately here.
const FacebookIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Rect x="0" fill="none" width="24" height="24" />
		<G>
			<Path
				d="M12,2C6.5,2,2,6.5,2,12c0,5,3.7,9.1,8.4,9.9v-7H7.9V12h2.5V9.8c0-2.5,1.5-3.9,3.8-3.9c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3
	c-1.2,0-1.6,0.8-1.6,1.6V12h2.8l-0.4,2.9h-2.3v7C18.3,21.1,22,17,22,12C22,6.5,17.5,2,12,2z"
			/>
		</G>
	</SVG>
);
const TwitterIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Rect x="0" fill="none" width="24" height="24" />
		<G>
			<Path
				d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M16.466,9.71
		c0.004,0.099,0.007,0.198,0.007,0.298c0,3.045-2.318,6.556-6.556,6.556c-1.301,0-2.512-0.381-3.532-1.035
		c0.18,0.021,0.364,0.032,0.55,0.032c1.079,0,2.073-0.368,2.862-0.986c-1.008-0.019-1.859-0.685-2.152-1.6
		c0.141,0.027,0.285,0.041,0.433,0.041c0.21,0,0.414-0.028,0.607-0.081c-1.054-0.212-1.848-1.143-1.848-2.259
		c0-0.01,0-0.019,0-0.029c0.311,0.173,0.666,0.276,1.044,0.288c-0.618-0.413-1.025-1.118-1.025-1.918
		c0-0.422,0.114-0.818,0.312-1.158c1.136,1.394,2.834,2.311,4.749,2.407c-0.039-0.169-0.06-0.344-0.06-0.525
		c0-1.272,1.032-2.304,2.304-2.304c0.663,0,1.261,0.28,1.682,0.728c0.525-0.103,1.018-0.295,1.463-0.559
		c-0.172,0.538-0.537,0.99-1.013,1.275c0.466-0.056,0.91-0.18,1.323-0.363C17.306,8.979,16.916,9.385,16.466,9.71z"
			/>
		</G>
	</SVG>
);
const LinkedinIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Rect x="0" fill="none" width="24" height="24" />
		<G>
			<Path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z" />
		</G>
	</SVG>
);
const TumblrIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Rect x="0" fill="none" width="24" height="24" />
		<G>
			<Path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-5.57 14.265c-2.445.042-3.37-1.742-3.37-2.998V10.6H8.922V9.15c1.703-.615 2.113-2.15 2.21-3.026.006-.06.053-.084.08-.084h1.645V8.9h2.246v1.7H12.85v3.495c.008.476.182 1.13 1.08 1.107.3-.008.698-.094.907-.194l.54 1.6c-.205.297-1.12.642-1.946.657z" />
		</G>
	</SVG>
);
const GoogleIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<G>
			<Path d="M12.02 10.18v3.73h5.51c-.26 1.57-1.67 4.22-5.5 4.22-3.31 0-6.01-2.75-6.01-6.12s2.7-6.12 6.01-6.12c1.87 0 3.13.8 3.85 1.48l2.84-2.76C16.99 2.99 14.73 2 12.03 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.77 0-.83-.11-1.42-.25-2.05h-9.36z" />
		</G>
	</SVG>
);

export const LoomIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 100 100">
			<Path d="M100,44H72.4l23.9-13.8l-6-10.4L66.4,33.6L80.2,9.7l-10.4-6L56,27.59V0H44v27.6L30.2,3.7l-10.4,6l13.8,23.9 L9.7,19.8l-6,10.4L27.6,44H0V56h27.6L3.7,69.8l6,10.4l23.9-13.8L19.8,90.3l10.4,6L44,72.4V100H56V72.41l13.8,23.9l10.4-6L66.4,66.4 l23.9,13.8l6-10.4L72.4,56H100V44z M50,65.23c-8.41,0-15.23-6.82-15.23-15.23c0-8.41,6.82-15.23,15.23-15.23S65.23,41.59,65.23,50 C65.23,58.41,58.41,65.23,50,65.23z" />
		</SVG>
	),
};

export const SmartFrameIcon = {
	foreground: getIconColor(),
	src: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.7 17" xmlSpace="preserve">
			<Path d="m20.7 12.9-.9-11c0-.5-.2-.9-.5-1.3-.3-.3-.8-.5-1.3-.5L1.9 0h-.1c-.2 0-.5 0-.7.1C.9.2.7.4.5.5.4.7.2.9.1 1.1c-.1.2-.1.5-.1.7v.1l.9 13.4c0 .5.2.9.5 1.3.3.2.8.4 1.3.4H3l16.1-2c.4 0 .9-.3 1.1-.6.3-.3.5-.8.5-1.2v-.3zm-3.1.8L4.2 15.3H4c-.4 0-.8-.1-1-.4-.3-.3-.4-.6-.5-1L1.7 3.2v-.1c0-.4.2-.8.5-1 .3-.3.7-.4 1-.4h.1l13.5.1c.4 0 .8.1 1 .4.3.3.4.6.5 1L19 12v.3c0 .4-.2.7-.4 1-.3.2-.6.4-1 .4z" />
		</SVG>
	),
};

export const DonationsIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 24 24">
			<Rect x="0" fill="none" width="24" height="24" />
			<G>
				<Path d="M16.5 4.5c2.206 0 4 1.794 4 4 0 4.67-5.543 8.94-8.5 11.023C9.043 17.44 3.5 13.17 3.5 8.5c0-2.206 1.794-4 4-4 1.298 0 2.522.638 3.273 1.706L12 7.953l1.227-1.746c.75-1.07 1.975-1.707 3.273-1.707m0-1.5c-1.862 0-3.505.928-4.5 2.344C11.005 3.928 9.362 3 7.5 3 4.462 3 2 5.462 2 8.5c0 5.72 6.5 10.438 10 12.85 3.5-2.412 10-7.13 10-12.85C22 5.462 19.538 3 16.5 3z" />
			</G>
		</SVG>
	),
};

export const ConversationIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 24 24">
			<Rect x="0" fill="none" width="24" height="24" />
			<G>
				<Path d="M15.9216 2H2.98533C2.43803 2 1.99023 2.45 1.99023 3V17L5.97062 13H15.9216C16.4689 13 16.9167 12.55 16.9167 12V3C16.9167 2.45 16.4689 2 15.9216 2ZM14.9265 4V11H5.14469L3.98043 12.17V4H14.9265ZM18.9069 6H20.8971C21.4444 6 21.8922 6.45 21.8922 7V22L17.9118 18H6.96572C6.41842 18 5.97062 17.55 5.97062 17V15H18.9069V6Z" />
			</G>
		</SVG>
	),
};

export const DialogueIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 24 24">
			<Rect x="0" fill="none" width="24" height="24" />
			<G>
				<Path d="M3.98042 2H19.9019C20.9965 2 21.8921 2.9 21.8921 4V16C21.8921 17.1 20.9965 18 19.9019 18H5.97061L1.99023 22V4C1.99023 2.9 2.88582 2 3.98042 2ZM5.97061 16H19.9019V4H3.98042V18L5.97061 16Z" />
			</G>
		</SVG>
	),
};

export const TranscriptIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 24 24">
			<Rect x="0" fill="none" width="24" height="24" />
			<G>
				<Path
					d="M11.1114 8H20.0002M11.1113 15H20.0002"
					stroke={ getIconColor() }
					strokeWidth="1.5"
				/>
				<Path d="M4 10V6L8 8L4 10Z" fill={ getIconColor() } />
				<Path d="M4 17V13L8 15L4 17Z" fill={ getIconColor() } />
			</G>
		</SVG>
	),
};

export const TranscriptSpeakerIcon = {
	foreground: getIconColor(),
	src: (
		<SVG viewBox="0 0 24 24">
			<Rect x="0" fill="none" width="24" height="24" />
			<G>
				<Path d="M4 12V4L11 8L4 12Z" />
				<Path d="M4 14.5H20V16H4V14.5Z" />
				<Path d="M4 18.5H13V20H4V18.5Z" />
			</G>
		</SVG>
	),
};

export const formatUppercase = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M2.5 7.5V4.5H15.5V7.5H10.5V19.5H7.5V7.5H2.5ZM12.5 9.5H21.5V12.5H18.5V19.5H15.5V12.5H12.5V9.5Z" />
	</SVG>
);

export const ControlForwardFiveIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M12.7049 2V6C8.30658 6 4.74414 9.58 4.74414 14C4.74414 18.42 8.30658 22 12.7049 22C17.1032 22 20.6656 18.42 20.6656 14H18.6755C18.6755 17.31 15.9987 20 12.7049 20C9.41113 20 6.73433 17.31 6.73433 14C6.73433 10.69 9.41113 8 12.7049 8V12L17.6804 7L12.7049 2ZM11.6501 12.73L11.4013 14.9L12.068 15.06C12.0753 15.0526 12.0827 15.0447 12.0901 15.0366C12.1131 15.0116 12.1375 14.9851 12.1675 14.97C12.1874 14.96 12.2073 14.9475 12.2272 14.935C12.2471 14.9225 12.2671 14.91 12.287 14.9C12.3268 14.88 12.3865 14.86 12.4362 14.85C12.486 14.84 12.5556 14.83 12.6352 14.83C12.7447 14.83 12.8542 14.85 12.9338 14.88C13.0134 14.91 13.083 14.96 13.1427 15.03C13.2024 15.1 13.2422 15.17 13.2721 15.27C13.302 15.37 13.3119 15.47 13.3119 15.58V15.58C13.3119 15.69 13.3119 15.79 13.2821 15.89C13.2522 15.99 13.2124 16.07 13.1726 16.14C13.1328 16.21 13.0631 16.27 12.9935 16.31C12.9238 16.35 12.8343 16.37 12.7248 16.37C12.5556 16.37 12.4163 16.31 12.3069 16.22C12.1974 16.13 12.1377 15.99 12.1178 15.81H11.2819C11.2819 16.01 11.3317 16.19 11.4113 16.34C11.4909 16.49 11.5904 16.63 11.7297 16.73C11.869 16.83 12.0183 16.92 12.1874 16.97C12.3566 17.02 12.5357 17.05 12.7148 17.05C12.9636 17.05 13.1726 17 13.3517 16.93C13.5308 16.86 13.6801 16.75 13.7995 16.62C13.9189 16.49 14.0085 16.34 14.0682 16.17C14.1279 16 14.1577 15.82 14.1577 15.63C14.1577 15.41 14.1179 15.21 14.0682 15.03C14.0184 14.85 13.9289 14.7 13.8194 14.58C13.7099 14.46 13.5706 14.37 13.4114 14.3C13.2522 14.23 13.0731 14.2 12.8641 14.2C12.7945 14.2 12.7248 14.21 12.6651 14.22C12.6352 14.225 12.6054 14.2325 12.5755 14.24C12.5457 14.2475 12.5158 14.255 12.486 14.26C12.4263 14.27 12.3765 14.29 12.3367 14.31C12.3201 14.3183 12.3035 14.325 12.2876 14.3313C12.2654 14.3401 12.2446 14.3483 12.2272 14.36L12.3367 13.44H14.0284V12.73H11.6501Z" />
	</SVG>
);

export const ControlBackFiveIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M11.9412 2V6C16.3395 6 19.902 9.58 19.902 14C19.902 18.42 16.3395 22 11.9412 22C7.54291 22 3.98047 18.42 3.98047 14H5.97066C5.97066 17.31 8.64746 20 11.9412 20C15.235 20 17.9118 17.31 17.9118 14C17.9118 10.69 15.235 8 11.9412 8V12L6.96575 7L11.9412 2ZM10.8864 12.73L10.6376 14.9L11.3044 15.06C11.3117 15.0526 11.319 15.0447 11.3264 15.0366C11.3494 15.0116 11.3738 14.9851 11.4039 14.97C11.4238 14.96 11.4437 14.9475 11.4636 14.935C11.4835 14.9225 11.5034 14.91 11.5233 14.9C11.5631 14.88 11.6228 14.86 11.6725 14.85C11.7223 14.84 11.792 14.83 11.8716 14.83C11.981 14.83 12.0905 14.85 12.1701 14.88C12.2497 14.91 12.3194 14.96 12.3791 15.03C12.4388 15.1 12.4786 15.17 12.5084 15.27C12.5383 15.37 12.5482 15.47 12.5482 15.58V15.58C12.5482 15.69 12.5482 15.79 12.5184 15.89C12.4885 15.99 12.4487 16.07 12.4089 16.14C12.3691 16.21 12.2995 16.27 12.2298 16.31C12.1601 16.35 12.0706 16.37 11.9611 16.37C11.792 16.37 11.6526 16.31 11.5432 16.22C11.4337 16.13 11.374 15.99 11.3541 15.81H10.5182C10.5182 16.01 10.568 16.19 10.6476 16.34C10.7272 16.49 10.8267 16.63 10.966 16.73C11.1053 16.83 11.2546 16.92 11.4238 16.97C11.5929 17.02 11.7721 17.05 11.9512 17.05C12.1999 17.05 12.4089 17 12.588 16.93C12.7672 16.86 12.9164 16.75 13.0358 16.62C13.1552 16.49 13.2448 16.34 13.3045 16.17C13.3642 16 13.3941 15.82 13.3941 15.63C13.3941 15.41 13.3543 15.21 13.3045 15.03C13.2547 14.85 13.1652 14.7 13.0557 14.58C12.9463 14.46 12.807 14.37 12.6477 14.3C12.4885 14.23 12.3094 14.2 12.1004 14.2C12.0308 14.2 11.9611 14.21 11.9014 14.22C11.8716 14.225 11.8417 14.2325 11.8119 14.24C11.782 14.2475 11.7522 14.255 11.7223 14.26C11.6626 14.27 11.6128 14.29 11.573 14.31C11.5564 14.3183 11.5398 14.325 11.5239 14.3313C11.5017 14.3401 11.481 14.3483 11.4636 14.36L11.573 13.44H13.2647V12.73H10.8864Z" />
	</SVG>
);

export const SocialServiceIcon = ( { serviceName, className } ) => {
	const defaultProps = {
		className: classNames( 'jetpack-gutenberg-social-icon', `is-${ serviceName }`, className ),
		size: 24,
	};

	switch ( serviceName ) {
		case 'facebook':
			return <Icon icon={ FacebookIcon } { ...defaultProps } />;
		case 'twitter':
			return <Icon icon={ TwitterIcon } { ...defaultProps } />;
		case 'linkedin':
			return <Icon icon={ LinkedinIcon } { ...defaultProps } />;
		case 'tumblr':
			return <Icon icon={ TumblrIcon } { ...defaultProps } />;
		case 'google':
			return <Icon icon={ GoogleIcon } { ...defaultProps } />;
	}

	return null;
};

export const flashIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M0 0h24v24H0z" fill="none" />
		<Path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor" />
	</SVG>
);