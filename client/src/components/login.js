import React from 'react';
import { loginUser } from "../utils/API";

class login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event =>{
    event.preventDefault();
    
    loginUser(userData)
      .then(console.log("success"))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="tab-content my-4" id="forms">
        <div className="tab-pane active" id="login" role="tabpanel">
          <form id="login-form">
            <div className="form-group">
              <label htmlfor="email-input-login">Email</label>
              <input type="text" id="email-input-login" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlfor="password-input-login">password</label>
              <input type="password" id="password-input-login" className="form-control" />
            </div>
            <button type="submit" className="btn btn-block btn-success">Login!</button>
          </form>
        </div>
      </div>
    );
  };
};

export default login;