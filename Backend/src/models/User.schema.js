import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const UserSchema = new Schema({
  Name: { type: String },
  Userame: { type: String },
  Password: { type: String },
  Email: { type: String },
  Telefono: { type: String },
});
UserSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('User', UserSchema);
