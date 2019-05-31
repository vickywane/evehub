import React from "react";
import styled from "styled-components";
import { media } from ".././media_style";
import Flex from "styled-flex-component";

const Header = styled.h4`
  text-align: center;
`;

const Div = styled.div`
  background-color: #141e64;
  color: white;
  width: 70%;
  margin-left: 10%;
  border-radius: 5px;
  height: 60vh;
  text-align: center;
`;

export default function update() {
  return (
    <Div>
      <Header> Blog </Header>
    </Div>
  );
}
