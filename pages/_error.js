import React from 'react';
import { Ghost } from 'react-kawaii';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Helmet } from 'react-helmet';
import Link from 'next/link';

const Contain = styled.div`
	height: 70vh;
	border-radius: 20px;
	width: 80%;
	margin-top: 10%;
	background: #e0e4e8;
`;

const Div = styled.div`
	margin-top: 10%;
`;

const Text = styled.h4`
	color: #6168b5;
	text-align: center;
	margin-top: 17%;
	margin-left: 2.5%;
	font-weight: bold;
`;

export default function _error() {
	return (
		<>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

			<Flex justifyCenter>
				<Contain>
					<Flex justifyCenter>
						<Div>
							<Flex>
								<Ghost mood="sad" color="#FDA7DC" size={170} />

								<Text> 404 || Page Not Found </Text>
							</Flex>
						</Div>
					</Flex>
					<div style={{ textAlign: 'center', marginTop: '10%' }}>
						<Link to="./home">
							<a href="/"> <h4> COME HOME </h4> </a>
						</Link>
					</div>
				</Contain>
			</Flex>
		</>
	);
}
