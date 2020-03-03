import React, { Component } from "react";
import Apply from "./Apply";
import Nav from "./Nav";
import axios from "axios"; 
import { Redirect } from "react-router-dom";

class Job extends Component {
    constructor(props) {
        super(props);
        let { id } = this.props.match.params;
        this.state = {
            id: id,
            title: 'Full Stack Developer',
            description: 'The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want. The job detail is gonna be here. You can write it as long as you want.',
            annual_salary: '10000',
            company: 'Neritic Ltd.',
            applied: false
        }
        axios.get("/api/job/details/?id="+id+"&token="+localStorage.getItem("token")).then(res => {
            this.setState({
                title: res.data.title,
                description: res.data.description,
                annual_salary: res.data.annual_salary,
                company: res.data.company,
                applied: res.data.applied
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
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h3>{this.state.title}</h3>
                            <h5>@ {this.state.company }</h5>
                            <h6>Approximate Salary: {this.state.annual_salary }</h6>
                            <p class="description">{this.state.description}</p>
                        </div>
                        <div class="col-md-4">
                            <h3>Apply to this job</h3>
                            <br/>
                            {!this.state.applied ? <Apply pk={this.state.id} /> : <p>You have already applied here.</p>}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Job;