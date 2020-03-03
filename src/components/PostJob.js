import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class PostJob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: '',
            description: '',
            annual_salary: '',
            unauthorized: false
        };
        const {id} = this.props.match.params;
        if (!(typeof id === "undefined")) {
            axios.get("/api/job/details/?id=" + id + "&token="+localStorage.getItem("token")).then(res => {
                this.setState({
                    title: res.data.title,
                    company: res.data.company,
                    description: res.data.description,
                    annual_salary: res.data.annual_salary,
                    unauthorized: !res.data.writeauth
                });
            })
        }

        this.handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        this.submitJob = e => {
            e.preventDefault();
            if (typeof id === "undefined") {
                axios.post("/api/job/new/", {
                    "title": this.state.title,
                    "description": this.state.description,
                    "company": this.state.company,
                    "annual_salary": this.state.annual_salary,
                    "token": localStorage.getItem("token")
                }, {headers: {"Content-Type": "application/json"}}).then(res => {
                    window.location.href="/jobs"
                }).catch(err => {
                    console.log(err);
                });
            } else {
                axios.post("/api/job/details/?id="+ id, {
                    "title": this.state.title,
                    "description": this.state.description,
                    "company": this.state.company,
                    "annual_salary": this.state.annual_salary,
                    "token": localStorage.getItem("token")
                }, {headers: {"Content-Type": "application/json"}}).then(res => {
                    window.location.href="/jobs"
                }).catch(err => {
                    console.log("Unauthorized attempt to change details");
                });
            }
        }

    }

    render() {
        if (!(localStorage.getItem("isAuth") === "true")) {
            return (
                <Redirect to="/" />
            )
        }
        if (this.state.unauthorized) {
            return (
                <main>
                    <Nav />
                    <br/>
                    <div class="container">
                        <h3> Page not found </h3>
                    </div>
                </main>
            )
        }
        return(
            <main>
                <Nav />
                <div class="container">
                    <br/>
                    <h3>Job Details</h3>
                    <form onSubmit={this.submitJob}>
                        <div class="form-group">
                            <label for="title">Job Title:</label>
                            <input type="text" onChange={this.handleChange} value={this.state.title} id="title" name="title" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="company">Company:</label>
                            <input type="text" onChange={this.handleChange} value={this.state.company} id="company" name="company" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="description">Job Description:</label>
                            <textarea type="text" onChange={this.handleChange} value={this.state.description} id="description" name="description" className="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="annual_salary">Approximate Annual Salary:</label>
                            <input type="number" onChange={this.handleChange} value={this.state.annual_salary} id="annual_salary" name="annual_salary" className="form-control" />
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Save" className="primarybtn btn btn-primary form-control" />
                        </div>
                    </form>
                </div>

            </main>
        )
    }
}

export default PostJob;