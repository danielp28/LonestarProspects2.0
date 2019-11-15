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
    
    this.setState({
      searched: []
    })

    API.getPlayers()
      .then(res => {
        let results = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].position.name === this.state.position) {
            // console.log(res.data[i])
            if (!results.includes(res.data[i])) {
              results.push(res.data[i])
            }
          }
          if (res.data[i].class == this.state.class) {
            if (!results.includes(res.data[i])) {
              results.push(res.data[i])
            }          
          }
          if (res.data[i].firstName === this.state.firstName || res.data[i].lastName === this.state.lastName) {
            if (!results.includes(res.data[i])) {
              results.push(res.data[i])
            }          
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

        }
        console.log(this.state.searched)

      })
      .catch(err => console.log(err));;


    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   position: "",
    //   highschool: "",
    //   class: "",
    // });

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
              <div className="form-group">
                <select
                  className="form-control custom-select position"
                  id="positionInput"
                  name="position"
                  onChange={this.handleInputChange}
                >
                  <option value="N/A">Position</option>
                  <option value="proStyleQB">proStyleQB</option>
                  <option value="dualThreatQB">dualThreatQB</option>
                  <option value="runningBack">runningBack</option>
                  <option value="wideReceiver">wideReceiver</option>
                  <option value="offensiveTackle">offensiveTackle</option>
                  <option value="tightEnd">tightEnd</option>
                  <option value="offensiveGuard">offensiveGuard</option>
                  <option value="center">center</option>
                  <option value="defensiveTackle">defensiveTackle</option>
                  <option value="defensiveEnd">defensiveEnd</option>
                  <option value="outsideLinebacker">outsideLinebacker</option>
                  <option value="insideLinebacker">insideLinebacker</option>
                  <option value="cornerback">cornerback</option>
                  <option value="safety">safety</option>
                  <option value="kicker">kicker</option>
                </select>
              </div>
              {/* <Input
                value={this.state.highschool}
                onChange={this.handleInputChange}
                name="highschool"
                placeholder="High School"
              /> */}
              <div className="form-group">
                <select
                  className="form-control custom-select class"
                  id="classInput"
                  name="class"
                  onChange={this.handleInputChange}
                >
                  <option value="N/A">Class</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
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
                  <ListItem key={player._id}>
                    <strong>
                      {player.firstName} {player.lastName}
                    </strong>

                    <Col size="md-2">
                      Position: {player.position.name}
                    </Col>
                    <Col size="md-2">
                      Class: {player.class}
                    </Col>
                    <Col size="md-2">
                      <a href={"/players/" + player._id}>
                        View player profile
                      </a>
                    </Col>
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
