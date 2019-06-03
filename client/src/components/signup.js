import React from 'react';
import { registerUser } from "../utils/API"

class signUp extends React.Component {

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

    registerUser(userdata)
      .then(console.log("success"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="tab-pane" id="signup" role="tabpanel">
        <form id="signup-form">
          <div className="form-group">
            <label htmlfor="first-name-input">First Name</label>
            <input type="text" id="first-name-input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlfor="last-name-input">Last Name</label>
            <input type="text" id="last-name-input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlfor="email-input">Email</label>
            <input type="text" id="email-input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlfor="password-input">password</label>
            <input type="password" id="password-input" className="form-control" />
          </div>
          <button type="submit" className="btn btn-block btn-success">Sign Up!</button>
        </form>
      </div>
    );
  };
};

export default signUp;