import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import Col from "../components/col";
import { getPartyInfo,addParty,updateParty } from "../utils/API"


const lvlArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

class create extends React.Component {

  state= {
    lvls: lvlArr,
    partyName: "",
    partylvl: ""
  }
  
  componentDidMount(){
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
    
    addParty(partydata)
      .then(console.log(success))
      .catch(err => console.log(err));
  }

  render() {


    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Create A Party!"} />
        <div className="container">
          <Row>
            <Col>
              <div className="card">
                <h2 className="card-header">Create Your Party!</h2>
                <div className="card-body">
                  <form>
                  <div className="col-md-12">
                    <label htmlFor="party-name"> Party Name</label>
                    <input type="text" className="form-control" placeholder="Party Name" onChange={this.handleInputChange} />
                  </div>
                  <div className="col-md-12">
                    <select name="party_level" id="">
                      <option selected> Select average party level</option>
                      {
                        this.state.lvls.map(lvl =>{
                          return(
                            <option value={lvl} key={lvl}>{lvl}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                   <button type="button" id="flight-status-submit" class="btn btn-primary col-md-8 ml-3">Submit</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </React.Fragment>
    )
  }
}
export default create