import mongoose, { Schema } from "mongoose";

const interestSchema = new Schema(
  {
    cropId: { type: Schema.Types.ObjectId, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    quantity: { type: Number, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
