module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id: { type: DataTypes.INTEGER },
    home_team: { type: DataTypes.INTEGER },
    home_team_goals: { type: DataTypes.INTEGER },
    away_team: { type: DataTypes.INTEGER },
    away_team_goals: { type: DataTypes.INTEGER },
    in_progress: { type: DataTypes.INTEGER },
  }, {
    sequelize,
    modelName: 'matchs',
  });

  return Match;
};
