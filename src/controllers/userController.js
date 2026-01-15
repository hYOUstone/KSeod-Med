import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json({ user: user.toSafeObject() });
};

export const listUsers = async (_req, res) => {
  const users = await User.find().select('email roles createdAt');
  return res.json({ users });
};
