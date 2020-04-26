"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Sheet = new mongoose_1.default.Schema({
    _userId: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
    },
    titre: {
        type: String,
        required: true,
        minglength: 1,
    },
    type: {
        type: String,
        required: true,
        minglength: 1,
    },
    description: {
        type: String,
        required: true,
        minglength: 1,
    },
    contenu: {
        type: String,
        required: true,
        minglength: 1,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Sheet', Sheet);
//# sourceMappingURL=sheet.model.js.map