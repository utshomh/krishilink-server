import express from "express";

import Crop from "../models/Crop.js";
import Interest from "../models/Interest.js";

const router = express.Router();

router.get("/overview", async (req, res) => {
  try {
    const crops = await Crop.find({});
    const interests = await Interest.find({});

    const totalCrops = crops.length;
    const totalInterests = interests.length;
    const totalQuantity = crops.reduce((sum, c) => sum + c.quantity, 0);

    const chartData = crops.map((c) => ({
      name: c.name,
      stock: c.quantity,
    }));

    res.json({
      totalCrops,
      totalInterests,
      totalQuantity,
      chartData,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
