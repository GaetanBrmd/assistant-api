import express from 'express';
import config from './config';
const fs = require('fs');
const https = require('https');

async function startServer() {
  /*
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  };*/

  const app = express();

  //On va attendre le chargement de tous les loaders
  await require('./loaders').default({ expressApp: app });

  //var httpsServer = https.createServer(options, app);

  app.listen(config.port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`
          ################################################
               🛡️  Server listening on port: ${config.port} 🛡️ 
          ################################################
          `);
  });
}

startServer();
