import React, { useState, useEffect } from 'react';
import Login from "../components/login";
import SignUp from "../components/signup";
import UserInfo from "../components/userInfo"




function UserAuth(props) {

  const style = {
    bgOp: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
  };

  const [activeForm, setActiveForm] = useState("signup");

  function handleSetActiveForm(formName) {
    setActiveForm(formName);
  };

  const [isLogedIn, setActiveScreen] = useState("no");

  useEffect(() => {
    handleSetLogedIn()
  }, []);

  function handleSetLogedIn() {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setActiveScreen("yes")
    } else if (!token) {
      setActiveScreen("no")
    }
  }


  return (
    <React.Fragment >
      {
        isLogedIn === "no" ?
          (<div className="col-12 col-md-4 p-1" style={style.bgOp}>
            <div className="border p-2 rounded" >
              <h3 id="right-column-title" className="text-center">Login/Sign Up!</h3>
              <div>
                <div className="list-group list-group-horizontal-md mt-3" id="user-tabs" role="tablist">
                  <button
                    className={`list-group-item list-group-item-action ${activeForm === "login" ? "active" : ""}`}
                    onClick={() => handleSetActiveForm("login")}
                  >Login
        </button>
                  <button
                    className={`list-group-item list-group-item-action ${activeForm === "signup" ? "active" : ""}`}
                    onClick={() => handleSetActiveForm("signup")}>Sign
          Up!</button>
                </div>
                <div className="my-4">

                  {activeForm === "login" ? (
                    <Login activeForm={activeForm} />
                  ) : (
                      <SignUp activeForm={activeForm} />
                    )}

                </div>
              </div>
            </div>

          </div>) : <UserInfo handlePartyButton={props.handlePartyButton} />
      }
    </React.Fragment>
  );
}

export default UserAuth;