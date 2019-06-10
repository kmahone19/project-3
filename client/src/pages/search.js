import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import { findMonsterByName, findMonsterById, findMonsterByCr } from '../utils/API';
import UserAuth from "../components/userAuth";


class Search extends React.Component {

  state = {
    searchTerm: "",
    monsterList: [],
    Cr: 0,
  };


  componentDidMount() {
    const randNum = parseInt(Math.floor((Math.random() * 798) + 1));
    findMonsterById(randNum)
      .then(data => {
        console.log(data.data[0]);
        this.state.monsterList.push(data.data[0]);
        console.log(this.state.monsterList)
      })
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
    console.log(this.state.searchTerm)
    console.log(this.state.Cr)
    if (this.state.searchTerm) {
      this.handleNameSearch();
    } else {
      this.handleCrSearch();
    }
    this.setState({
      searchTerm: "",
      Cr: 0
    })
  };

  handleNameSearch = () => {
    findMonsterByName(this.state.searchTerm)
      .then(monsterData => {
        console.log(monsterData.data)
        this.setState({
          monsterList: monsterData.data
        })
        console.log(this.monstertList)
      })
      .catch(err => console.log(err))
  }
  handleCrSearch = () => {
    findMonsterByCr(this.state.Cr)
      .then(monsterData => {
        console.log(monsterData.data)
        const monsterArr = monsterData.data
        this.setState({
          monsterList: monsterArr
        })
      })
      .catch(err => console.log(err));
  }

  handlePartyButton = event => {
    const { id } = event.target;
    console.log(id)
    if (id <= 5) {
      findMonsterByCr(.25)
        .then(monsterData => {
          console.log(monsterData.data)
          const monsterArr = monsterData.data
          this.setState({
            monsterList: monsterArr
          })
        })
        .catch(err => console.log(err));
    } else if (id >= 6 && id <= 10) {
      findMonsterByCr(1)
        .then(monsterData => {
          console.log(monsterData.data)
          const monsterArr = monsterData.data
          this.setState({
            monsterList: monsterArr
          })
        })
        .catch(err => console.log(err));
    } else if (id >= 11 && id <= 15) {
      findMonsterByCr(3)
        .then(monsterData => {
          console.log(monsterData.data)
          const monsterArr = monsterData.data
          this.setState({
            monsterList: monsterArr
          })
        })
        .catch(err => console.log(err));
    } else if (id >= 16 && id <= 20) {
      findMonsterByCr(4)
        .then(monsterData => {
          console.log(monsterData.data)
          const monsterArr = monsterData.data
          this.setState({
            monsterList: monsterArr
          })
        })
        .catch(err => console.log(err));
    }
  }

  render() {
  
    const style= {
      bgOp:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }
    };

    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
          <div className="container">
            <Row>
              <div className="card col-12 col-md-8 p-0" style={style.bgOp}>
                <h2 className="card-header"> Search for a Monster!</h2>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-6 m-2">
                        <label htmlFor="monster-search">Search</label>
                        <input type="text" className="form-control" placeholder="search a monster" id="moster-search" value={this.state.searchTerm} name="searchTerm" onChange={this.handleInputChange} />
                      </div>
                      <div className="col-5 m-2">
                        <label htmlFor="cr-search">Challenge Rating</label>
                        <input type="number" className="form-control" id="cr-search" placeholder="search a Challenge Rating" value={this.state.Cr} name="Cr" onChange={this.handleInputChange} />
                      </div>
                      <button type="button" id="flight-status-submit" className="btn btn-secondary col-md-8 ml-3" onClick={this.handleFormSubmit} >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <UserAuth handlePartyButton={this.handlePartyButton} />
            </Row>

            <div className="card p-0 col-12 mt-2" style={style.bgOp}>
              <h2 className="card-header text-center col-12">Monsters</h2>
              <div className="card-body text-center">
                <table className="col-12">
                  <tbody>
                    <tr>
                      <th className="m-1" scope="col"> Name </th>
                      <th className="m-1" scope="col"> Type </th>
                      <th className="m-1" scope="col"> Size </th>
                      <th className="m-1" scope="col"> AC </th>
                      <th className="m-1" scope="col">HP</th>
                      <th className="m-1" scope="col">Speeds</th>
                      <th className="m-1" scope="col">STR</th>
                      <th className="m-1" scope="col"> DEX </th>
                      <th className="m-1" scope="col"> CON </th>
                      <th className="m-1" scope="col"> INT </th>
                      <th className="m-1" scope="col"> WIS </th>
                      <th className="m-1" scope="col"> CHA </th>
                      <th className="m-1" scope="col"> SavThrows </th>
                      <th className="m-1" scope="col"> Skills </th>
                      <th className="m-1" scope="col"> Sense </th>
                      <th className="m-1" scope="col"> CR </th>
                    </tr>

                    {this.state.monsterList.length ? (
                      this.state.monsterList.map(monster => {
                        return (
                          <tr key={monster.Name}>
                            <td>{monster.Name}</td>
                            <td>{monster.Type}</td>
                            <td>{monster.Size}</td>
                            <td>{monster.AC}</td>
                            <td>{monster.HP}</td>
                            <td>{monster.Speeds}</td>
                            <td>{monster.STR}</td>
                            <td>{monster.DEX}</td>
                            <td>{monster.CON}</td>
                            <td>{monster.INT}</td>
                            <td>{monster.WIS}</td>
                            <td>{monster.CHA}</td>
                            <td>{monster.SavThrows}</td>
                            <td>{monster.Skills}</td>
                            <td>{monster.Sense}</td>
                            <td>{monster.CR}</td>
                          </tr>
                        )
                      })
                    ) : ""
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        <br /><br />
      </React.Fragment>
    )
  }

}

export default Search;