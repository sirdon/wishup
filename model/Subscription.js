import mongoose from "mongoose";
const SubscriptionSchema = new mongoose.Schema({
  plan_id: {
    type: String,
    required: [true, "Plan_id is required"],
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  start_date: { type: Date, default: Date.now },
  valid_till: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
});

export default mongoose.model("Subscription", SubscriptionSchema);
