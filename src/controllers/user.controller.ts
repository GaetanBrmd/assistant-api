//Ici on gère les status, la mise en forme de la réponse et les appels aux fonctions des services
import UserService from '../services/user.service';
import User from '../models/user.model';

const login = async (req, res) => {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      res.status(401).json({
        errorMessage: "Permission denied! Can't find this user !",
      });
    } else {
      if (req.body.password === user.password) {
        // sets a cookie with the user's info
        req.session.user = user;
        res.json('Logged in !').status(200);
      } else {
        res.status(401).json({
          errorMessage: 'Permission denied! Wrong credentials !',
        });
      }
    }
  });
};

const register = async (req, res) => {
  console.log('register');
  const newUser = new User(req.body);

  await newUser
    .save()
    .then(() => {
      res.json(newUser);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const logout = async (req, res) => {
  console.log('Logout !');
  if (req.session && req.session.user) {
    req.session.reset();
    res.status(200).json('Logout');
  }
};

export default {
  login,
  register,
  logout,
};
