import React from 'react';
import Jumbotron from "../components/jumbtron";
import Row from "../components/row";
import Col from "../components/col";
import { getMonster, getMonsterById } from '../utils/API'

const sizeArr = ["Gargantuan", "Huge", "Large", "Medium", "Small", "Tiny"];

const typeArr = ["Abberation", "Beast", " Celestial", "Construct", "Dragon", "Elemental", "Fey", "fey(elf)", "Fiend", "Fiend (Demon)", "Fiend (Demon)Fiend (Shapechanger)", "Fiend (Demon,Orc)", "Fiend (Devil)", "Fiend (Shapechanger)", "Fiend (Yugoloth)", "Giant", "Giant (Giant, Cloud)", "Giant (Giant, fire)", "Giant (Giant, Frost)", "Giant (Giant, Hill)", "Giant (Giant, Stone)", "Giant (Giant, Storm)", "Humanoid", "Humanoid (Any race)", "Humanoid (Derro)", "Humanoid (Dwarf)", "Humanoid (Elf)", "Humanoid (Firenewt)", "Humanoid (Gith)", "Humanoid (Gnoll)", "Humanoid (Gobliniod)", "Humanoid (Grung)", "Humanoid (Human)", "Humanoid (Human)Humanoid (Shapechanger)", "Humanoid (Kobold)", "Humanoid (Meazel)", "Humanoid (Mongrelfolk)", "Humanoid (Nagpa)", "Humanoid (Orc)", "Humanoid (Shapechanger)", "Humanoid (Tabaxi)", "Humanoid (Torle)", "Humanoid (Troglodtye)", "Humanoid (Xvart)", "Humanoid (Yuan-Ti)", "Monstrosity", "Monstrosity (Shapechanger)Monstrosity (Yuan-Ti)", "Ooze", "Plant", "Undead", "Undead (Titan)"
];

const crArr = [0, 0.13, 0.25, 0.5, 1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 30]

class search extends React.Component {

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

    getMonsterById(randNum)
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

    if (!searchTrem && !selCr && !selSize && !selType) {
      return alert("Looks like your not searching for anyone!");
    } else {
      getMonster({ Name: searchTrem, Cr: selCr, Size: selSize, Type: selType })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  }


  render() {

    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
        <div className="container">
          <Row>
            <Col>
              <div className="card">
                <div className="card-body">
                  <Row>
                    <form>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Search a Monster" onChange={this.handleInputChange} />
                      </div>
                      <div className="col-md-12">
                        <select name="size" id="">
                          <option selected>Select A Size</option>
                          {
                            this.state.sizes.map(size => {
                              <option value={size} key={size}>{size}</option>
                            })
                          }

                        </select>
                      </div>
                      <div className="col-md-12">
                        <select name="cr" id="">
                          <option selected>Select A Challenge Rating</option>
                          {
                            this.state.crs.map(cr => {
                              <option value={cr} key={cr}>{cr}</option>
                            })
                          }
                        </select>
                      </div>
                      <div className="col-md-12">
                        <select name="Type" id="">
                          <option selected>Select A Type</option>
                          {
                            this.state.types.map(type => {
                              <option value={type} key={type}>{type}</option>
                            })
                          }
                        </select>
                      </div>
                      <button type="button" id="flight-status-submit" class="btn btn-primary col-md-8 ml-3">Submit</button>
                    </form>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </React.Fragment>
    )
  }

}

export default search;