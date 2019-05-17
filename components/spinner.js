import React from 'react';
import styled from 'styled-components';
// First way to import
import { PropagateLoader } from 'react-spinners';

class Spinner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	render() {
		const Spinner = styled(PropagateLoader)`
			text-align: center;
		`;
		return <Spinner sizeUPropagateLoadernit={'px'} size={10} color={'#123abc'} loading={this.state.loading} />;
	}
}
export default Spinner;
