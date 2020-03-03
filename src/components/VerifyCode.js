import React, {Component} from "react";
import axios from "axios";

class VerifyCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errormsg: '',
            email: '',
            code: '',
            password: '',
            password2: ''
        }

        this.handleCredChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.onSubmit = e => {
            e.preventDefault();
            if (!(this.state.password === this.state.password2)){
                this.setState({
                    errormsg: "Password must match"
                });
            } else {
                axios.post("/api/auth/verify-code/", {"email": this.state.email, 
                "verify_code": this.state.code, "password": this.state.password}, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    localStorage.setItem("verify_code", "")
                    this.setState({
                        errormsg: ''
                    })
                    window.location.href="/";
                }).catch(err => {
                    this.setState({
                        errormsg: "Wrong credentials used."
                    })
                });
            }
        }

    }
    

    render() {
        return(
        <div className="App-header">
        <h3> B A S A I </h3>
        <form id="home-form">
            <div className="form-group">
                <label for="email">Email:</label>
                <input onChange={this.handleCredChange} type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
                <label for="code">Reset Code:</label>
                <input onChange={this.handleCredChange} type="text" id="code" name="code" className="form-control" />
            </div>
            <div className="form-group">
                <label for="password">New Password:</label>
                <input onChange={this.handleCredChange} type="password" id="password" name="password" className="form-control" />
            </div>
            <div className="form-group">
                <label for="password2">Confirm Password:</label>
                <input onChange={this.handleCredChange} type="password" id="password2" name="password2" className="form-control" />
            </div>
            <button onClick={this.onSubmit} className="primarybtn btn btn-primary form-control">Reset Password</button>
            <p className="ca-text"> <a href="/">Go Back</a></p>
            <p>{ this.state.errormsg }</p>
        </form>
    </div>
    )
    }
}

export default VerifyCode;