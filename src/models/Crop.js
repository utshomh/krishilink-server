import mongoose, { Schema } from "mongoose";

const cropSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    pricePerUnit: { type: Number, required: true },
    unit: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },

    ownerEmail: { type: String, required: true },
    ownerName: { type: String, required: true },
  },
  { timestamps: true }
);

const Crop = mongoose.model("Crop", cropSchema);

export default Crop;
