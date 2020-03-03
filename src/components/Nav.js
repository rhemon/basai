import React, { Component } from "react";
import axios from "axios";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.logOut = e => {
            e.preventDefault();
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + localStorage.getItem("token")
                }
            };  
            axios.get("/api/auth/logout/?token=" + localStorage.getItem("token")).then(res => {
                localStorage.setItem("token", "");
                localStorage.setItem("isAuth", "");
                window.location.reload();
            }).catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">BASAI</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/jobs">Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={this.logOut}>Log out</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;