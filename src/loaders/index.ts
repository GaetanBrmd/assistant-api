import expressLoader from './express.loader';
import jobLoader from './jobs.loader';
import dbLoader from './db.loader';
import dependencyInjector from './dependencyInjector';
import '../events/events';

export default async ({ expressApp }) => {
  //On load express et les routes
  await expressLoader({ app: expressApp });
  await jobLoader();
  //On pourrait avoir le loader de la DB qui instancie la connexion avec sequelize et la partage avec un dependency Injector
  const db = await dbLoader();
  await dependencyInjector();

  console.log('Loading terminé 👍 !');
};
