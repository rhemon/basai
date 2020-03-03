import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PostedJobList from "./PostedJobList";
import Nav from "./Nav";
import { Redirect } from "react-router-dom";
import { withGlobalState } from "react-globally";

class Profile extends Component {

    constructor(props) {
        super(props);
        console.log(localStorage.getItem('isAuth'))
        console.log(localStorage.getItem('token'))
    }

    render() {
        if (!(localStorage.getItem('isAuth') === "true")) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <br/>
                            <UserDetails />
                        </div>
                        <div className="col-md-6">
                            <PostedJobList />
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }

}

export default withGlobalState(Profile);