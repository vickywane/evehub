import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import Img from 'react-image';
import Flex from 'styled-flex-component';



import { media } from '../../pages/media_style';
//css file
import headerStyle from './headerStyle';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.headerColorChange = this.headerColorChange.bind(this);
	}

	componentDidMount() {
		if (this.props.changeColorOnScroll) {
			window.addEventListener('scroll', this.headerColorChange);
		}
	}

	headerColorChange() {
		const { classes, color, changeColorOnScroll } = this.props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
			document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
			document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
		}
	}
	componentWillUnmount() {
		if (this.props.changeColorOnScroll) {
			window.removeEventListener('scroll', this.headerColorChange);
		}
	}
	render() {
		const { classes, color, fixed, absolute } = this.props;
		const appBarClasses = classNames({
			[classes.appBar]: true,
			[classes[color]]: color,
			[classes.absolute]: absolute,
			[classes.fixed]: fixed,
		});

		const Div = styled.div`
		height : 25px
		padding -top: 10px;
		`;
		const A = styled.a`
			${media.tablet`
			font-size: 1.3em
		`}
			${media.phone`
			font-size: 1em
		`}
			color: #0E2F5A;
			text-decoration: none;
			font-size: 20px;
			height: 10%;
		`;

		const Image = styled(Img)`
			width: 7%;
			height: 25px;
		`;

		const NavLink = styled.div`
			margin-left: 4%;
			margin-right: 4%;
		`;

		const NameDiv = styled.div`
			margin-left: 4%;
		`;

	 
		return (
			<AppBar className={appBarClasses}>
				<Div>
					<nav class="shadow p-5 mb-7 bg-white rounded">
						<Flex justifyAround>
							<NameDiv>
								<Flex>
									<Image
										src={
											'https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
										}
									/>
									<Link prefetch href="/">
										<A>EvoHub</A>
									</Link>
								</Flex>
							</NameDiv>

							<Flex>
									<NavLink>
										<a> Login </a>
									</NavLink>
									<NavLink>
										<a> Team </a>
									</NavLink>
									<NavLink>
										<a> FAQ </a>
									</NavLink>
									<NavLink>
										<a> Usage </a>
									</NavLink>
							</Flex>
						</Flex>

						<style jsx>{`
							:global(body) {
								margin: 0;
								font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
									sans-serif;
							}
							nav {
								text-align: center;
							}

							li {
								display: flex;
								padding: 10px 12px;
							}
						`}</style>
					</nav>
				</Div>
			</AppBar>
		);
	}
}

Header.defaultProp = {
	color: 'white',
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// this.props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// this.props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			'primary',
			'info',
			'success',
			'warning',
			'danger',
			'transparent',
			'white',
			'rose',
			'dark',
		]).isRequired,
	}),
};

export default withStyles(headerStyle)(Header);
