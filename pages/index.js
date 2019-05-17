import React from 'react';
import Head from '../components/head';
import All from '../components/banner/all';
import Home from './home/home';
import Footer from './footer/footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Head title="EvoHub" />

				<All />
				<Home />

				<Footer />
			</div>
		);
	}
}

const Index = () => <App />;

export default Index;
