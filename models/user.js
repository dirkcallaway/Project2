module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserName: DataTypes.STRING,
    password: DataTypes.STRING,
    Location: DataTypes.STRING,
    questComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Quest, {
      onDelete: "cascade"
    });
  };
  return User;
};
