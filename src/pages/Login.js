import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import API from "../utils/API"


class athleteAccount extends Component {
    state = {
        email: "",
        password: "",
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        let newAccount = {
            email: this.state.email,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName: this.state.lastName,
        }
        API.(newAccount);
    };

}