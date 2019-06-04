import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import { getPartyInfo, addParty, updateParty } from "../utils/API";
import UserAuth from "../components/userAuth";


const lvlArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

class create extends React.Component {

  state = {
    lvls: lvlArr,
    partyName: "",
    partylvl: "",
    parties: []
  }

  componentDidMount() {
    getPartyInfo()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      return alert("you must be logged in!")
    } else {

      const partyData = {
        party_name: this.state.partyName,
        party_lvl: this.state.partylvl
      };

      addParty(partyData)
        .then(partyData => {
          console.log(partyData)
        })
        .catch(err => console.log(err));
    }
  }

  handleUpdateParty = event => {
    event.preventDefault();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      return alert("you must be logged in!")
    } else {

      const partyData = {
        party_name: this.state.partyName,
        party_lvl: this.state.partylvl
      };

      updateParty(partyData)
        .then(partyData => {
          console.log(partyData);
        })
        .catch(err => console.log(err));
    }
  }
  render() {


    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Create A Party!"} />
        <div className="container">
          <Row>
            <div className="card col-12 col-md-8">
              <h2 className="card-header">Create Your Party!</h2>
              <div className="card-body">
                <form>
                  <div className="col-4">
                    <label htmlFor="party-name"> Party Name</label>
                    <input type="text" className="form-control" placeholder="Party Name" onChange={this.handleInputChange} />
                  </div>
                  <div className="col-4">
                    <select >
                      <option defaultValue value={this.state.selType} name="selType" onChange={this.handleInputChange}> Select average party level</option>
                      {
                        this.state.lvls.map(lvl => {
                          return (
                            <option value={lvl} key={lvl}>{lvl}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <button type="button" id="flight-status-submit" className="btn btn-primary col-4 ml-3">Submit</button>
                </form>
              </div>
            </div>
            <UserAuth />
          </Row>
          {/* <Row>
            <div className="col-md-8 col-12 card">
              {
                this.state.parties.map(party =>{
                  <div className="card-body" key={party.party_name}>{party}</div>
                })
              }
            </div>
          </Row> */}
        </div>

      </React.Fragment>
    )
  }
}
export default create