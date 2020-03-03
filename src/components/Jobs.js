import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs : []
        }
        axios.get("/api/job/all/").then(res => {
            this.setState({
                jobs: res.data.jobs
            })
        })
    }

    render() {
        if (!(localStorage.getItem("isAuth") === "true")) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <main>
                <Nav />
                <br/>
                <div className="container">
                {this.state.jobs.length > 0 ? 
                <div>
                {this.state.jobs.map((job) => 
                    <div><a className="job-item" href={"/job/" + job.id}> 
                        <p><h3>{ job.title }</h3></p>
                        <p><h5>@ { job.company }</h5></p>
                        <p>Approximate Salary: { job.annual_salary }</p>
                    </a><br/><br/></div>
                )} 
                </div> : 
                <div className="row">
                    <p>Currently, there are no active job post.</p>
                </div>
                }
            </div>
            </main>
            
        )
    }
}

export default Jobs;