//Ici on gère les status, la mise en forme de la réponse et les appels aux fonctions des services
import UserService from '../services/user.service';
import User from '../models/user.model';

const login = async (req, res) => {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      res.send("Can't find this user !").status(401);
    } else {
      if (req.body.password === user.password) {
        // sets a cookie with the user's info
        req.session.user = user;
        res.send('Logged in !').status(200);
      } else {
        res.send('Wrong credentials...').status(401);
      }
    }
  });
};

const register = async (req, res) => {
  const newUser = new User(req.body);

  await newUser
    .save()
    .then(() => {
      res.send(newUser);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const logout = async (req, res) => {
  if (req.session && req.session.user) {
    req.session.reset();
    res.status(200).send('Logout');
  }
};

export default {
  login,
  register,
  logout,
};
