import {Schema, model, Document, models, ObjectId} from 'mongoose';

interface IUser extends Document {
  name?: string;
  email: string;
  profileImg: string;
  password: string;
  oauthProvider: string;
  role: string;
  links: [ObjectId];
}

const userSchema:Schema<IUser> = new Schema({
  name: {
    type: String,
    min: [3, 'Name must be at least 3 characters long'],
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already linked with another account'],
  },
  password: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  oauthProvider: {
    type: String,
    default: 'credentials',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, {timestamps: true});

const User = models.User || model('User', userSchema);

export default User