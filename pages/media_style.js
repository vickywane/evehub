import { css } from 'styled-components';

const ScreenSizes = {
	DESKTOP: 2200 ,
	TABLET: 1200,
	PHONE: 400 ,
	MEDIUM: 800 ,
};

const sizes = {
	desktop: ScreenSizes.DESKTOP,
	tablet: ScreenSizes.TABLET,
	phone: ScreenSizes.PHONE,
	medium: ScreenSizes.MEDIUM, 
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