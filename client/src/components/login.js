import React from 'react';

class login extends React.Component {

  render() {
    return (
      <div class="tab-content my-4" id="forms">
        <div class="tab-pane active" id="login" role="tabpanel">
          <form id="login-form">
            <div class="form-group">
              <label for="email-input-login">Email</label>
              <input type="text" id="email-input-login" class="form-control" />
            </div>
            <div class="form-group">
              <label for="password-input-login">password</label>
              <input type="password" id="password-input-login" class="form-control" />
            </div>
            <button type="submit" class="btn btn-block btn-success">Login!</button>
          </form>
        </div>
      </div>
    );
  };
};

export default login;