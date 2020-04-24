import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    password: String,
  },
  { timestamps: true },
);

export default mongoose.model<mongoose.Document>('User', User);
