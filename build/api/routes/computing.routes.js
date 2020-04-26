"use strict";
//Liste de toutes les routes et de leur requirements avec celebrate
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = __importDefault(require("../middlewares"));
const celebrate_1 = require("celebrate");
const sheet_controller_1 = __importDefault(require("../../controllers/sheet.controller"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/computing', route);
    route.get('/sheet', middlewares_1.default.attachSession, middlewares_1.default.isAuth, sheet_controller_1.default.getSheets);
    route.post('/sheet', middlewares_1.default.attachSession, middlewares_1.default.isAuth, celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            titre: celebrate_1.Joi.string().required(),
            type: celebrate_1.Joi.string().required(),
            description: celebrate_1.Joi.string().required(),
        }),
    }), sheet_controller_1.default.addSheet);
    route.patch('/sheet', middlewares_1.default.attachSession, middlewares_1.default.isAuth, celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            _id: celebrate_1.Joi.string().required(),
            titre: celebrate_1.Joi.string().optional(),
            type: celebrate_1.Joi.string().optional(),
            description: celebrate_1.Joi.string().optional(),
        }),
    }), sheet_controller_1.default.updSheet);
    route.post('/sheet/del', middlewares_1.default.attachSession, middlewares_1.default.isAuth, celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            _id: celebrate_1.Joi.string().required(),
        }),
    }), sheet_controller_1.default.delSheet);
};
//# sourceMappingURL=computing.routes.js.map