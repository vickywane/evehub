import React from 'react';
import styled from 'styled-components';
import { media } from '../media_style';

const Div = styled.div`
	${media.tablet`
		text-align: center
`}
	${media.phone`
	text-align: center
`}
text-align  : center
`;
 

const Image = styled.img`
	width: 50px;
	height: 50px;
`;
const Button = styled.button`
	${media.tablet`
	height: 100px;
	border-radius: 8px;
	`}
	${media.phone`
		font-size : 0.9em
		padding-top : 7px
		border-radius: 6px;
		width: 30%;
		height: 115px;
		`}
	background: transparent;
	border-radius: 9px;
	border: 1.5px solid palevioletred;
	color: palevioletred;
	margin: 0.5em 1em;
	width: 30%;
	height: 60px;
	padding: 0.25em 1em;
	&:hover {
		cursor: pointer;
		color: blue;
	}
`;

const Buttons = styled.div``;

const Text = styled.p`
	text-align: center;
	color: black;
	${media.tablet`
		font-size : 1.3em
	`}
	${media.phone`
	font-size : 0.9em
`}
font-size : 1.2em
`;

export default function download() {
	return (
		<Div>
			<Buttons>
				<Button>
					
					<Image
						src={[
							'https://res.cloudinary.com/dkfptto8m/image/upload/v1558100238/Mongodb%20hackathon%20project/Playstore.ico',
						]}
					/>

					<Text>Download Android</Text>
				</Button>

				<Button>
					<Image
						src={[
							'https://res.cloudinary.com/dkfptto8m/image/upload/v1558100238/Mongodb%20hackathon%20project/applestore.ico',
						]}
					/>

					<Text> Download iOS </Text>
				</Button>
			</Buttons>
		</Div>
	);
}
