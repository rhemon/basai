import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import PostJob from "./components/PostJob";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Applicants from "./components/Applicants";
import ForgotPass from "./components/ForgotPass";
import VerifyCode from "./components/VerifyCode";

class BasaiRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/job/edit/:id" component={PostJob} />
                <Route exact path="/job/new" component={PostJob} />
                <Route exact path="/jobs" component={Jobs} />
                <Route exact path="/applicants/:id" component={Applicants} />
                <Route exact path="/job/:id" component={Job} />
                <Route exact path="/forgot-pass" component={ForgotPass} />
                <Route exact path="/verify-code" component={VerifyCode} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default BasaiRouter;