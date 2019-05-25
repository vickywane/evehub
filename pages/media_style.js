import { css } from 'styled-components';

const ScreenSizes = {
	DESKTOP: 2200 ,
	TABLET: 1200,
	MEDIUM: 800 ,
	PHONE: 400 ,
};

const sizes = {
	desktop: ScreenSizes.DESKTOP,
	tablet: ScreenSizes.TABLET,
	medium: ScreenSizes.MEDIUM, 
	phone: ScreenSizes.PHONE,
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 15}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export { media };