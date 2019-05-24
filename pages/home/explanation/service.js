import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../media_style';
import { Card } from 'react-bootstrap';
import Flex from 'styled-flex-component';
import Img from 'react-image';

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
	height: 80vh;
	background: #f4f7f8;
`;

const Title = styled.p`
	font-size: 1em;
	padding-top: 2%;
	padding-left: 2%;
	color: blue;
`;

const Text = styled.p`
	font-size: 1em;
	padding-left: 7%;
	padding-right: 5%;
	color: #0e2f5a;
`;

const Header = styled.p`
	font-size: 2em;
	padding-left: 5%;
	font-weight: bold;
	width: 70%;
	color: #0e2f5a;
`;

const Cards = styled.div`
	width: 50%;
`;

const StrtButton = styled.button`
	background: transparent;
	text-align: left;
	border-radius: 2px;
	height: 40px;
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
`;

const Button = styled.div`
	text-align: left;
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

			<Flex>
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
				<Banner
					unloader={<p> loading</p>}
					loader={<p> not loading</p>}
					src={[
						'https://res.cloudinary.com/dkfptto8m/image/upload/v1558689080/Mongodb%20hackathon%20project/SERVICE.png',
					]}
				/>
			</Flex>
			<Button>
				<Link href="../service/service">
					<StrtButton> Learn More </StrtButton>
				</Link>{' '}
			</Button>
		</Container>
	);
}
