import React, { Component } from "react";
import axios from "axios";

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'edit': false,
            'fname': 'Ridhwanul',
            'lname': 'Haque',
            'phone': '07731752014',
            'email': 'rhemon19@gmail.com',
            'cvname': 'None uploaded yet.',
            'cvchange': false,
            'cvFile': null,
            'errormsg': '',
            disabled: '',

            cvUrl: ''
        };



        this.toggleEditMode = e => {
            e.preventDefault();
            this.setState((state) => ({
                edit: true,
            }));
        }

        this.handleDetailChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.saveChangedDetail = e => {
            e.preventDefault();
            axios.post("/api/auth/update/", {
                "email": this.state.email,
                "phone": this.state.phone,
                "first_name": this.state.fname,
                "last_name": this.state.lname,
                "token": localStorage.getItem("token")
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                this.setState({
                    edit: false
                })
            }).catch(err => {
                this.setState({
                    errormsg: "Account with email exist"
                })
            });

            if (this.state.cvchange) {
                let formData = new FormData();
                let cvFile = this.state.cvFile;
                formData.append('cvFile', cvFile);
                formData.append('token', localStorage.getItem("token"));
                axios.post('/api/auth/cv/', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
            }
        }
        
        this.handleCVFileChange = e => {
            let extension = e.target.files[0].name.substring(e.target.files[0].name.length-4);
            console.log(extension);
            if (extension === ".pdf") {   
                this.setState({
                    cvFile: e.target.files[0],
                    cvchange: true,
                    cvname: e.target.files[0].name,
                    disabled: "",
                    cvUrl: ""
                })
            } else {
                this.setState({
                    errormsg: "File format for CV must be pdf.",
                    disabled: " disabled"
                })
            }
        }

    }

    componentWillMount() {
        axios.get("/api/auth/user/?token=" + localStorage.getItem("token")).then(res => {
            this.setState({
                email: res.data.email,
                fname: res.data.first_name,
                lname: res.data.last_name,
                phone: res.data.phone
            });
        }).catch(err => {
            console.log(err)
        });

        axios.get("/api/auth/cv/?token=" + localStorage.getItem("token")).then(res => {
            this.setState({
                cvname: res.data.cvFileName,
                cvUrl: res.data.cvFileUrl
            });
        });
    }

    render() {
       
        return (
            <div>
                <h1>Your Details</h1>
            {this.state.edit ? 
                <form className="user-detail">
                    <div className="form-group">
                        <label for="fname">First name:</label>
                        <input onChange={this.handleCredChange} value={this.state.fname} onChange={this.handleDetailChange} type="text" id="fname" name="fname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="lname">Last name:</label>
                        <input onChange={this.handleCredChange} value={this.state.lname} onChange={this.handleDetailChange} type="text" id="lname" name="lname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone:</label>
                        <input onChange={this.handleCredChange} value={this.state.phone} onChange={this.handleDetailChange} type="text" id="phone" name="phone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input onChange={this.handleCredChange} value={this.state.email} onChange={this.handleDetailChange} type="email" id="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <p>Last updated CV: </p>
                        <p>CV File: <a href={this.state.cvUrl}>{this.state.cvname }</a></p>
                    </div>
                    <div className="form-group">
                    
                        <label for="cv">CV:</label>
                        <input onChange={this.handleCVFileChange} type="file" id="cv" name="cv" className="form-control-file" />
                    </div>
                    <div className="form-group">
                        <button onClick={this.saveChangedDetail} className={"primarybtn btn edit-ud" + this.state.disabled }> Save </button>
                    </div>
                    <p>{ this.state.errormsg }</p>
                </form> :
                <div className="contianer user-detail">
                    <br/>
                    <form>
                        <div className="form-group">
                            <p>First Name: {this.state.fname }</p>
                        </div>
                        <div className="form-group">
                            <p>Last Name: {this.state.lname }</p>
                        </div>
                        <div className="form-group">
                            <p>Email: {this.state.email }</p>
                        </div>
                        <div className="form-group">
                            <p>Phone: {this.state.phone }</p>
                        </div>
                        <br/>
                        <div className="form-group">
                            <p>Last updated CV </p>
                            <p><a href={this.state.cvUrl}>{this.state.cvname }</a></p>
                        </div>
                        <div className="form-group">
                            <button onClick={this.toggleEditMode} className="primarybtn btn btn-primary edit-ud"> Edit </button>
                        </div>
                    </form>
                </div>
            }
            </div>
        )
        
    }

}

export default UserDetails;