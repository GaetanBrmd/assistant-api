import User from '../../models/user.model';

const isAuth = function (req, res, next) {
  if (!req.user) {
    res.send('You are not logged in !').status(401);
  } else {
    next();
  }
};

export default isAuth;
