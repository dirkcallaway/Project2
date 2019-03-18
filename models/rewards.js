module.exports = function(sequelize, DataTypes) {
  var Reward = sequelize.define("Reward", {
    rewardName: DataTypes.STRING,
    rewardDescribe: DataTypes.TEXT,
    rewardURL: DataTypes.STRING
  });
  return Reward;
};
