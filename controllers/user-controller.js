const jwt = require("jsonwebtoken");
const { User } = require("../models");
const handle = require("../utile/promise-handler");

const secret ="supersecret";

const register = (req, res) =>{
  console.log(req.body);

  const { email, password, firstName, lastName } = req.body;

  User.Create({
    email,
    password,
    firstName,
    lastName
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

const login = async (req, res) => {

  const { email, password } = req.body;

  const [findUserErr, userInfo] = await handle(User.findOne({ email }));

  if(findUserErr){
    console.log(findUserErr);
    res.status(500).json({
      error: "The email is incorrect"
    })
  } else{
    const [pwErr, same] = await handle(userInfo.validPassword(password));

    if(pwErr){
      res.status(500).json({
        error: "Internal error, try again later"
      })
    } else if (!same){
      res.status(401).json({
        error:"Password Incorrect"
      });
    } else {
      const payload = {
        id: userInfo.id,
        email: userInfor.email
      };
      const token = jwt.sign(payload, secret, {
        expiresIn: "1h"
      });
      res.status(200).json(token);
    }
  }
};

const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(User.findOne({id: req.id}));

  if(userErr){
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  }
};

module.exports = {
  getUserProfile,
  login,
  register
};