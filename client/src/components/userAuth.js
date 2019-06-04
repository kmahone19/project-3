import React, { useState } from 'react';
import Login from "../components/login";
import SignUp from "../components/signup"


class userAuth extends React.Component {

 
  render() {
    return (
      <div className="col-12 col-md-4">
        <div className="border p-2 rounded" >
          <h3 id="right-column-title" className="text-center">Login/Sign Up!</h3>
          <div>
            <button value="login" className="btn" >Log In</button>
            <button className="btn" value="signup" >Sign Up</button>
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