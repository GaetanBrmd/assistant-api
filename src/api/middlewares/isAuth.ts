import User from '../../models/user.model';

const attachSession = function (req, res, next) {
  if (!req.user) {
    res.send('You are not logged in !').status(401);
  } else {
    next();
  }
};

export default attachSession;
