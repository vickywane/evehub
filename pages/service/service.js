import React from 'react';
import styled from 'styled-components';
import Download from '../home/download';
import { media } from '../media_style';
import Nav from '../../components/nav';
import Img from 'react-image';

const Tile = styled.h3`
	${media.tablet`
	padding-right: 60px;
	font-size: 1.7em;
 
`}
	${media.phone`
	font-size: 25px;
	font-size: 1.3em;
	`}
&:hover {
		cursor: pointer;
	}
	padding-left: 20px;
	font-size: 2em;
	padding-top: 10px;
`;

const Feature = styled.h5`
	padding-left: 5px;
	${media.tablet`
	font-size: 1.4em;
`}
	${media.phone`
	font-size: 1.1em;
	`}
	font-size: 1.5em;
`;
const Banner = styled(Img)`
	width: 100%;
	height: 250px;
`;
const FeatureText = styled.p`
	padding-left: 30px;
	font-size: 14px;
`;
const Container = styled.div`
	padding-left: 35px;
	padding-right: 20px;
`;

const Contain = styled.p`
	margin-left: auto;
	margin-right: auto;
`;

const Div = styled.div`
	padding-left: 15px;
	display: block;
`;

const Text = styled.p`
	${media.tablet`
	font-size: 1.2em;
 
`}
	${media.phone`
	font-size: 1em;
	`}
	font-size: 1.3em;
`;

const Paragraph = styled.p`
	margin-top: 30px;
	margin-bottom: 30px;
`;
const NParagraph = styled.p`
	margin-bottom: 10px;
`;
const FParagraph = styled.p`
	margin-top: 10px;
	margin-bottom: 30px;
`;
const Data = styled.p`
	padding-left: 30px;
`;

const Comment = styled.p`
	font-size: 12px;
	text-align: center;
	color: grey;
`;

export default function service() {
	return (
		<div>

			<Nav />
			
			<Banner
				class="d-block w-100"
				src={'https://res.cloudinary.com/dkfptto8m/image/upload/v1558090271/Mongodb%20hackathon%20project/FRONT-END_OPERATION_DESIGN_1.png'}
				alt="First slide"
				unloader = {<p> Not found</p>}
			/>
			<Div>
				<div>
					<Tile> Charging Outlets And Technicians </Tile>
					<Container>
						<Paragraph>
							<Text>
								{' '}
								Charging outlets are to register their services using the Web Platform . Here
								individuals create an account and register their Charging Stations, after verification,
								these outlets have acess their individual Dashboards to view and update information
								relating to their outlet{' '}
							</Text>
						</Paragraph>

						<Paragraph>
							<Text>
								Outlets can view and respond feedbacks from users who have used their Outlet through
								their Dashboard and also view their current resources. Outlets are allowed to register
								Technicians to their Station.
							</Text>
						</Paragraph>

						<Paragraph>
							<Text>
								Technicians who do not have a Charging Station to operate with are to create an account
								and after which they would be interviewed and accessed by the Charging Station nearest
								to their point of registration.
							</Text>
						</Paragraph>
					</Container>
				</div>
				<hr />
				<div>
					<Tile> Electronic Vehicle Owners </Tile>
					<Container>
						<Paragraph>
							<Text>
								Making the usage Electronic Vehicle to Owners is the goal of this service. Hence,
								several features are being implemented to make this happen. Users are provided with a
								Mobile App to use this service.
							</Text>
						</Paragraph>

						<NParagraph>
							<Text>
								By default , all features and services provided within this app are based on the user
								current location.
							</Text>
						</NParagraph>

						<div>
							<Download />
						</div>
						<FeatureText> Features of the Mobile App are explained below ;</FeatureText>
						<hr />

						<div>
							<Feature> Telematics </Feature>
							<Contain>
								<FParagraph>
									<Data>
										With a good use of Google Maps , users able to find Charging Stations and
										Technicians based on their current location.
									</Data>
								</FParagraph>
								<Comment>Comment on Image</Comment>
							</Contain>
						</div>

						<hr />

						<div>
							<Feature> Maps </Feature>
							<Contain>
								<FParagraph>
									<Data>
										With a good use of Google Maps , users able to find Charging Stations and
										Technicians based on their current location.
									</Data>
								</FParagraph>
								<Comment>Comment on Image</Comment>
							</Contain>
						</div>

						<hr />

						<div>
							<Feature> Services </Feature>
							<Contain>
								<FParagraph>
									<Data>
										With a good use of Google Maps , users able to find Charging Stations and
										Technicians based on their current location.
									</Data>
								</FParagraph>
								<Comment>Comment on Image</Comment>
							</Contain>
						</div>

						<hr />

						<div>
							<Feature> Notifications </Feature>
							<Contain>
								<FParagraph>
									<Data>
										With a good use of Google Maps , users able to find Charging Stations and
										Technicians based on their current location.
									</Data>
								</FParagraph>
								<Comment>Comment on Image</Comment>
							</Contain>
						</div>
					</Container>
				</div>
			</Div>{' '}
		</div>
	);
}
