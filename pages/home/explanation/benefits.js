import Link from 'next/link';
import React from 'react';
import Img from 'react-image';
import { Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { media } from '../../media_style';

const Banner = styled(Img)`
	width: 45%;
	height: 40vh;
`;

const Container = styled.div`
	height: 100vh;
	background: #0066f5;
	${media.medium`
	height: 170vh;
	`}
`;

const Title = styled.p`
	font-size: 0.75em;
	padding-top: 2%;
	padding-left: 2%;
	color: palevioletred;
`;

const Text = styled.h5`
	padding-left: 3%;
	color: white;
	${media.medium`
	font-size : 1.1em
	padding-left: 2.7%;
	`}
	${media.tablet`
	font-size : 1.3em
	`} 	
	${media.desktop`
	font-size : 1.5em
	`}
`;

const Feature = styled.p`
	font-weight: bold
	font-size : 1.5em
	${media.tablet`
	font-size : 1.5em
	`}
	${media.phone`
	font-size : 1em
	`} 
	${media.medium`
	font-size : 1.2em
	`} 
	${media.desktop`
	font-size : 1.7em
	`}
`;

const Explain = styled.p`
	font-weight: 'bold'
	font-size : 1.5em
	${media.tablet`
	font-size : 1.2em
	`}
	${media.desktop`
	font-size : 1.3em
	`}
	${media.medium`
	font-size : 1em
	`} 

`;

const Button = styled.div`
	margin-top: 2%;
	margin-right: 5%;
	text-align: right;
`;

const StrtButton = styled.button`
	background: #0e2f5a;
	text-align: center;
	border-radius: 7px;
	height: 55px;
	width: 20%;
	border: 1.2px solid #0e2f5a;
	color: #fff;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1em;
	${media.medium`
	height: 57px;
	width: 35%;
	`}
	&:hover {
		color: #0e2f5a;
		background: #fff;
	}
`;

const Benefits = styled.div` 
	width: 50%
	@media (max-width: 770px) {
		text-align: center
	}
	@media (max-width: 450px) {
		text-align: center
	}
`;

const Div = styled.div`
	@media (max-width: 770px) {
		margin-left: 10%;
		margin-right: 20%;
	}
	@media (max-width: 450px) {
		margin-left: 10%;
		margin-right: 20%;
	}
`;

export default function service() {
	return (
		<Container>
			<Title> FEATURES </Title>
			<Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>For Electric Vehicle Owners ;</Text>

			<Div>
				<Grid
					stackable
					celled="internally"
					columns="equal"
					style={{ marginLeft: '5%', marginTop: '5%', color: 'white' }}
				>
					<Grid.Row>
						<Grid.Column>
							<div>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />
									<Benefits >
										<Feature> Telematics </Feature>
										<Explain> Vehicle statistics all in your mobile device </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>

						<Grid.Column>
							<div style={{}}>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />

									<Benefits>
										<Feature> GeoSpatial Query</Feature>
										<Explain> By default all data is provided based on user location </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>

						<Grid.Column>
							<div style={{ marginRight: '5%' }}>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />

									<Benefits>
										<Feature> Payments</Feature>
										<Explain>Pay for your charge </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Div>

			<Text style={{ marginLeft: '5%', fontWeight: 'bold', marginTop: '5%' }}>For Charging Station Owners ;</Text>

			<Div>
				<Grid
					stackable
					celled="internally"
					columns="equal"
					style={{ marginLeft: '5%', marginTop: '5%', color: 'white' }}
				>
					<Grid.Row>
						<Grid.Column>
							<div>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />
									<Benefits>
										<Feature> Telematics </Feature>
										<Explain> Vehicle statistics all in your mobile device </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>

						<Grid.Column>
							<div style={{}}>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />

									<Benefits>
										<Feature> GeoSpatial Query</Feature>
										<Explain> By default all data is provided based on user location </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>

						<Grid.Column>
							<div style={{ marginRight: '5%' }}>
								<Flex column>
									<Icon name="facebook" size="big" color="red" />

									<Benefits>
										<Feature> Payments</Feature>
										<Explain>Pay for your charge </Explain>
									</Benefits>
								</Flex>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Div>

			<Link href="../service/service">
				<Button>
					<StrtButton> Learn More </StrtButton>
				</Button>
			</Link>
		</Container>
	);
}
