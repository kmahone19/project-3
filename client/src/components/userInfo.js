import React from 'react';
import { getPartyInfo, getUserInfo } from "../utils/API"

class userInfo extends React.Component {

  
  state = {
    parties: [],
    UserInfo: []
  }

  componentDidMount() {
    getUserInfo()
      .then(userData => {
        console.log(userData.data)
        this.setState({
          UserInfo: userData.data
        })
      })
      .catch(err => console.log(err))
  }

  handleLogOut = event => {
    event.preventDefault();

    localStorage.removeItem("accessToken");

    window.location.reload();
  }

  handlePartyInfo = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return alert("You must be logged in!")
    }
    getPartyInfo()
      .then(partyData => {
        this.setState({
          parties: partyData.data
        })
        console.log(this.state.parties)
      })
      .catch(err => console.log(err));
  }

  render() {

    const style= {
      bgOp:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }
    };
    
    return (

      <div className="col-12 col-md-4" style={style.bgOp}>
        <div id="user-info" className="p-2 rounded">
          <h3 id="full-name" className="font-weight-bold">{this.state.UserInfo.firstName}{this.state.UserInfo.lastName}</h3>
          <div className="card-body">
            <button id="party-btn" className="btn btn-block btn-secondary" onClick={this.handlePartyInfo}>Show Your Parties!</button>
            <button id="logout" className="btn btn-block btn-danger" onClick={this.handleLogOut} > logout</button>
            <div className="mt-3">
              {
                this.state.parties.length ?
                  (
                    this.state.parties.map(party => {
                      return (
                        <button className="btn btn-outline-danger m-1" id={party.party_lvl} key={party.party_name} onClick={this.props.handlePartyButton} >{party.party_name}</button>
                      )
                    })
                  ) : ""
              }
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default userInfo;