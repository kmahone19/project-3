import React from 'react';
import { getPartyInfo } from "../utils/API"

class userInfo extends React.Component {

 handleLogOut = event =>{
  event.preventDefault();

  localStorage.removeItem("accessToken");

 }

 handlePartyInfo = () =>{
   const token = localStorage.getItem("accessToken");

   if(!token){
     return alert("You must be logged in!")
   }

   getPartyInfo()
    .then(partyData => {
      console.log(partyData);
      
    })
 }

  render() {
    return (

      <div id="user-info" class="border p-2 rounded">
        <h3 id="full-name" class="font-weight-bold"></h3>
        <div class="card-body">
          <button id="party-btn" class="btn btn-block btn-info">Show Your Parties!</button>
          <button id="logout" class="btn btn-block btn-warning" onclick={handleLogOut} > logout</button>
          <div id="parties"></div>
        </div>
      </div>
    )
  };
}

export default userInfo;