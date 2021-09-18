import User from "../../model/User.js";
export default async (req, res, next) => {
  try {
    if (req.params.username) {
      let username = req.params.username;
      let existingUser = await User.findOne({ user_name: username });
      if (existingUser) throw new Error("User with this name already exists");
      const user = new User({ user_name: username });
      user.save((err, data) => {
        if (err) {
          return res.status(400).json({
            status: "FAILIURE",
            message: "Error while saving user data",
          });
        }
        return res.status(200).json({
          status: "SUCCESS",
        });
      });
    } else throw new Error("Username not found");
  } catch (err) {
    return res.status(400).send({
      status: "FAILIURE",
      message: err.message,
    });
  }
};
