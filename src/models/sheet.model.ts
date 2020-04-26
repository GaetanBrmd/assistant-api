import mongoose from 'mongoose';

const Sheet = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    titre: {
      type: String,
      required: true,
      minglength: 1,
    },
    type: {
      type: String,
      required: true,
      minglength: 1,
    },
    description: {
      type: String,
      required: true,
      minglength: 1,
    },
    contenu: {
      type: String,
      required: true,
      minglength: 1,
    },
  },
  { timestamps: true },
);

export default mongoose.model<mongoose.Document>('Sheet', Sheet);
