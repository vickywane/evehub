import React from 'react';
import styled from 'styled-components';
import { Carousel, Card } from 'react-bootstrap';
import Img from 'react-image';
import { media } from '../../pages/media_style';
import Flex from 'styled-flex-component';

class banner extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		const Banner = styled(Img)`
			width: 65%;
			padding-right: 3%;
			height: 55vh;
		`;

		const Container = styled.div`
			margin-left: 5%;
			padding-top: 15%;
			margin-right: 15%;
			color: #323a56;
		`;

		const Title = styled.h3`
			width: 75%;
			font-weight: bold;
		`;

		const Description = styled.p`
			color: #0e2f5a;
		`;

		const Button = styled.button`
			background: #0748a8;
			text-align: center;
			border-radius: 3px;
			height: 45px;
			width: 40%;
			border: 1.5px solid palevioletred;
			color: white;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 1em;
		`;

		const StrtButton = styled.button`
			background: #0078ff;
			text-align: center;
			border-radius: 3px;
			height: 45px;
			width: 35%;
			border: 1px solid palevioletred;
			color: white;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 1em;
		`;

		const Div = styled.div`
			width: 100%;
			padding-top: 10%;
			height: 70vh;
			background: #f0f0d0;
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
			<Div>
				<Flex>
					<Container>
						<Title> Digital charging system for electric vehicles </Title>

						<Description>
							{' '}
							EvoHub is a digital system built to make catering for Electric Vehicles easier for Electric
							Vehicle Owners.{' '}
						</Description>
			
						<StrtButton> Get Started </StrtButton>
						<Button> Learn More </Button>
					</Container>
					<Banner
						unloader={<p> loading ... </p>}
						loader={<p> not loading ... </p>}
						src={[
							'https://res.cloudinary.com/dkfptto8m/image/upload/v1558649119/Mongodb%20hackathon%20project/phone1.png',
						]}
					/>
				</Flex>
			</Div>
		);
	}
}

export default banner;
