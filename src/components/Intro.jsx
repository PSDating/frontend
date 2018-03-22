import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid, Header, Divider } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import logoImage from "../../img/logo.png";

const Intro = () => (
    <div className="intro-container">
        <div className="intro-header">
            <img className="logo-intro" src={logoImage} />
            <Header as="h3">Dating with your bank transactions</Header>
        </div>
        <div>
            <Button as={Link} to="/register" className="register-button fs-button" color='red'>Register</Button>
            <Button className="fs-button basic" color='red'>Login</Button>
        </div>
    </div>
)

Intro.propTypes = {}

export default Intro;
