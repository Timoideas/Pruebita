import UserSchema from '../models/User.schema';

export async function GETusers(req, res) {
  try {
    const userDB = await UserSchema.find();
    res.status(200).json({ ok: true, data: userDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETuser(req, res) {
  try {
    const { id } = req.params;
    const userDB = await UserSchema.findById(id);
    res.status(200).json({ ok: true, data: userDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETuser(req, res) {
  try {
    const { id } = req.params;
    const userDB = await UserSchema.findById(id);
    res.status(200).json({ ok: true, data: userDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTuser(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, ['']);
    const user = await UserSchema.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: user });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEuser(req, res) {
  const { id } = req.body;
  UserSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
