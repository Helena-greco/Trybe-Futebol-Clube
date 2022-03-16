import { Model, DataTypes } from 'sequelize';
import db from '.';
import Clubs from './club';

class Matchs extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: number;
}

Matchs.init({
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
  underscored: true,
  sequelize: db,
  modelName: 'matchs',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Clubs.belongsTo(Matchs, { foreignKey: 'id', as: 'homeTeam' });
Clubs.belongsTo(Matchs, { foreignKey: 'id', as: 'awayTeam' });

Matchs.hasMany(Clubs, { foreignKey: 'id', as: 'homeTeam' });
Matchs.hasMany(Clubs, { foreignKey: 'id', as: 'awayTeam' });

export default Matchs;
