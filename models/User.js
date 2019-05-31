const bcrypt = require("bcrypt");
const Party = require("./party")

module.exports = function(sequelize, DataTypes){
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.prototype.validPassword = function(password){
    const document = this;
    return new Promise((resolve, reject) =>  {
      bcrypt.compare(password, document.password, function compareCallback(err, same){
        if(err){
          console.log(err);
          reject(err);
        } else {
          resolve(same);
        }
      });
    }) ;
  };

  User.beforeCreate(function(user){
    user.password = bcrypt.hashSync(user.password,  bcrypt.genSaltSync(10), null);
  });

  User.hasMany(Party);

  return User;
}