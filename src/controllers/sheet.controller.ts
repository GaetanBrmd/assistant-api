import Sheet from '../models/sheet.model';

const getSheets = async (req, res) => {
  res.json(await Sheet.find({ _userId: req.session.user._id }).select('titre type description contenu'));
};

const addSheet = async (req, res) => {
  req.body._userId = req.session.user._id;

  const newSheet = new Sheet(req.body);
  await newSheet
    .save()
    .then(() => {
      res.json(newSheet);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const updSheet = async (req, res) => {
  await Sheet.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
    .then((updated) => {
      res.json(updated);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const delSheet = async (req, res) => {
  Sheet.deleteOne({ _id: req.body._id })
    .then(() => {
      res.json('Deleted');
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

export default { getSheets, addSheet, updSheet, delSheet };
