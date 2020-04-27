"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv_1.default.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env config file  ⚠️");
}
exports.default = {
    port: parseInt(process.env.PORT, 10),
    database_url: process.env.DATABASE_URL,
    session_secret: process.env.SESSION_SECRET,
};
//# sourceMappingURL=index.js.map