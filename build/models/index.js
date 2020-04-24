"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const sheet_model_1 = __importDefault(require("./sheet.model"));
const models = { User: user_model_1.default, Sheet: sheet_model_1.default };
exports.default = models;
//# sourceMappingURL=index.js.map