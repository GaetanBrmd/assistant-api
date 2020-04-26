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
const sheet_model_1 = __importDefault(require("../models/sheet.model"));
const getSheets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield sheet_model_1.default.find({ _userId: req.session.user._id }).select('titre type description contenu'));
});
const addSheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body._userId = req.session.user._id;
    const newSheet = new sheet_model_1.default(req.body);
    yield newSheet
        .save()
        .then(() => {
        res.json(newSheet);
    })
        .catch((e) => {
        res.status(400).json(e);
    });
});
const updSheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield sheet_model_1.default.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
        .then((updated) => {
        res.json(updated);
    })
        .catch((e) => {
        res.status(400).json(e);
    });
});
const delSheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sheet_model_1.default.deleteOne({ _id: req.body._id })
        .then(() => {
        res.json('Deleted');
    })
        .catch((e) => {
        res.status(400).json(e);
    });
});
exports.default = { getSheets, addSheet, updSheet, delSheet };
//# sourceMappingURL=sheet.controller.js.map