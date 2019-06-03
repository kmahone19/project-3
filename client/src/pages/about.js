import React from 'react';
import Jumbotron from '../components/jumbotron';

function about (){

  return(
   <React.Fragment>
     <Jumbotron fluid bg={"dark"} color={'light'} pageTitle={"About the Book!"} />
     <div>
      <h1 className="display-3">About!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus id veniam ipsa. Tempore nisi illum id in delectus qui consequatur magnam dolorem similique sint ex, inventore doloremque vitae amet! </p>
    </div>
   </React.Fragment>
  );
};

export default about;