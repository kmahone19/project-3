import React from 'react';
import Jumbotron from "../components/jumbtron";
import { getMonster, getMonsterById } from '../utils/API'


class search extends React.Component{

  state = {
    searchTrem: "",
    monsterList: [],
    EncounterNum: 0
  };


  componentDidMount(){
    const randNum = Math.floor((Math.random*803)+1);

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


  }
  
  
  render(){
    
    return(
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Search for your next grudge match!"} />
        
      </React.Fragment>
    )
  }

}