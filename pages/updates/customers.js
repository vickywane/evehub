import React from 'react';
import styled from 'styled-components';
import { media } from '.././media_style'

const Header = styled.h3`
	text-align: center;
	font-weight: bold;
	padding-top: 30px;
`;

const Div = styled.div`
	background-color: #F8F8F9;
	color: black;
	height: 50vh;
`;

const Text = styled.h3`
	text-align: center;
	font-weight: bold;
`;

export default function update() {
	return (
		<Div>
			<Header> Customers Region </Header> <hr />  

      <Text> List of customers </Text>
		</Div>
	);
}
