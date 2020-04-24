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
const user_model_1 = __importDefault(require("../models/user.model"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    user_model_1.default.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            res.status(401).json({
                errorMessage: "Permission denied! Can't find this user !",
            });
        }
        else {
            if (req.body.password === user.password) {
                // sets a cookie with the user's info
                req.session.user = user;
                res.json('Logged in !').status(200);
            }
            else {
                res.status(401).json({
                    errorMessage: 'Permission denied! Wrong credentials !',
                });
            }
        }
    });
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_model_1.default(req.body);
    yield newUser
        .save()
        .then(() => {
        res.json(newUser);
    })
        .catch((e) => {
        res.status(400).json(e);
    });
});
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Logout !');
    if (req.session && req.session.user) {
        req.session.reset();
        res.status(200).json('Logout');
    }
});
exports.default = {
    login,
    register,
    logout,
};
//# sourceMappingURL=user.controller.js.map