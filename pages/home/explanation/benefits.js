import Link from "next/link";
import React from "react";
import Img from "react-image";
import { Grid, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { media } from "../../media_style";
import posed from "react-pose";
import { Carousel } from "react-bootstrap";

const Banner = styled(Img)`
  width: 45%;
  height: 40vh;
`;

const Container = styled.div`
  height: 70vh;
  background: #0066f5;
  ${media.medium`
	height: 80vh;
	`}
`;

const Title = styled.p`
  font-size: 0.75em;
  padding-top: 2%;
  padding-left: 2%;
  color: palevioletred;
`;

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    paddingTop: "15px",
    float: "right",
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

const Text = styled.h5`
	padding-left: 3%;
	color: white;
	${media.medium`
	font-size : 1.1em
	padding-left: 2.7%;
	`}
	${media.tablet`
	font-size : 1.3em
	`} 	
	${media.desktop`
	font-size : 1.5em
	`}
`;

const Feature = styled.p`
	font-weight: bold
	font-size : 1.5em
	${media.tablet`
	font-size : 1.5em
	`}
	${media.phone`
	font-size : 1em
	`} 
	${media.medium`
	font-size : 1.2em
	`} 
	${media.desktop`
	font-size : 1.7em
	`}
`;

const Explain = styled.p`
	font-weight: 'bold'
	font-size : 1.5em
	${media.tablet`
	font-size : 1.2em
	`}
	${media.desktop`
	font-size : 1.3em
	`}
	${media.medium`
	font-size : 1em
	`} 

`;

const Button = styled.div`
  margin-top: 4%;
  margin-right: 5%;
  text-align: right;
`;

const StrtButton = styled(Box)`
  background: #0e2f5a;
  text-align: center;
  border-radius: 4px;
  height: 40px;
  width: 17%;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  ${media.medium`
	height: 57px;
	width: 35%;
	`}
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Benefits = styled.div`
  width: 50% @media (max-width: 770px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    text-align: center;
  }
`;

const Div = styled.div`
  @media (max-width: 770px) {
    margin-left: 10%;
    margin-right: 20%;
  }
  @media (max-width: 450px) {
    margin-left: 10%;
    margin-right: 20%;
  }
`;

export default function service() {
  return (
    <Container>
      <Title> FEATURES </Title>

      <Carousel indicators={false} controls={false} pauseOnHover={false}>
        <Carousel.Item>
          <Text
            style={{ margÌinLeft: "5%", fontWeight: "bold", marginTop: "5%" }}
          >
            For Electric Vehicle Owners ;
          </Text>
          <Div>
            <Grid
              stackable
              celled="internally"
              columns="equal"
              style={{ marginLeft: "5%", marginTop: "5%", color: "white" }}
            >
              <Grid.Row>
                <Grid.Column>
                  <div>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />
                      <Benefits>
                        <Feature> Telematics </Feature>
                        <Explain>
                          {" "}
                          Vehicle statistics all in your mobile device{" "}
                        </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div style={{}}>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />

                      <Benefits>
                        <Feature> GeoSpatial Query</Feature>
                        <Explain>
                          {" "}
                          By default all data is provided based on user location{" "}
                        </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div style={{ marginRight: "5%" }}>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />

                      <Benefits>
                        <Feature> Payments</Feature>
                        <Explain>Pay for your charge </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Div>
        </Carousel.Item>
        <Carousel.Item>
          <Text
            style={{ marginLeft: "5%", fontWeight: "bold", marginTop: "5%" }}
          >
            For Charging Station Owners ;
          </Text>

          <Div>
            <Grid
              stackable
              celled="internally"
              columns="equal"
              style={{ marginLeft: "5%", marginTop: "5%", color: "white" }}
            >
              <Grid.Row>
                <Grid.Column>
                  <div>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />
                      <Benefits>
                        <Feature> Telematics </Feature>
                        <Explain>
                          {" "}
                          Vehicle statistics all in your mobile device{" "}
                        </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div style={{}}>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />

                      <Benefits>
                        <Feature> GeoSpatial Query</Feature>
                        <Explain>
                          {" "}
                          By default all data is provided based on user location{" "}
                        </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div style={{ marginRight: "5%" }}>
                    <Flex column>
                      <Icon name="facebook" size="big" color="red" />

                      <Benefits>
                        <Feature> Payments</Feature>
                        <Explain>Pay for your charge </Explain>
                      </Benefits>
                    </Flex>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Div>
        </Carousel.Item>
      </Carousel>
      <Link href="../service/service">
        <Button>
          <StrtButton> Learn More </StrtButton>
        </Button>
      </Link>
    </Container>
  );
}
