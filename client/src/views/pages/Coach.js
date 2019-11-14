import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API"
// import ProfilePage from "./ProfilePage";

class Player extends Component {
  // Initialize this.state.books as an empty array
  state = {
    firstName: "",
    lastName: "",
    position: "",
    highschool: "",
    class: "",
    redir: false
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
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].firstName === this.state.firstName && res.data[i].lastName === this.state.lastName) {
            // API.getPlayer(res.data[i]._id)
            // .then(
            // alert("do you want to visit " + res.data[i].firstName + " " + res.data[i].lastName + "'s page?")
            let path = "'/players/" + res.data[i]._id + "'"
            // let newButton = (<a href={path}> {res.data[i].firstName}, {res.data[i].lastName} </a>)
            // this.props.history.push("'" + path + "'");  
            console.log(path)  

            // )
          }
          // else {
          //   alert("that althele is not in our system")
          // }
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

  // redirector = () => {
    
  //   return <Redirect to={path} />       

  // }


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
      </Container>
    );
  }
}

export default Player;
