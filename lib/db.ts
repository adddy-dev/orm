import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    if (!process.env.MONGODB_URI) {
      throw new Error('Mongo URI is not defined in environment variables');
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
    console.log('MongoDB Connected');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    } else {
      console.error('An unknown error occurred during MongoDB connection');
    }
  }
};

export default connectDB;
