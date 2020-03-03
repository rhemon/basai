import React, {Component} from "react";
import axios from "axios";

class ForgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errormsg: '',
            email: ''
        }

        this.handleCredChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.onSubmit = e => {
            e.preventDefault();
            axios.post("/api/auth/forgot-pass/", {"email": this.state.email}, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                localStorage.setItem("verify_code", res.data.verify_code)
                this.setState({
                    errormsg: ''
                })
                window.location.href="/verify-code";
            }).catch(err => {
                this.setState({
                    errormsg: "User with this email does not exist."
                })
            });
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
            <button onClick={this.onSubmit} className="primarybtn btn btn-primary form-control">Send Reset Code</button>
            <p className="ca-text"> <a href="/">Go Back</a></p>
            <p>{ this.state.errormsg }</p>
        </form>
    </div>
    )
    }
}

export default ForgotPass;