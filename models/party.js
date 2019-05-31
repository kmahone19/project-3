const User = require("./User")

module.exports = function(sequelize, DataTypes){
  var Party = sequelize.define("Party", {
    party_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    party_lvl: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    }
  },
  {
    timestamps: false
  });

  Party.belongsTo(User);

  return Party;
};