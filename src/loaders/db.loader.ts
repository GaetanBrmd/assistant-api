import config from '../config';
const mongoose = require('mongoose');

export default async () => {
  mongoose.Promise = global.Promise;

  await mongoose.connect(config.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (mongoose.connection.readyState === 1) {
    console.log('Connected to MongoDB successfuly !');
  } else {
    throw new Error('Error trying to connect to MongoDB 🙌');
  }

  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  console.log('Database loaded 🔥 !');
};
