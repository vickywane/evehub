import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '.././media_style';

export default class Home extends Component {
	render() {
		const Text = styled.p`
			font-size: 13px;
			text-align: center;
			color: black;
		`;

		const Div = styled.div`
			background: #000428;
			line-height: 1.15;
			height: 250px;
			width: 100%;
		`;

		const Button = styled.button`
			background: transparent;
			text-align: center;
			border-radius: 3px;
			height: 50px;
			width: 30%;
			border: 3px solid palevioletred;
			color: white;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 1.3em;
		`;
		const Ad = styled.p`
			${media.tablet`
			font-size: 1.4em
		`}
			${media.phone`
			font-size: 1.1em
		`}
		font-size: 1.6em
		`;

		const Career = styled.div`
			padding-top: 20px;
			padding-bottom: 35px;
			text-align: center;
		`;

		return (
			<Div>
				<Career>
					<Link href="../jobs/jobs">
						<Button>View Open Positions</Button>
					</Link>
					<hr /> <br />
				</Career>
				<Text> Testing</Text>
			</Div>
		);
	}
}
