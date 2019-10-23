import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing.js";
import Register from "./containers/Register.js";
import Login from "./containers/Login.js";
import Profile from "./containers/Profile.js";
import Rating from "./components/Rating.js";
import Help from "./components/Help.js";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <div className="container">
            <Route path="/rating" component={Rating} />
            <Route path="/help" component={Help} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            </div>
        </Switch>
    );
}


