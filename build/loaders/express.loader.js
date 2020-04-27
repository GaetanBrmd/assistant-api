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
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const client_sessions_1 = __importDefault(require("client-sessions"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    //Status
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.use(cors_1.default({ origin: ['http://localhost:4200', 'https://assistant-583d6.web.app/'], credentials: true }));
    app.use(helmet_1.default());
    app.use(body_parser_1.default.json());
    app.use(client_sessions_1.default({
        cookieName: 'session',
        secret: config_1.default.session_secret,
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
        resave: false,
        saveUninitialized: true,
    }));
    app.use('', api_1.default());
    //Error handlers
    app.use((err, req, res, next) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
    console.log('Express loaded 🔥 !');
});
//# sourceMappingURL=express.loader.js.map