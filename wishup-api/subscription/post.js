import User from "../../model/User.js";
import Subscription from "../../model/Subscription.js";
import moment from "moment";
import plans from "../../assets/plans.js";
export default async (req, res, next) => {
  try {
    let data = req.body;
    if (!data.user_name || !data.plan_id || !data.start_date)
      throw new Error("Data missing, Please provide missing data");

    const existingUser = await User.findOne({ user_name: data.user_name });

    if (!existingUser)
      throw new Error(
        "User not exists with this name, Please create user first"
      );

    if (!plans[data.plan_id]) throw new Error("Invalid plan_id");
    let subscriptionData = {
      userId: existingUser._id,
      plan_id: data.plan_id,
      start_date: data.start_date,
      valid_till:
        data.plan_id == "FREE"
          ? moment().add(100, "years")
          : moment(data.start_date).add(plans[data.plan_id].validity, "days"),
      amount: plans[data.plan_id].cost,
    };
    const subscription = new Subscription(subscriptionData);
    subscription.save((err, data) => {
      if (err) {
        return res.status(400).json({
          status: "FAILIURE",
          message: "Erroe while saving subscription",
        });
      }
      res.status(200).json({
        status: "SUCCESS",
        amount: -data.amount,
      });
    });
  } catch (err) {
    return res.status(400).send({
      status: "FAILIURE",
      message: err.message,
    });
  }
};
