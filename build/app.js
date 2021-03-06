"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const fs = require('fs');
const https = require('https');
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        const options = {
          key: fs.readFileSync('key.pem'),
          cert: fs.readFileSync('cert.pem'),
        };*/
        const app = express_1.default();
        //On va attendre le chargement de tous les loaders
        yield require('./loaders').default({ expressApp: app });
        //var httpsServer = https.createServer(options, app);
        app.listen(config_1.default.port, (err) => {
            if (err) {
                return console.error(err);
            }
            return console.log(`
          ################################################
               🛡️  Server listening on port: ${config_1.default.port} 🛡️ 
          ################################################
          `);
        });
    });
}
startServer();
//# sourceMappingURL=app.js.map