import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Applicants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicants: [],
            title: "Full Stack Developer",
            company: "Neritic Ltd.",
            unauthorized: false
        }
        const { id } = this.props.match.params;
        axios.get("/api/job/applicants/?id="+id + "&token="+localStorage.getItem("token")).then(res => {
            this.setState({
                applicants: res.data.applicants,
                title: res.data.title,
                company: res.data.company
            })
        }).catch( err => {
          this.setState({
              unauthorized: true
          })  
        });
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
                        <h3>Page not found</h3>
                    </div>
                </main>
            )
        }
        return(
            <main>
                <Nav />
                <br/>
                <div class="container">
                    <h3>Applicants for {this.state.title} @ {this.state.company}</h3>
                    <br/>
                    <div class="row">
                        {this.state.applicants.map((applicant) => 
                        <div class="col-md-4">
                            <div class="col-md-12 job-card">
                                <p>First name: {applicant.fname}</p>
                                <p>Last name: {applicant.lname}</p>
                                <p>Phone: {applicant.phone}</p>
                                <p>Email: {applicant.email}</p>
                                <p><a className="btn btn-primary primarybtn" href={applicant.cvUrl}>Applicant's Resume</a></p>
                            </div>
                            <br/>
                        </div>
                     )}
                    </div>
                    {this.state.applicants.length == 0 ?
                    <p>There are no applicants yet.</p>
                    :   <div></div>}
                </div>
            </main>
        )
    }
}

export default Applicants;