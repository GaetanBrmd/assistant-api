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
const express_loader_1 = __importDefault(require("./express.loader"));
const jobs_loader_1 = __importDefault(require("./jobs.loader"));
const db_loader_1 = __importDefault(require("./db.loader"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
require("../events/events");
exports.default = ({ expressApp }) => __awaiter(void 0, void 0, void 0, function* () {
    //On load express et les routes
    yield express_loader_1.default({ app: expressApp });
    yield jobs_loader_1.default();
    //On pourrait avoir le loader de la DB qui instancie la connexion avec sequelize et la partage avec un dependency Injector
    const db = yield db_loader_1.default();
    yield dependencyInjector_1.default();
    console.log('Loading terminé 👍 !');
});
//# sourceMappingURL=index.js.map