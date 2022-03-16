module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    clubName: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'clubs',
  });

  return Club;
};
