import React, { Component } from "react";
import axios from "axios";

class PostedJobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "jobs": [{"id": 1, "title": "abdaer"},{"id": 1, "title": "abdaer"}]
            
        };
        axios.get("/api/job/user/?token=" + localStorage.getItem("token")).then(res => {
            this.setState({
                jobs: res.data.jobs
            })
        })
    }

    render() {
        return(
            <div>
                <br/>
                <div className="job-post-header">
                    <div className="float-left"><h3>Jobs You Posted</h3></div>
                    <div className="float-right"><a href="/job/new" className="btn btn-success">New Post</a></div>       
                    <div className="clearfix"></div>
                </div>
                { this.state.jobs.length > 0 ? 
                    <div className="job-posts">
                        {this.state.jobs.map((job) => 
                            <div className="joblist">
                                <div className="float-left ml-auto">
                                    <p className="jobtitle">{ job.title }</p>
                                </div>
                                <div className="float-right jobbuttons">
                                    <a className="primarybtn btn btn-primary" href={"/applicants/" + job.id}> 
                                        Applicants
                                    </a> &nbsp;
                                    <a className="primarybtn btn btn-primary" href={"/job/edit/"+job.id}>
                                        Edit
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        )}
                    </div> :
                    <div className="no-job-post">
                        <p> You have no job posted. </p>
                    </div>
                }
            </div>
        )
    }
}

export default PostedJobList;