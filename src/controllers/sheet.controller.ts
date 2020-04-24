import Sheet from '../models/sheet.model';

const getSheets = async (req, res) => {
  res.send(await Sheet.find({ _userId: req.session.user._id }));
};

const addSheet = async (req, res) => {
  req.body._userId = req.session.user._id;

  const newSheet = new Sheet(req.body);
  await newSheet
    .save()
    .then(() => {
      res.send(newSheet);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const updSheet = async (req, res) => {
  await Sheet.findOneAndUpdate({ _id: req.body._id }, req.body)
    .then(() => {
      res.send('Updated');
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

const delSheet = async (req, res) => {
  Sheet.deleteOne({ _id: req.body._id })
    .then(() => {
      res.send('Deleted');
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};

export default { getSheets, addSheet, updSheet, delSheet };
