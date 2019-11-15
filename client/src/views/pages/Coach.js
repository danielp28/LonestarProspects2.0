import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API"
// import ProfilePage from "./ProfilePage";

class Player extends Component {
  // Initialize this.state.searched as an empty array
  state = {
    searched: [],
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

    API.getPlayers()
      .then(res => {
        let results = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].firstName === this.state.firstName && res.data[i].lastName === this.state.lastName) {
            console.log(res.data[i])
            results.push(res.data[i])
          }
          results.map(result => {
            result = {
              firstName: result.firstName,
              lastName: result.lastName,
              position: {
                name: result.position.name,
                skills: result.position.name
              },
              height: result.height,
              weight: result.weight,
              highschool: result.highschool,
              class: result.class,
              film: result.film
            }
            return result;
          })

          this.setState({ searched: results })

          console.log(this.state.searched)
        }
      })
      .catch(err => console.log(err));;


    this.setState({
      firstName: "",
      lastName: "",
      position: "",
      highschool: "",
      class: "",
      redir: true
    });

  };

  render() {
    return (
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
                Search Players
              </FormBtn>
            </form>
            {this.displayData}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.searched.length ? (
              <List>
                {this.state.searched.map(player => (
                  <ListItem>
                    <a href={"/players/" + player._id}>
                    <strong>
                      {player.firstName} {player.lastName} - {player.position.name}
                    </strong>
                    </a>
                    {/* <SaveBtn onClick={this.saveThisBook} /> */}
                    <br></br>
                    <div className="row">
                      <Col size="md-2">
                        {/* <img src={player.image} alt={player.title}></img> */}
                        <br></br>
                      </Col>
                      <Col size="md-9">
                        <a href={player.film}>Link to book info</a>
                      </Col>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Player;
