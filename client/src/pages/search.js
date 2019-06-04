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
    searchTrem: "",
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
    const randNum = Math.floor((Math.random * 803) + 1);

    findMonsterById(randNum)
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

    if (!this.state.searchTrem && !this.state.selCr && !this.state.selSize && !this.state.selType) {
      return alert("Looks like your not searching for anyone!");
    } else {
      findMonster({ Name: this.state.searchTrem, Cr: this.state.selCr, Size: this.state.selSize, Type: this.state.selType })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    };
  };

  // handleDiceRoll = () => {
  
  //   const newNUm = Math.floor((Math.random * 6) + 1);

  //   this.setState({
  //     EncounterNum: { newNUm }
  //   });
  // }

  render() {

    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
        <div className="container">
          <Row>
            <div className="card">
              <div className="card-body">
                <Row>
                  <form>
                    <div className="col-md-12">
                      <input type="text" className="form-control" placeholder="Search a Monster" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-12">
                      <select name="size" id="">
                        <option defaultValue>Select A Size</option>
                        {
                          this.state.sizes.map(size => {
                            return (
                              <option value={size} key={size}>{size}</option>
                            )
                          })
                        }

                      </select>
                    </div>
                    <div className="col-md-12">
                      <select name="cr" id="">
                        <option defaultValue>Select A Challenge Rating</option>
                        {
                          this.state.crs.map(cr => {
                            return (
                              <option value={cr} key={cr}>{cr}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-md-12">
                      <select name="Type" id="">
                        <option defaultValue>Select A Type</option>
                        {
                          this.state.types.map(type => {
                            return (
                              <option value={type} key={type}>{type}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <button type="button" id="flight-status-submit" class="btn btn-primary col-md-8 ml-3">Submit</button>
                  </form>
                </Row>
              </div>
            </div>
            {/* <div className="card text-center">
              <h2 className="card-header">How Many are you gonna fight?</h2>
              <div className="card-body">
                <h3 className="display-3">{this.state.EncounterNum}</h3>
                <button className="btn btn-danger" onClick={this.handleDiceRoll}>Roll the dice!</button>
              </div>
            </div> */}
            <UserAuth />
          </Row>
        </div>

      </React.Fragment>
    )
  }

}

export default Search;