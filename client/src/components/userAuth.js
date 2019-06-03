import React from 'react';
import { NavLink } from 'react-router-dom';


class userAuth extends React.Component {
  
  render(){
    return (
      <div class="col-12 col-md-4">
        <div class="border p-2 rounded" id="logup">
          <h3 id="right-column-title" class="text-center">Login/Sign Up!</h3>
          <div>
            <div class="list-group list-group-horizontal-md mt-3" id="user-tabs" role="tablist">
              <NavLink class="list-group-item list-group-item-action active" data-toggle="list" to="/login"
                role="tab">Login</NavLink>
              <NavLink class="list-group-item list-group-item-action" data-toggle="list" to="/signup" role="tab">Sign
              Up!</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userAuth;