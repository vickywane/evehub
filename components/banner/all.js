import React from 'react';
import styled from 'styled-components';
import { Carousel, Card } from 'react-bootstrap';
import Img from 'react-image';
import { media } from '../../pages/media_style';

import withStyles from '@material-ui/core/styles/withStyles';
import Header from './header';
import Parallax from './parallax';
import componentsStyle from './style';
import Banner from './banner';

class all extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		const Banner = styled(Img)`
			width: 100%;
		`;

		const CardContainer = styled.div`
			margin-left: 10%;
			margin-right: 10%;
			text-align: center;
		`;

		const Container = styled.div`
		height : 50vh
		width : 100%
		background : #F0f0f0
	`;
		const CardText = styled.p`
			${media.tablet`
      margin-left: 2%
      margin-right: 2%
      font-size: 1.3em
      `}
			${media.phone`
		font-size: 1em
		`}
		font-size: 1.3em
		`;

		return (
			<Container>
				<Header
					brand="Material Kit React"
					fixed
					color="transparent"
					changeColorOnScroll={{
						height: 350,
					}}
					{...rest}
				/>

			</Container>
		);
	}
}

export default withStyles(componentsStyle)(all);
