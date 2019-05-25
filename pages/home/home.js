import React, { Component, lazy, Suspense } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../media_style';
import Img from 'react-image';

import Spinner from '../../components/spinner';
import Update from '.././updates/update';
import Blog from '.././updates/blog';
import Message from './message';

import Service from './explanation/service';
import Benefits from './explanation/benefits';
import Security from './explanation/security';

export default class Home extends Component {
	render() {
		const Text = styled.p`
			${media.tablet`
			padding-left: 50px
			padding-right: 50px
			font-size: 1.3em
			`}
			${media.phone`
			padding-left: 20px
			padding-right: 20px
			font-size: 1.1em
			`}
			font-size: 1.3em
		`;

		const Image = styled(Img)`
			width: 100%;
			text-align: center;
		`;

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

		const Next = styled.p`
			${media.tablet`
		   font-size: 1.4em
	   `}
			${media.phone`
	   font-size: 1.2em
   `}
   font-size: 1.5em
		`;

		const Div = styled.div`
			${media.desktop`
				padding-left : 50px
				padding-right : 50px
			`};
			${media.phone`
			padding-left : 5px
			padding-right : 5px
		`};
			${media.tablet`
			padding-left : 5px
			`}
			padding-top : 1%
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

		return (
			<div>
				<br />
				<Text>
					EvoHub aims to provide a proper Electric Vehicle Management Infastructure that would connect Private
					Chargers or Public Charging Station Owners and Technicians with Electric Vehicle Owners seamlessly.
				</Text>
				<div>
					<Benefits />
					<Service />
					<Security />
				</div>
				<hr />
				<Text>
					Inorder to make the service more useful to our end users, Payments gateways are intergrated which
					require credit cards and sensitive data inorder to make necessary payements relating to the service
					.
					<br /> During a succesful synchronization process between the EvoHub App and an Electric Vehicle ,
					data is exposed between the two parties and this has the potential create alot of security risks if
					which not well handled could lead to a leak of credentials . <br /> We are aware of this dangers and
					preventive measures have been put in place to reduce these threat levels to a minimum.
				</Text>
				  
				<hr />
				<Text>
					{' '}
					EvoHub is a new service and we expect our users to have serveral questions in mind . We have put
					together lists of possible questions and their answers. Feel free to reach out to us if a question
					is not fully explained or well answered !{' '}
				</Text>
				<Link prefetch href="../faq/faq">
					<Contain>
						<Next>
							<a>
								{' '}
								Learn More: <b> F.A.Q </b>{' '}
							</a>
						</Next>
						<Page>
							<a> Frequently Asked Questions > </a>
						</Page>
					</Contain>
				</Link>{' '}
				<hr />
				<Blog />
				<div>
					<Update />
				</div>
				 
				<br /> <br />
			</div>
		);
	}
}
