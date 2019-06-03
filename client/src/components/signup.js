import React from 'react';

class signUp extends React.Component {


  render() {
    return (
      <div class="tab-pane" id="signup" role="tabpanel">
        <form id="signup-form">
          <div class="form-group">
            <label for="first-name-input">First Name</label>
            <input type="text" id="first-name-input" class="form-control" />
          </div>
          <div class="form-group">
            <label for="last-name-input">Last Name</label>
            <input type="text" id="last-name-input" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email-input">Email</label>
            <input type="text" id="email-input" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password-input">password</label>
            <input type="password" id="password-input" class="form-control" />
          </div>
          <button type="submit" class="btn btn-block btn-success">Sign Up!</button>
        </form>
      </div>
    );
  };
};

export default signUp;