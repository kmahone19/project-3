const bcrypt = require("bcrypt");

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
  },
  {
    timestamps: false
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

  User.associate = function(models) {
    User.hasMany(models.Party);
  }

  return User;
}