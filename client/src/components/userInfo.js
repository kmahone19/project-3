import React from 'react';

class userInfo extends React.Component {
  render() {
    return (

      <div id="user-info" class="border p-2 rounded">
        <h3 id="full-name" class="font-weight-bold"></h3>
        <div class="card-body">
          <button id="party-btn" class="btn btn-block btn-info">Show Your Parties!</button>
          <button id="logout" class="btn btn-block btn-warning"> logout</button>
          <div id="parties"></div>
        </div>
      </div>
    )
  };
}

export default userInfo;