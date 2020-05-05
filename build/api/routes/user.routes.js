"use strict";
//Liste de toutes les routes et de leur requirements avec celebrate
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = __importDefault(require("../middlewares"));
const celebrate_1 = require("celebrate");
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/user', route);
    route.post('/login', user_controller_1.default.login);
    route.post('/new', celebrate_1.celebrate({ body: celebrate_1.Joi.object({ email: celebrate_1.Joi.string().email().required(), password: celebrate_1.Joi.string().required() }) }), user_controller_1.default.register);
    route.get('/logout', middlewares_1.default.attachSession, middlewares_1.default.isAuth, user_controller_1.default.logout);
    route.get('', middlewares_1.default.attachSession, middlewares_1.default.isAuth, (req, res) => {
        res.send(true);
    });
};
//# sourceMappingURL=user.routes.js.map