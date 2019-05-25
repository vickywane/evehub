import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../media_style';
import Flex from 'styled-flex-component';
import Img from 'react-image';
import { Icon } from 'semantic-ui-react';

const Contain = styled.div`
	${media.tablet`
				padding-right: 60px;
				text-align: right;
			`}
	${media.phone`
			text-align: center;
			`}
			&:hover {
		cursor: pointer;
		color: blue;
	}
	padding-right: 70px;
	text-align: right;
`;

const Banner = styled(Img)`
	width: 45%;
	height: 40vh;
`;

const Container = styled.div`
	height: 50vh;
	background: #0066f5;
`;

const Title = styled.p`
	font-size: 1em;
	padding-top: 2%;
	padding-left: 2%;
	color: palevioletred;
`;

const Text = styled.h4`
	padding-left: 3.5%;
	color: white;
`;

const Button = styled.div`
	text-align: right;
	margin-top: 2%;
`;

const StrtButton = styled.button`
	background: #0e2f5a;
	text-align: center;
	border-radius: 2px;
	height: 40px;
	width: 20%;
	border: 1.2px solid #0e2f5a;
	color: #fff;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1em;
	&:hover {
		color: #0e2f5a;
		background: #fff;
	}
`;

export default function service() {
	return (
		<Container>
			<Title> FEATURES </Title>
			<Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>For Electric Vehicle Owners ;</Text>

			<div style={{ marginLeft: '5%', marginTop: '5%' }}>
				<Flex>
					<div style={{ marginRight: '5%' }}>
						<Flex column>
							<Icon name="facebook" size="big" color="red" />

							<div style={{ width: '50%' }}>
								<h4 style={{ fontWeight: 'bold' }}> Telematics </h4>
								<p> Vehicle statistics all in your mobile device </p>
							</div>
						</Flex>
					</div>

					<div style={{ marginRight: '5%' }}>
						<Flex column>
							<Icon name="facebook" size="big" color="red" />

							<div style={{ width: '50%' }}>
								<h4 style={{ fontWeight: 'bold' }}> GeoSpatial Query</h4>
								<p> By default all data is provided based on user location </p>
							</div>
						</Flex>
					</div>

					<div style={{ marginRight: '5%' }}>
						<Flex column>
							<Icon name="facebook" size="big" color="red" />

							<div style={{ width: '50%' }}>
								<h4 style={{ fontWeight: 'bold' }}> Payments</h4>
								<p>Pay for your charge </p>
							</div>
						</Flex>
					</div>
				</Flex>
			</div>

			<Link href="../service/service">
				<Button>
					<StrtButton> Learn More </StrtButton>
				</Button>
			</Link>
		</Container>
	);
}
