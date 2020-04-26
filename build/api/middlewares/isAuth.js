"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuth = function (req, res, next) {
    if (!req.user) {
        res.send('You are not logged in !').status(401);
    }
    else {
        next();
    }
};
exports.default = isAuth;
//# sourceMappingURL=isAuth.js.map