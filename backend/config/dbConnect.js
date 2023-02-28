import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    //if the mongoose.connection.readystate >=1 else we have to connect mongoose .connect(process.env.DB_URI)
    return;
  }

  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
