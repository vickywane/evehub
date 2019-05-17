import React, { Component, Suspense } from 'react';
import styled from 'styled-components';

export default class Image extends Component {
	render() {
		const Image = styled.img`
		width: 100%
		`
		return (
				<Image
					src={['https://res.cloudinary.com/dkfptto8m/image/upload/v1556654670/img.jpg']}
				/>
		);
	}
}
