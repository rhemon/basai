import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withGlobalState } from "react-globally";
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'errormsg': ''
        };
        this.handleCredChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        this.onSubmit = e => {
            e.preventDefault();
            console.log(this.state.email);
            console.log(this.state.password);
            axios.post("/api/auth/login/", {"username":this.state.email, "password":this.state.password}, config)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isAuth', 'true');
                this.setState({
                    errormsg: ''
                })
                window.location.reload();
            }).catch(err => {
                this.setState({
                    errormsg: "Wrong credentials."
                })
            })
        }
    }
    

    render() {
        if (localStorage.getItem("isAuth") === "true") {
            return (
                <Redirect to="/profile" />
            )
        }
        return (
            <div className="App-header">
                <h3> B A S A I </h3>
                <form id="home-form" className="form">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input onChange={this.handleCredChange} type="email" id="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input onChange={this.handleCredChange} type="password" id="password" name="password" className="form-control" />
                    </div>
                    <button onClick={this.onSubmit} className="primarybtn btn btn-primary form-control">Log In</button>
                    <p className="ca-text">No Account ? <a href="/signup">Sign Up</a></p>
                    <p>{ this.state.errormsg }</p>
                </form>
            </div>
        )
    }
}

export default withGlobalState(Login);