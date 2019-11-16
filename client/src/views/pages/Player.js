import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../../components/Form";
// import { Input, FormBtn, DropDown } from "../../components/Form";
import API from "../../utils/API"

// const emptySkills = []

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

    const allSkills = [
      "Size",
      "Accuracy",
      "Arm Strength",
      "Release",
      "Throw on the Run",
      "Poise",
      "Pocket Presence",
      "Decision Making",
      "Touch",
      "Instinct",
      "Footwork",
      'Elusiveness',
      'Speed',
      'Agility',
      'Vision',
      'Power',
      'Tackle Breaking',
      'Awareness',
      'Catching',
      'Acceleration',
      'Catch',
      'Catch in Traffic',
      'Route Running',
      'Frame',
      'Pass Block',
      'Run Block',
      'Athleticism',
      'Strength',
      'Quickness',
      'Blocking',
      'Point of Attack',
      'First Step',
      'Explosiveness',
      'Pursuit',
      'Tackle',
      'Play Recognition',
      'Reaction Time',
      'Coverage',
      'Ball Skills',
      'Instincts'
    ];

    const skillsByPosition = {
      proStyleQB: [
        "Size", "Accuracy", "Arm Strength", "Release", "Throw on the Run", "Poise", "Pocket Presence", "Decision Making", "Touch", "Instinct", "Footwork"
      ]
      ,
      dualThreatQB: [
        "Size", "Accuracy", "Arm Strength", "Release", "Throw on the Run", "Poise", "Pocket Presence", "Decision Making", "Elusiveness"
      ],
      runningBack: [
        "Size", "Speed", "Agility", "Vision", "Elusiveness", "Power", "Tackle Breaking", "Awareness", "Catching"
      ],
      wideReceiver: [
        "Size", "Speed", "Agility", "Acceleration", "Release", "Catch", "Catch in Traffic", "Route Running", "Awareness"
      ],
      offensiveTackle: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
      ],
      tightEnd: [
        "Size", "Speed", "Release", "Route Running", "Catch", "Catch in Traffic", "Blocking", "Athleticism"
      ],
      offensiveGuard: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
      ],
      center: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
      ],
      defensiveTackle: [
        "Size", "Strength", "Point of Attack", "First Step", "Explosiveness", "Athleticism", "Pursuit", "Tackle"
      ],
      defensiveEnd: [
        "Size", "Speed", "Point of Attack", "Frame", "Athleticism", "Strength", "Tackle", "First Step", "Play Recognition", "Pursuit"
      ],
      outsideLinebacker: [
        "Size", "Speed", "Tackle", "Play Recognition", "Athleticism", "Power", "Reaction Time"
      ],
      insideLinebacker: [
        "Size", "Speed", "Tackle", "Play Recognition", "Athleticism", "Power", "Reaction Time"
      ],
      cornerback: [
        "Size", "Speed", "Athleticism", "Coverage", "Ball Skills", "Instincts", "Pursuit", "Tackle"
      ],
      safety: [
        "Size", "Speed", "Athleticism", "Coverage", "Ball Skills", "Instincts", "Pursuit", "Tackle"
      ],
      kicker: [
        "add later"
      ]
    }

    function SkillSet (name, points) {
      this.name = name;
      this.points = points;
    }
    let currentPosition = this.state.position;
    let skillsNeeded = [];
    for (var i = 0; i < skillsByPosition[currentPosition].length; i++) {
      for (var j = 0; j < allSkills.length; j++) {
        if (skillsByPosition[currentPosition][i] === allSkills[j]) {
          const po = 5
          const skill = new SkillSet(allSkills[j], po)
          skillsNeeded.push(skill)
        }
      }
    }

    let newPlayer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: {
        name: this.state.position,
        skills: skillsNeeded
      },
      height: this.state.height,
      weight: this.state.weight,
      highschool: this.state.highschool,
      class: this.state.class,
      film: this.state.film
    }
    console.log(newPlayer)

    API.savePlayer(newPlayer)
      .then(res => { this.getPlayers(); console.log(res.data) })
      .catch(err => console.log(err));

    this.setState({
      firstName: "",
      lastName: "",
      position: "",
      height: "",
      weight: "",
      highschool: "",
      class: "",
      film: ""
    });

    alert("you've been added!")
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
              {/* <DropDown
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="Position"
              /> */}
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
              <Input
                value={this.state.film}
                onChange={this.handleInputChange}
                name="film"
                placeholder="Film"
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
