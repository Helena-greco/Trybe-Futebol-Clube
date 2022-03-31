import Clubs from '../models/club';
import Matchs from '../models/match';

/** Ref: https://sequelize.org/master/manual/eager-loading.html
 * options.include[].model.attributes
*/
const getAllMatchs = async () => {
  const getAll = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
      { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
    ],
  });

  return getAll;
};

// função para filtrar as partidas em progresso
const getInProgress = async (inProgress: string) => {
  const progress = inProgress === 'true';
  const matchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
    where: { inProgress: progress },
  });

  return matchs;
};

// função para verificar o time da casa e o time convidado

export default {
  getAllMatchs,
  getInProgress,
};
