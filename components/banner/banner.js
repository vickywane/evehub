import React from "react";
import styled from "styled-components";
import Img from "react-image";
import { media } from "../../pages/media_style";
import { Grid } from "semantic-ui-react";
import posed from "react-pose";

class banner extends React.Component {
  render() {
    const Banner = styled(Img)`
      width: 40vw;
      padding-right: 5%;
      height: 55vh;
      object-fit: "cover";
      @media (max-width: 800px min-width: 500px) {
        padding-right: 20%;
      }
      ${media.phone`
			height: 40vh;
			margin-left: 25%;
			text-align : center 
		`}
      ${media.medium`
		height: 40vh;
		margin-left: 35%;
		text-align : center 
	`}
    `;

    // testing media queries with this div ..... PHONE_SIZE NOT WORKING YET !!!!!!
    const Container = styled.div`
			margin-left: 5%;
			padding-top: 10%;
			margin-right: 15%;
			color: #323a56;
			${media.desktop`
				margin-left: 4%;
				padding-top: 2%;
				margin-right: 10%;
			`}
			${media.tablet`
				margin-left: 5%;
				margin-top: 5%;
				margin-right: 15%;
			`}
			${media.phone`
			margin-left: 7%;
			margin-top: 30%;
			margin-right: 15%;
			text-align : center 
		`}
			${media.medium`
			margin-top: 15%;
			margin-left: 2%;
			text-align : center 
			margin-right: 3%;

			`}
		`;

    const Title = styled.h3`
			width: 75%;
			font-weight: bold; 
			${media.desktop`
			width: 77%;
			font-weight: bold; 
			font-size: 2.5em; 
			`}
			${media.tablet`
			width: 90%
		`}
		${media.phone`
		font-size: 1.7em; 
		width: 100%;
	`}
		${media.medium`
			font-size: 2em; 
			width: 100%;
		`}
		`;

    const Description = styled.p`
			color: #0e2f5a;	
			${media.desktop`
			font-size: 1.2em; 
			`}
			${media.tablet`
			font-size: 1.1em; 
		`}
		${media.phone`
		font-size: 0.8em; 
	`}
		${media.medium`
		font-size: 1em; 
		`}
		`;

    const Box = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        paddingTop: "15px",
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 1.2,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
      },
      press: {
        scale: 1.1,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
      }
    });

    const Button = styled(Box)`
			background: #0748a8;
			text-align: center;
			border-radius: 5px;
			height: 64px;
			width: 42%;
			border: 0.5px solid palevioletred;
			color: white;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 0.95em;
			${media.phone`
			width: 35%;
			margin-top: 10%; 
			height: 55px;
			width: 37%;
			`}
			${media.medium`
				width: 55%;
				margin-top: 10%; 
				height: 50px;
				width: 65%;
			`} 
			${media.desktop`
			margin-top: 3%;
		`}
		`;

    const Btns = styled.div`
      ${media.phone`
		padding-left: 5%;
		`}
      ${media.medium`
		padding-left: 7%;
		`}
    `;

    const StrtButton = styled(Box)`
      background: #0078ff;
      text-align: center;
      border-radius: 5px;
      height: 64px;
      width: 42%;
      border: 1px solid palevioletred;
      color: white;
      margin: 0 1em;
      padding: 0.25em 1em;
      font-size: 0.87em;
      ${media.phone`
			width: 35%;
			margin-top: 1%;
			`}
      ${media.medium`
			height: 50px;
			width: 65%;
				margin-top: 1%;
			`}
    `;

    const Div = styled.div`
      width: 100%;
      padding-top: 7%;
      height: 70vh;
      background: #f0f0d0;
      max-width: 100%;
      @media (max-width: 770px) {
        height: 110vh;
      }
      @media (max-width: 450px) {
        height: 100vh;
      }
    `;

    return (
      <Div>
        <Grid stackable celled="internally" columns="equal">
          <Grid.Column>
            <Container>
              <Title> Digital charging system for electric vehicles. </Title>

              <Description>
                {" "}
                EvoHub is a digital system built to make catering for Electric
                Vehicles easier for Electric Vehicle Owners.{" "}
              </Description>
              <Btns>
                <StrtButton> Get Started </StrtButton>
                <Button> Learn More </Button>
              </Btns>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Banner
              unloader={<p> loading ... </p>}
              loader={<p> not loading ... </p>}
              src={[
                "https://res.cloudinary.com/dkfptto8m/image/upload/v1558649119/Mongodb%20hackathon%20project/phone1.png"
              ]}
            />
          </Grid.Column>
        </Grid>
      </Div>
    );
  }
}

export default banner;
