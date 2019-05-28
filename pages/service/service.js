import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Button, Container, Header, Menu, Segment, Visibility } from 'semantic-ui-react';
import Footer from '../footer/footer';

export default () => (
	<div>
		<Head>
			<title>Service</title>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
		</Head>
		<Visibility>
			<Segment inverted textAlign="center" style={{ minHeight: 70, padding: '1em 0em' }} vertical>
				<Menu inverted pointing secondary size="large">
					<Menu.Item as="a">
						<Link href="/">Home </Link>
					</Menu.Item>
					<Menu.Item as="a" active>
						<Link href="/"> Service </Link>
					</Menu.Item>
					<Menu.Item as="a">
						<Link href="/">Usage </Link>
					</Menu.Item>
					<Menu.Item as="a">
						<Link href="/"> FAQ </Link>
					</Menu.Item>
					<Menu.Item position="right">
						<Button as="a" inverted>
							<Link href="/"> Log in </Link>
						</Button>
					</Menu.Item>
				</Menu>
			</Segment>
		</Visibility>
		<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
		<Footer />
	</div>
);
