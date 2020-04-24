"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../models/user.model"));
const attachSession = function (req, res, next) {
    if (req.session && req.session.user) {
        user_model_1.default.findOne({ email: req.session.user.email }, function (err, user) {
            if (user) {
                req.user = user;
                delete req.user.password; // delete the password from the session
                req.session.user = user; //refresh the session value
                res.locals.user = user;
            }
            // finishing processing the middleware and run the route
            next();
        });
    }
    else {
        next();
    }
};
exports.default = attachSession;
//# sourceMappingURL=attachSession copy.js.map