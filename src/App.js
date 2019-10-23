import React, { Component } from 'react';
import { Card } from './components/card.js';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
//import NavBar from './NavBar/NavBar';
import NavigatorBar from "./containers/NavigatorBar";
import Routes from "./Routes";
import uuid from 'uuid/v1'
import './components/Rating.css';

class App extends Component {
   render() {
        return (
            <div className="App">
                <NavigatorBar />
                <Routes />
            </div>
        );
    }
}

export default App;
