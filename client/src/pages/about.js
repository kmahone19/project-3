import React from 'react';
import Jumbotron from '../components/jumbotron';

function about (){
   const style = {
     about: {
      height:"100vh"
     }
   }
  return(
   <React.Fragment>
     <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"About the Book!"} />
     <div className="container" style={style.about}>
      <h1 className="display-3">About!</h1>
      <p> Amon's book of grudges is a resourse for Dugeon Masters to quickly look up monsters and create encounters on the fly if need be. You can also create and save your parties and use there average party levels to get a recomendation for different monsters that would suit your party. Thank you to u/RufflesDmAccount for creating the Great D&D 5e Monster Spreadsheet. </p>
    </div>
    <br/><br/><br/><br/><br/>
   </React.Fragment>
  );
};

export default about;