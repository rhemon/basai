import React, { Component } from "react";
import axios from "axios";

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            cvname: 'No CV Uploaded Yet',
            cvUrl: '',
            disabled: '',
            errormsg: "",
            cvchange: false
        }

        axios.get("/api/auth/user/?token="+ localStorage.getItem("token")).then(res => {
            this.setState({
                fname: res.data.first_name,
                lname: res.data.last_name,
                email: res.data.email,
                phone: res.data.phone
            })
        })
        axios.get("/api/auth/cv/?token="+localStorage.getItem("token")).then(res => {
            this.setState({
                cvname: res.data.cvFileName,
                cvUrl: res.data.cvFileUrl
            })
        }).catch(err=> {
            this.setState({
                disabled: " disabled"
            });
        })

        this.cvFileChange = e => {
            let extension = e.target.files[0].name.substring(e.target.files[0].name.length-4);
            // console.log(extension);
            if (extension === ".pdf") {   
                this.setState({
                    cvFile: e.target.files[0],
                    cvchange: true,
                    cvname: e.target.files[0].name,
                    disabled: "",
                    errormsg: "",
                    cvUrl: ""
                })
            } else {
                this.setState({
                    errormsg: "File format for CV must be pdf.",
                    disabled: " disabled"
                })
            }
        }

        this.applyForJob = e => {
            e.preventDefault();
            if (this.state.disabled === " disabled"){
                return;
            }
            if (this.state.cvchange) {
                let fD = new FormData();
                fD.append("cvFile", this.state.cvFile);
                fD.append("token", localStorage.getItem("token"));
                axios.post("/api/auth/cv/", fD, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                    
                }).then(res => {
                    axios.get("/api/job/apply/?id="+this.props.pk+"&token="+localStorage.getItem("token")).then(res=>{
                        window.location.reload();
                    })
                })
            } else {
                axios.get("/api/job/apply/?id="+this.props.pk+"&token="+localStorage.getItem("token")).then(res=>{
                    window.location.reload();
                })
            }
        }
        
    }

    render() {
        return (
            <div>
                <p>First name: {this.state.fname }</p>
                <p>Last name: {this.state.lname }</p>
                <p>Phone: {this.state.phone }</p>
                <p>Email: {this.state.email }</p>
                <p>Last CV: <a href={this.state.cvUrl}>{this.state.cvname }</a></p>
                {/* include cv file here  */}

                <form onSubmit={this.applyForJob}>
                    <input type="hidden" name="job_id" value={this.props.pk} />
                    <div class="form-group">
                        <label for="cv">Upload new CV</label>
                        <input type="file" onChange={this.cvFileChange} id="cv" name="cv" className="form-control-file" />
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Apply" className={"form-control btn btn-success" + this.state.disabled }/>
                    </div>
                    <p>{this.state.errormsg}</p>
                </form>
                
            </div>
        )
    }
}

export default Apply;