import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Player extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Welcome to Lonestar Prospects</h1>
                            <h3>Are you a coach or a recruit?</h3>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                    <a href="/coaches"><h1>Coach</h1></a>
                    </Col>
                    <Col size="md-6">
                    <a href="/players"><h1>Recruit</h1></a>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Player;
