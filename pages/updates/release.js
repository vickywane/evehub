import React from 'react';
import styled from 'styled-components';
import { media } from '.././media_style'

const Header = styled.h3`
	text-align: center;
	font-weight: bold;
	color: white;
	padding-top: 30px;
`;

const Div = styled.div`
	background-color:  #2c3e50;
	width: 100%;
	height: 70vh;
`;

const Text = styled.h3`
	text-align: center;
	font-weight: bold;
	color: white;
`;

export default function update() {
	return (
		<Div>
			<Header> Recent Updates </Header> <hr />  

      <Text> We are getting better and beter</Text>
		</Div>
	);
}
