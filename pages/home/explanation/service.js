import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../media_style';
import { Card } from 'react-bootstrap';
import Flex from 'styled-flex-component';
import Img from 'react-image';
import { Grid } from 'semantic-ui-react';

const Banner = styled(Img)`
	width: 45%;
	height: 40vh;
`;

const Container = styled.div`
	height: 80vh;
	background: #f4f7f8;
	${media.tablet`
	height: 100vh;
`}
	${media.medium`
	height: 110vh;
`}
`;

const Title = styled.p`
	font-size: 1em;
	padding-top: 2%;
	padding-left: 2%;
	color: blue;
`;

const Text = styled.p`
	font-size: 1.2em;
	padding-left: 7%;
	padding-right: 5%;
	color: #0e2f5a;
	${media.tablet`
	font-size: 1.1em;
	padding-left: 5%;
`}
	${media.medium`
	font-size: 1.1em;
	padding-left: 5%;
`}
`;

const Header = styled.p`
	font-size: 2em;
	padding-left: 5%;
	font-weight: bold;
	width: 70%;
	color: #0e2f5a;
	${media.tablet`
	padding-left: 2%;
	font-size: 1.7em;
`}
	${media.medium`
	padding-left: 2%;
	width: 87%;
	font-size: 1.5em;
`}
`;

const Cards = styled.div`
	width: 50%;
`;

const StrtButton = styled.button`
	background: transparent;
	text-align: center;
	border-radius: 2px;
	height: 50px;
	width: 20%;
	border: 1.2px solid #0078ff;
	color: #0e2f5a;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1em;
	&:hover {
		color: white;
		background: #0078ff;
	}
	${media.medium`
	width: 30%;
`}
`;

const Button = styled.div`
	text-align: right;
	margin-top: 5%;
	margin-right: 5%;
`;

export default function service() {
	return (
		<Container>
			<Title> USAGE </Title>
			<Header>EvoHub for private chargers , technicians and Electric Vehicle Owners.</Header>

			<Text>
				EvoHub is built for Electric Vehicle Owners , Private or Public Charging Station Owners and Maintenance
				Outlets .
			</Text>

			<Grid stackable   columns="equal">
				<Grid.Column>
					<Cards>
						<Flex>
							<Card style={{ width: '25%', maxHeight: '20%', marginLeft: '2%', marginRight: '2%' }}>
								{' '}
								aaa
							</Card>
							<Card style={{ width: '25%', maxHeight: '20%' }}> aaa</Card>
							<Card style={{ width: '25%', maxHeight: '20%' }}> aaa</Card>
						</Flex>
					</Cards>
				</Grid.Column>
				<Grid.Column>
					<Banner
						unloader={<p> loading</p>}
						loader={<p> not loading</p>}
						src={[
							'https://res.cloudinary.com/dkfptto8m/image/upload/v1558689080/Mongodb%20hackathon%20project/SERVICE.png',
						]}
					/>
				</Grid.Column>
			</Grid>
			<Button>
				<Link href="../service/service">
					<StrtButton> Learn More </StrtButton>
				</Link>
			</Button>
		</Container>
	);
}
