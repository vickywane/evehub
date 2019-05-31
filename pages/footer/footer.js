import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import styled from "styled-components";

export default () => (
  <>
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0em", backgroundColor: "#111111" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as="h3" content="About" />
              <List link inverted>
                <List.Item as="a">Getting Started </List.Item>
                <List.Item as="a">Guides</List.Item>
                <List.Item as="a">Security </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h3" content="Social" />
              <List link inverted>
                <List.Item as="a"> Gmail </List.Item>
                <List.Item as="a">Twitter </List.Item>
                <List.Item as="a"> Medium </List.Item>
                <List.Item as="a"> Facebook </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h3" content="More " />
              <List link inverted>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Announcement</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <div>
        <h5 style={{ textAlign: "center", marginTop: "2em" }}>
          {" "}
          Copyright © {new Date().getFullYear()} . All rights reserved .
        </h5>
      </div>
    </Segment>
  </>
);
