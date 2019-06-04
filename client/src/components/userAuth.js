import React from 'react';
import Login from "../components/login";
import SignUp from "../components/signup"


class userAuth extends React.Component {

  state = {
    currentForm: false
  }

  handleButtonClick = value => {
    if (value === "login") {
      this.setState({
        currentForm: true
      });
    } else if(value === "signup"){
      this.setState({
        currentForm: false
      })
    }
  }

  render() {
    return (
      <div className="col-12 col-md-4">
        <div className="border p-2 rounded" >
          <h3 id="right-column-title" className="text-center">Login/Sign Up!</h3>
          <div>
            <button value="login" className="btn" onClick={this.handleButtonClick()}>Log In</button>
            <button className="btn" value="signup" onClick={this.handleButtonClick()}>Sign Up</button>
          </div>
          <div>
            {
              (this.state.currentForm) ?
                <Login /> : <SignUp />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default userAuth;