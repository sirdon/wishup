import User from "../../model/User.js";
import Subscription from "../../model/Subscription.js";
import moment from "moment";
const get = async (req, res, next) => {
  try {
    if (req.params.username) {
      let username = req.params.username;
      let existingUser = await User.findOne({ user_name: username });
      if (!existingUser) throw new Error("User not exists with this user_name");
      else {
        let subscriptionList = await Subscription.find(
          {
            userId: existingUser._id,
          },
          { _id: 0, amount: 0, createdAt: 0, userId: 0, __v: 0 }
        );
        subscriptionList = subscriptionList.map((subscription) => {
          return {
            plan_id: subscription.plan_id,
            start_date: moment(subscription.start_date).format("YYYY-MM-DD"),
            valid_till: moment(subscription.valid_till).format("YYYY-MM-DD"),
          };
        });
        return res.status(200).json({
          subscriptionList,
        });
      }
    } else throw new Error("Username not found");
  } catch (err) {
    return res.status(400).send({
      status: "FAILIURE",
      message: err.message,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    if (req.params.username && req.params.date) {
      let username = req.params.username;
      let date = req.params.date;
      let existingUser = await User.findOne({ user_name: username });
      if (!existingUser) throw new Error("User not exists with this user_name");
      else {
        let subscription = await Subscription.findOne(
          {
            userId: existingUser._id,
            start_date: { $lte: new Date(date) },
            valid_till: { $gte: new Date(date) },
          },
          { _id: 0, amount: 0, createdAt: 0, userId: 0, __v: 0 }
        );
        if (!subscription) throw new Error("No plan active on this date");
        let days_left = moment(subscription.valid_till).diff(
          moment(date),
          "days"
        );
        return res.status(200).json({
          plan_id: subscription.plan_id,
          days_left,
        });
      }
    } else throw new Error("Username or date missing");
  } catch (err) {
    return res.status(400).send({
      status: "FAILIURE",
      message: err.message,
    });
  }
};
export { get, getUser };
