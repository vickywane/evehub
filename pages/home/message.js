import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '.././media_style'


export default class reset extends Component {
	state = {
		sent: false,
	};

	render() {
		const Input = styled.input`
      width : 50%
      height  : 45px
      border-radius : 5px  
    `;

		const Sent = styled.div`
    width : 50%
    height  : 25vh
    text-align  : center
    background  : transparent
    border-radius : 5px  
    border: 2px solid palevioletred; 
    color: 2px blue; 
  `;

		const Contain = styled.div`
			text-align: center;
		`;

		const Icon = styled.div`
			background: transparent;
			border-radius: 2px;
			border: 2px solid palevioletred;
			color: palevioletred;
			margin: 0 1em;
			height: 30px;
			width: 10%;
			padding: 0.25em 1em;
			font-size: 1em;
		`;

		const Press = () => {
			this.setState({ sent: true });
		};

		//==================
		if (this.state.sent === false) {
			return (
				<div>
					<Contain>
						<Input />

						<Icon
							onClick={() => {
								Press();
							}}
						>
							SEND
						</Icon>
					</Contain>
				</div>
			);
		} else {
			return (
				<div>
					<Sent>
						<p> Feedback Sent </p>
					</Sent>
				</div>
			);
		}
	}
}
