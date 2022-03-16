module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    id: { type: DataTypes.INTEGER },
    club_name: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'clubs',
  });

  return Club;
};
