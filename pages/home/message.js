import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '.././media_style';
import Flex from 'styled-flex-component';
import { Grid } from 'semantic-ui-react';

export default class reset extends Component {
	state = {
		sent: false,
	};

	render() {
		const Input = styled.input`
      width : 50%
      margin-left : 10%
      height  : 70px
      border-radius : 5px  
    `;

		const Button = styled.div`
			background: transparent;
			text-align: center
			border-radius: 7px;
			border: 1px solid #0078ff;
			color: #0e2f5a;
			margin: 0 1em;
			height: 50px;
			width: 40%;
			padding: 0.25em 1em;
			padding-top: 15px;
			font-size: 1em;
			&:hover {
				color: white;
				background: #0078ff;
				cursor: pointer;
			}
		`;

		const Press = () => {
			this.setState({ sent: true });
		};

		if (this.state.sent === false) {
			return (
				<Flex justifyCenter>
					<form name="Feedback" style={{ textAlign: 'center' }}>
						<h4> Contact Us </h4>
						<p style={{ color: 'grey' }}>{" We'll get your message and get back to you. "} </p>

						<Grid stackable columns="equal">
							<Grid.Column>
								<Input
									placeholder={'Name '}
									type="text"
									name="name"
									style={{
										height: '45px',
										marginRight: '20px',
										paddingLeft: '10px',
										borderRadius: '3px',
										borderWidth: '0.5px',
										width: '330px',
										borderColor: 'blue',
									}}
								/>
							</Grid.Column>
							<Grid.Column>
								<Input
									placeholder={'Email'}
									type="email"
									name="email"
									style={{
										height: '45px',
										marginRight: '20px',
										paddingLeft: '10px',
										borderRadius: '3px',
										borderWidth: '0.5px',
										width: '330px',
										borderColor: 'blue',
									}}
								/>
							</Grid.Column>
						</Grid>

						<textarea
							type="text"
							name="message"
							placeholder={'Leave a message'}
							style={{
								height: '100px',
								marginTop: '20px',
								paddingLeft: '10px',
								paddingTop: '30px',
								borderRadius: '3px',
								borderWidth: '0.5px',
								width: '330px',
								borderColor: 'blue',
								marginRight: '20px',
							}}
						/>

						<div style={{ marginLeft: '25%', marginTop: '5%' }}>
							<Button
								onClick={() => {
									Press();
								}}
							>
								Send Message
							</Button>{' '}
						</div>
					</form>
				</Flex>
			);
		} else {
			return (
				<div style={{ textAlign: 'center', marginTop: '5%' , marginBottom: '2.5%' }}>
					<Flex column >
						<h5> Message Sent </h5>
						<h5> A response would be sent via mail </h5>
					</Flex>
				</div>
			);
		}
	}
}
