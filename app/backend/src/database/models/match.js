module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    homeTeam: { type: DataTypes.INTEGER, allowNull: false },
    homeTeamGoals: { type: DataTypes.INTEGER, allowNull: false },
    awayTeam: { type: DataTypes.INTEGER, allowNull: false },
    awayTeamGoals: { type: DataTypes.INTEGER, allowNull: false },
    inProgress: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'matchs',
  });

  return Match;
};
