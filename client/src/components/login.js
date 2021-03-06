import React from 'react';
import { loginUser, getUserInfo } from "../utils/API";
import swal from "sweetalert";


class login extends React.Component {

  state = {
    email: "",
    password: "",
    token: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    if (!this.state.email || !this.state.password) {
      swal("Uh Oh!", "Looks like you forgot something, Please Try Again!", "Warning")
    }

    loginUser(userData)
      .then(accessToken => {
        console.log(accessToken.data);
        localStorage.setItem("accessToken", accessToken.data);
        this.handleGetUserInfo();
        window.location.reload();
      })
      .catch(err => console.log(err));
    
  }

  handleGetUserInfo = () => {

    getUserInfo()
      .then(userData => console.log(userData))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="tab-content my-4" id="forms">
        <div className="tab-pane active" id="login" role="tabpanel">
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="email-input-login">Email</label>
              <input type="text" id="email-input-login" className="form-control" value={this.state.email} name="email" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password-input-login">password</label>
              <input type="password" id="password-input-login" className="form-control" value={this.state.password} name="password" onChange={this.handleInputChange} />
            </div>
            <button type="submit" className="btn btn-block btn-success" onClick={this.handleFormSubmit} >Login!</button>
          </form>
        </div>
      </div>
    );
  };
};

export default login;