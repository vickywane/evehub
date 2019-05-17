import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import Img from 'react-image';

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

		const Button = styled.button`
			background: transparent;
			border-radius: 7px;
			border: 1.5px solid palevioletred;
			color: palevioletred;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 17px;
		`;

		const Div = styled.div`
			margin-top: 10px;
		`;

		const Sign = styled.button`
			background: transparent;
			border-radius: 5px;
			border: 1.5px solid palevioletred;
			color: palevioletred;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 17px;
		`;

		const Image = styled(Img)`
			width: 7%;
			height: 25px;
		`;

 
		return (
			<AppBar className={appBarClasses}>
				<Div>
					<nav>
						<ul>
							<div>
								<li>
									<Image
										src={ "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"}
									/>
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
								font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
									sans-serif;
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
								color: white;
								text-decoration: none;
								font-size: 20px;
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
