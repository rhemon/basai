import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withGlobalState } from "react-globally";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'fname': '',
            'lname': '',
            'email': '',
            'phone': '',
            'password': '',
            'password2': '',
            'errormsg': '',
            'token': '',
            'isauth': false,
            'userid': ''
        };

        this.handleCredChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        this.onSubmit = e => {
            
            e.preventDefault();
            if (this.state.password === this.state.password2) {
                let config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                axios.post('/api/auth/signup/', 
                            {"username": this.state.email, 
                            "email": this.state.email,
                            "phone": this.state.phone, 
                            "first_name": this.state.fname, 
                            "last_name": this.state.lname, 
                            "password": this.state.password},
                            config).then(res => {
                    this.setState({
                        errormsg: ''
                    });
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('isAuth', "true");
                    window.location.reload();
                }).catch(err => {
                    this.setState({
                        errormsg: "User with email already exists"
                    })
                });
            } else {
                this.setState({
                    errormsg: "Passwords must match."
                })
            }
        }
    }
    

    render() {
        if ((localStorage.getItem("isAuth") === "true")) {
            return (
                <Redirect to="/profile" />
            )
        }
        return (
            <div className="App-header sign-up-page">
                <h3> B A S A I </h3>
                <form id="home-form">
                    <div className="form-group">
                        <label for="fname">First name:</label>
                        <input onChange={this.handleCredChange} type="text" id="fname" name="fname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="lname">Last name:</label>
                        <input onChange={this.handleCredChange} type="text" id="lname" name="lname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone:</label>
                        <input onChange={this.handleCredChange} type="text" id="phone" name="phone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input onChange={this.handleCredChange} type="email" id="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input onChange={this.handleCredChange} type="password" id="password" name="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="password2">Confirm Password:</label>
                        <input onChange={this.handleCredChange} type="password" id="password2" name="password2" className="form-control" />
                    </div>
                    <button onClick={this.onSubmit} className="primarybtn form-control btn btn-primary">Sign Up</button>
                    <p className="ca-text">Already have account ? <a href="/">Log in</a></p>

                    <p>{ this.state.errormsg }</p>
                </form>
            </div>
        )
    }
}

export default withGlobalState(Signup);