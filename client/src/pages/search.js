import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import { findMonster, findMonsterById } from '../utils/API';
import UserAuth from "../components/userAuth";

const sizeArr = ["Gargantuan", "Huge", "Large", "Medium", "Small", "Tiny"];

const typeArr = ["Abberation", "Beast", " Celestial", "Construct", "Dragon", "Elemental", "Fey", "fey(elf)", "Fiend", "Fiend (Demon)", "Fiend (Demon)Fiend (Shapechanger)", "Fiend (Demon,Orc)", "Fiend (Devil)", "Fiend (Shapechanger)", "Fiend (Yugoloth)", "Giant", "Giant (Giant, Cloud)", "Giant (Giant, fire)", "Giant (Giant, Frost)", "Giant (Giant, Hill)", "Giant (Giant, Stone)", "Giant (Giant, Storm)", "Humanoid", "Humanoid (Any race)", "Humanoid (Derro)", "Humanoid (Dwarf)", "Humanoid (Elf)", "Humanoid (Firenewt)", "Humanoid (Gith)", "Humanoid (Gnoll)", "Humanoid (Gobliniod)", "Humanoid (Grung)", "Humanoid (Human)", "Humanoid (Human)Humanoid (Shapechanger)", "Humanoid (Kobold)", "Humanoid (Meazel)", "Humanoid (Mongrelfolk)", "Humanoid (Nagpa)", "Humanoid (Orc)", "Humanoid (Shapechanger)", "Humanoid (Tabaxi)", "Humanoid (Torle)", "Humanoid (Troglodtye)", "Humanoid (Xvart)", "Humanoid (Yuan-Ti)", "Monstrosity", "Monstrosity (Shapechanger)Monstrosity (Yuan-Ti)", "Ooze", "Plant", "Undead", "Undead (Titan)"
];

const crArr = ['0', '0.13', '0.25', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '30'];

class Search extends React.Component {

  state = {
    searchTerm: "",
    monsterList: [],
    EncounterNum: 0,
    sizes: sizeArr,
    types: typeArr,
    crs: crArr,
    selType: "",
    selCr: "",
    selSize: ""
  };


  componentDidMount() {
    const randNum = parseInt(Math.floor((Math.random() * 798) + 1));
    findMonsterById(randNum)
      .then(data => console.log(data.data[0]))
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

     if (!this.state.searchTerm && !this.state.selCr && !this.state.selSize && !this.state.selType) {
      return alert("Looks like your not searching for anyone!")
    }

    const monsterSearch = {
      Name: this.state.searchTerm || null,
      Type: this.state.selType || null,
      Size: this.state.selSize || null,
      CR: this.state.selCr || null
    }

    findMonster(monsterSearch)
      .then(monsterData => {
        console.log(monsterData)
      })

  };

  render() {

    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
        <div className="container">
          <Row>
            <div className="card col-12 col-md-8">
              <div className="card-body">
                <Row>
                  <form>
                    <div className="col-3">
                      <input type="text" className="form-control" value={this.state.searchTerm} name="searchTerm" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-3">
                      <select name="size">
                        <option defaultValue value={this.state.selType} name="selType" onChange={this.handleInputChange}>Select A Size</option>
                        {
                          this.state.sizes.map(size => {
                            return (
                              <option value={size} key={size}>{size}</option>
                            )
                          })
                        }

                      </select>
                    </div>
                    <div className="col-3">
                      <select name="cr">
                        <option defaultValue value={this.state.selType} name="selType" onChange={this.handleInputChange}>Select A Challenge Rating</option>
                        {
                          this.state.crs.map(cr => {
                            return (
                              <option value={cr} key={cr}>{cr}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-3">
                      <select name="Type">
                        <option defaultValue value={this.state.selType} name="selType" onChange={this.handleInputChange}>Select A Type</option>
                        {
                          this.state.types.map(type => {
                            return (
                              <option value={type} key={type}>{type}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <button type="button" id="flight-status-submit" className="btn btn-primary col-md-8 ml-3" onClick={this.handleFormSubmit} >Submit</button>
                  </form>
                </Row>
              </div>
            </div>
            <UserAuth />
          </Row>
        </div>

      </React.Fragment>
    )
  }

}

export default Search;