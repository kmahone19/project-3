import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import { getPartyInfo, addParty, deleteParty  } from "../utils/API";
import UserAuth from "../components/userAuth";



class create extends React.Component {

  state = {
    partyName: "",
    partylvl: "",
    parties: []
  }

  componentDidMount(){
    getPartyInfo()
      .then(partyData => {
        console.log(partyData.data)
        this.setState({
          parties: partyData.data
        })
        console.log(this.state.parties)
      })
      .catch(err => console.log(err));

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.partyName);
    console.log(this.state.partylvl)

    const partyData = {
      party_name: this.state.partyName,
      party_lvl: this.state.partylvl
    };
    console.log(partyData)
    addParty(partyData)
      .then(partyData => {
        console.log(partyData)
      })
      .catch(err => console.log(err));

    getPartyInfo()
      .then(partyData => {
        console.log(partyData.data)
        this.setState({
          parties: partyData.data[0]
        })
      })
      .catch(err => console.log(err));
  }

  handleDeleteParty = event =>{
    event.preventDefault();

    const { id } = event.target;
    console.log(id)
    deleteParty(id)
      .then(partyData => {console.log(partyData)
      console.log("this ran")})
      .catch(err => console.log(err));
  }

  render() {


    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Create A Party!"} />
        <div className="container">
          <Row>
            <div className="card col-12 col-md-8 p-0">
              <h2 className="card-header">Create Your Party!</h2>
              <div className="card-body">
                <form>
                  <div className="row  justify-content">
                    <div className="col-8 m-2">
                      <label htmlFor="party-name"> Party Name</label>
                      <input type="text" className="form-control" id="party-name" placeholder="Name your party!" value={this.state.partyName} name="partyName" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-8 m-1">
                      <label htmlFor="lvl-input"> Average Party Level</label>
                      <input type="number" className="form-control" id="lvl-input" placeholder="Average party level" value={this.state.partylvl} name="partylvl" onChange={this.handleInputChange} />
                    </div>
                    <button type="button" id="flight-status-submit" className="btn btn-primary col-4 ml-3" onClick={this.handleFormSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <UserAuth />
          </Row>
          <Row>
            <div className="col-md-8 p-0 col-12 card">
              <h2 className="card-header">Your Parties!</h2>
              <div className="card-body text-center">
                {
                  this.state.parties.map(party => {
                    return (
                      <div key={party.party_name} className="display-4">
                        <strong>{party.party_name}</strong> || Average party level <strong>{party.party_lvl}</strong> <button className="btn btn-sm btn-danger" id={party.id}
                        onClick={this.handleDeleteParty}>X</button>
                        <hr/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </Row>
        </div>
        <br /><br />
      </React.Fragment>
    )
  }
}
export default create