module.exports = function(sequelize, DataTypes){
  var Monsters = sequelize.define("Monsters",{
    Name: {
      type: DataTypes.STRING
    },
    Size:{
      type: DataTypes.STRING
    },
    Type: {
      type: DataTypes.STRING
    },
    Align:{
      type: DataTypes.STRING
    },
    AC: {
      type: DataTypes.INTEGER
    },
    HP:{
      type: DataTypes.INTEGER
    },
    Speeds:{
      type: DataTypes.STRING
    },
    STR:{
      type: DataTypes.INTEGER
    },  
    DEX: {
      type: DataTypes.INTEGER
    },
    CON: {
      type: DataTypes.INTEGER
    },
    INT : {
      type: DataTypes.INTEGER
    },
    WIS: {
      type: DataTypes.INTEGER
    },
    CHA : {
      type: DataTypes.INTEGER
    },
    SavThrows:{
      type: DataTypes.STRING
    },
    Skills: {
      type: DataTypes.STRING
    },
    Senses: {
      type: DataTypes.STRING
    },
    Languages:{
      type: DataTypes.STRING
    },
    CR: {
      type: DataTypes.DECIMAL(10, 2)
    },
    Font: {
      type: DataTypes.STRING
    },
    Author:{
      type: DataTypes.STRING
    }
});
return Monsters;
};