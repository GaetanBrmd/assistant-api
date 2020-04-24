"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const computing_routes_1 = __importDefault(require("./routes/computing.routes"));
exports.default = () => {
    const app = express_1.Router();
    user_routes_1.default(app);
    computing_routes_1.default(app);
    return app;
};
//# sourceMappingURL=index.js.map