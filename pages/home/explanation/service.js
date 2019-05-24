import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../media_style';

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
	 background : #F4F7F8;
`;

const Next = styled.p`
	${media.tablet`
				font-size: 1.4em
			`}
	${media.phone`
			font-size: 1.2em
		`}
		font-size: 1.5em
`;

const Page = styled.p`
	color: grey;
	${media.tablet`
    font-size: 1.1em
`}
	${media.phone`
font-size: 1em
`}
&:hover {
		color: black;
	}
	font-size: 1.2em;
`;

export default function service() {
	return (
		<Container>
            <p> USAGE </p>

			<Link href="../service/service">
				<Contain>
					<Next>
						<a>
							{' '}
							Learn More: <b> Service Usage</b>{' '}
						</a>
					</Next>
					<Page>
						<a> Usage , Features , Platforms > </a>
					</Page>
				</Contain>
			</Link>
		</Container>
	);
}
