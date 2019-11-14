import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API"

class Player extends Component {
  // Initialize this.state.books as an empty array
  state = {
    players: [],
    firstName: "",
    lastName: "",
    position: "",
    height: "",
    weight: "",
    highschool: "",
    class: "",
    film: ""
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
    let newPlayer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      height: this.state.height,
      weight: this.state.weight,
      highschool: this.state.highschool,
      class: this.state.class,
      film: this.state.film
    }
    API.savePlayer(newPlayer)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Enter your Information</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="Position"
              />
              <Input
                value={this.state.height}
                onChange={this.handleInputChange}
                name="height"
                placeholder="Height"
              />
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight"
              />
              <Input
                value={this.state.highschool}
                onChange={this.handleInputChange}
                name="highschool"
                placeholder="High School"
              />
              <Input
                value={this.state.class}
                onChange={this.handleInputChange}
                name="class"
                placeholder="Class"
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
