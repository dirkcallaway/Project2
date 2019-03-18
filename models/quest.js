module.exports = function(sequelize, DataTypes) {
  var Quest = sequelize.define("Quest", {
    questName: DataTypes.STRING,
    questDescribe: DataTypes.TEXT,
    Location: DataTypes.STRING,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  Quest.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Quest.belongsTo(models.User, {
      foreignKey: { allowNull: true }
    });
  };
  return Quest;
};
