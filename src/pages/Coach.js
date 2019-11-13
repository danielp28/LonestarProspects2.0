import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API"

class Player extends Component {
    // Initialize this.state.books as an empty array
    state = {
        firstName: "",
        lastName: "",
        position: "",
        highschool: "",
        class: "",

    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        let playerSearch = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            position: this.state.position,
            highschool: this.state.highschool,
            class: this.state.class,

        }
        API.getPlayer(playerSearch);
    };


    render() {
        return(
            <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for Players</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="firstName"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="lastName"
              />
              <Input
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="position"
              />
              <Input
                value={this.state.highschool}
                onChange={this.handleInputChange}
                name="highschool"
                placeholder="highschool"
              />
              <Input
                value={this.state.class}
                onChange={this.handleInputChange}
                name="class"
                placeholder="class"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Player
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Player;
