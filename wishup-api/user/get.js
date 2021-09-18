import User from "../../model/User.js";
import moment from "moment";
export default async (req, res, next) => {
  try {
    if (req.params.username) {
      let username = req.params.username;
      let existingUser = await User.findOne({ user_name: username });
      if (!existingUser) throw new Error("User not exists with this name");
      else
        return res.status(200).json({
          user_name: existingUser.user_name,
          createdAt: moment(existingUser.createdAt).format(
            "YYYY-MM-DD hh:mm:ss"
          ),
        });
    } else throw new Error("Username not found");
  } catch (err) {
    return res.status(400).send({
      status: "FAILIURE",
      message: err.message,
    });
  }
};
