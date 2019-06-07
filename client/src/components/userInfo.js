import React from 'react';
import { getPartyInfo } from "../utils/API"

class userInfo extends React.Component {

  state ={
    parties: []
  }

  handleLogOut = event => {
    event.preventDefault();

    localStorage.removeItem("accessToken");

  }

  handlePartyInfo = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return alert("You must be logged in!")
    }
    getPartyInfo()
    .then(partyData => {
      console.log(partyData.data)
      window.location.reload()
      this.setState({
        parties: partyData.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (

      <div className="col-12 col-md-4">
        <div id="user-info" className="border p-2 rounded">
          <h3 id="full-name" className="font-weight-bold"></h3>
          <div className="card-body">
            <button id="party-btn" className="btn btn-block btn-info" onClick={this.handlePartyInfo}>Show Your Parties!</button>
            <button id="logout" className="btn btn-block btn-warning" onClick={this.handleLogOut} > logout</button>
            <div id="parties"></div>
          </div>
        </div>
      </div>
    )
  };
}

export default userInfo;