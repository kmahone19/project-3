import React from 'react';
import { registerUser } from "../utils/API"

class SignUp extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const userdata = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    console.log(userdata)

    if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password){
      return alert("Please double check what you entered and try again!")
    }

    registerUser(userdata)
      .then(userdata => {
        console.log(userdata)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="tab-content my-4">
        <div className="tab-pane active" id="signup" role="tabpanel">
        <form id="signup-form">
          <div className="form-group">
            <label htmlFor="first-name-input">First Name</label>
            <input type="text" id="first-name-input" className="form-control" value={this.state.firstName} name="firstName" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="last-name-input">Last Name</label>
            <input type="text" id="last-name-input" className="form-control" value={this.state.lastName} name="lastName" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Email</label>
            <input type="text" id="email-input" className="form-control" value={this.state.email} name="email" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">password</label>
            <input type="password" id="password-input" className="form-control" value={this.state.password} name="password" onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-block btn-success" onClick={this.handleFormSubmit} >Sign Up!</button>
        </form>
      </div>
      </div>
    );
  };
};

export default SignUp;