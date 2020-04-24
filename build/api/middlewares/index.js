"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attachSession_1 = __importDefault(require("./attachSession"));
const isAuth_1 = __importDefault(require("./isAuth"));
exports.default = {
    attachSession: attachSession_1.default,
    isAuth: isAuth_1.default,
};
//# sourceMappingURL=index.js.map