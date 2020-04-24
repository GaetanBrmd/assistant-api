"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attachSession = function (req, res, next) {
    if (!req.user) {
        res.send('You are not logged in !').status(401);
    }
    else {
        next();
    }
};
exports.default = attachSession;
//# sourceMappingURL=isAuth.js.map