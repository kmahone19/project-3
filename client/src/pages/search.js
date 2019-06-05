import React from 'react';
import Jumbotron from "../components/jumbotron";
import Row from "../components/row";
import { findMonsterByName, findMonsterById, findMonsterByCr } from '../utils/API';
import UserAuth from "../components/userAuth";

class Search extends React.Component {

  state = {
    searchTerm: "",
    monsterList: [],
    Cr: 0
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
    if(this.state.searchTerm){
      this.handleNameSearch();
    } else{
      this.handleCrSearch();
    }
  };

  handleNameSearch = () =>{
    findMonsterByName(this.state.searchTerm)
      .then(monsterData => console.log(monsterData))
      .catch(err => console.log(err))
  }
  handleCrSearch = () =>{
    findMonsterByCr(this.state.Cr)
      .then(monsterData => console.log(monsterData))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
        <div className="container">
          <Row>
            <div className="card col-12 col-md-8 p-0">
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
                    <button type="button" id="flight-status-submit" className="btn btn-primary col-md-8 ml-3" onClick={this.handleFormSubmit} >Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <UserAuth />
          </Row>

          <div className="card p-0 col-12 mt-2">
            <h2 className="card-header text-center col-12">Monsters</h2>
            <div className="card-body">
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

                  {
                    this.state.monsterList.map(monster => {
                      console.log("this ran!")
                      return (
                        <tr>
                          <td key={monster.Name}>{monster.Name}</td>
                          <td key={monster.Type}>{monster.Type}</td>
                          <td key={monster.Size}>{monster.Size}</td>
                          <td key={monster.AC}>{monster.AC}</td>
                          <td key={monster.HP}>{monster.HP}</td>
                          <td key={monster.Speeds}>{monster.Speeds}</td>
                          <td key={monster.STR}>{monster.STR}</td>
                          <td key={monster.DEX}>{monster.DEX}</td>
                          <td key={monster.CON}>{monster.CON}</td>
                          <td key={monster.INT}>{monster.INT}</td>
                          <td key={monster.WIS}>{monster.WIS}</td>
                          <td key={monster.CHA}>{monster.CHA}</td>
                          <td key={monster.SavThrows}>{monster.SavThrows}</td>
                          <td key={monster.Skills}>{monster.Skills}</td>
                          <td key={monster.Sense}>{monster.Sense}</td>
                          <td key={monster.CR}>{monster.CR}</td>
                        </tr>
                      )
                    })

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