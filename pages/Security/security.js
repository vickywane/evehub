import React from 'react'
import Nav from '../../components/nav'
import Img from 'react-image';
import styled from 'styled-components'

const Banner = styled(Img)`
	width: 100%;
	height: 370px;
`;

export default function security() {
  return (
    <div>
      <Nav />
      <Banner
      class="d-block w-100"
      src={'https://res.cloudinary.com/dkfptto8m/image/upload/v1557951919/Mongodb%20hackathon%20project/security.jpg'}
      alt="First slide"
      unloader = {<p> Not found</p>}
    />

      <p>  Security </p>
    </div>
  )
}
