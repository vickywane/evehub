import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../media_style';
import { Card } from 'react-bootstrap';
import Flex from 'styled-flex-component';

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

const Container = styled.div`
	height: 50vh;
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
	padding-top: 1%;
	padding-left: 5%;
	padding-right: 5%;
	color: black;
`;

const StrtButton = styled.button`
	background: transparent;
	text-align: center;
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

export default function service() {
	return (
		<Container>
			<Title> USAGE </Title>
			<Text>
				EvoHub is built for Electric Vehicle Owners , Private or Public Charging Station Owners and Maintenance
				Outlets .
			</Text>

			<Flex>
				<Card style={{ width: '25%', maxHeight: '20%', marginLeft: '2%' , marginRight: '2%' }}> aaa</Card>
				<Card style={{ width: '25%', height: '20%' }}> aaa</Card>
				<Card style={{ width: '25%', height: '20%' }}> aaa</Card>
			</Flex>

			<Link href="../service/service">
				<StrtButton> Learn More </StrtButton>
			</Link>
		</Container>
	);
}
