import React, { Component } from "react";    
 
import './AdmissionForm.css'  

class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
               
            dob: '',    
           classselect: 'select',    
              
            division: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName,  dob, classselect,  division,gender } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
        else {    
            var pattern1 = /^[a-zA-Z]*$/;    
            if (!pattern1.test(studName)) {    
                formIsValid = false;    
                formErrors["studNameErr"] = "Invalid Name";    
            }   
        } 
        
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
      //classelect    
        if (classselect === '' || classselect === "select") {    
            formIsValid = false;    
            formErrors["classelectErr"] = "Select a class.";    
        }    
    
        
        
    
        //division   
        
        if (division === '' || division === "select") {    
            formIsValid = false;    
            formErrors["divisionErr"] = "Select division.";    
        } 
        
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr,  dobErr, classselectErr,  divisionErr,genderErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Admission Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="classelect">class</label>    
                            <select name="classelect" onChange={this.handleChange}    
                                className={classselectErr ? ' showError' : ''}    
                                value={this.state.classelect} >    
                                <option value="select">--Select--</option>    
                                <option value="I">I</option>    
                                <option value="II">II</option>  
                                <option value="III">III</option>  
                                <option value="IV">IV</option>  
                                <option value="V">V</option>  
                                <option value="VI">VI</option>  
                                <option value="VII">VII</option>  
                                <option value="VIII">VIII</option>  
                                <option value="IX">IX</option>  
                                <option value="X">X</option>    
                                
                            </select>    
                            {classselectErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{classselectErr}</div>    
                            }    
                        </div>    
                        
                        
                        <div>    
                            <label htmlFor="division">division</label>    
                            <select name="division"    
                                value={this.state.division}    
                                onChange={this.handleChange}    
                                className={divisionErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="A">A</option>    
                                <option value="B">B</option>    
                                <option value="C">C</option>    
                            </select>    
                            {divisionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{divisionErr}</div>    
                            }    
                        </div>   

                        <div>    
                            <label htmlFor="gender">gender</label>    
                            <select name="gender"    
                                value={this.state.gender}    
                                onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="A">female</option>    
                                <option value="B">male</option>    
                                <option value="C">others</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>   

                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default AdmissionForm;

