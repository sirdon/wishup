import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "User is required"],
    unique: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);
