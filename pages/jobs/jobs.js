import React from 'react';
import Nav from '../../components/nav';
import Spinner from '../../components/spinner';
import styled from 'styled-components'

const Div = styled.div`
	text-align: center;
`;

export default function jobs() {
	return (
		<div>
			<Nav />

			<p> Jobs </p>
			<Div>
				<Spinner />
			</Div>
		</div>
	);
}
