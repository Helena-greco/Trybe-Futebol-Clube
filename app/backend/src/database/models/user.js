module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER },
    username: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};
