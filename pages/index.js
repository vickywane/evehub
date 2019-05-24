import React from 'react';
import Head from '../components/head';
import All from '../components/banner/all';
import Banner from '../components/banner/banner';
import Home from './home/home';
import Footer from './footer/footer';
// import "semantic-ui-css/semantic.min.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<Head title="EvoHub" />

				<All />
				<Banner />
				<Home />

				<Footer />
			</div>
		);
	}
}

const Index = () => <App />;

export default Index;
