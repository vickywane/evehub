import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
	background: transparent;
	border-radius: 7px;
	border: 1.5px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size : 17px
`;

const Sign = styled.button`
	background: transparent;
	border-radius: 5px;
	border: 1.5px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size : 17px
`;

const Div = styled.div`
`;

const Nav = () => (
	<Div>
		<nav>
			<ul>
				<div>
					<li>
						<link rel="mask-icon" href="/static/thunder.png" color="#49B882" />
						<Link prefetch href="/">
							<a>EvoHub</a>
						</Link>
					</li>
				</div>

				<div>
					<Link prefetch href="/">
						<a>FAQ</a>
					</Link>

					<Button href="#">Login</Button>
					<Sign> Create Service </Sign>
				</div>
			</ul>

			<style jsx>{`
				:global(body) {
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
				}
				nav {
					text-align: center;
				}
				ul {
					display: flex;
					justify-content: space-between;
				}
				nav > ul {
					padding: 4px 16px;
				}
				li {
					display: flex;
					padding: 10px 12px;
				}
				a {
					color: #123abc;
					text-decoration: none;
					font-size: 17px;
				}
			`}</style>
		</nav>
	</Div>
);

export default Nav;
