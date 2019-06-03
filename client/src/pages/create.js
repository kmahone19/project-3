import React from 'react';
import Jumbotron from "../components/jumbotron";



class create extends React.Component{

  render(){
    
    
    return(
      <React.Fragment>
        <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"Create A Party!"} />
        
      </React.Fragment>
    )
  }
}
export default create