import express from "express";

import Crop from "../models/Crop.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const crop = new Crop(req.body);
    await crop.save();
    res.status(201).json(crop);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: error.errors });
    }

    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const { email, limit } = req.query;
    const query = email ? { ownerEmail: email } : {};
    const crops = limit
      ? await Crop.find(query).limit(limit)
      : await Crop.find(query);
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const crop = await Crop.findOneAndUpdate({ _id: id }, updates, {
      new: true,
      runValidators: true,
    });
    if (crop) {
      res.json(crop);
    } else {
      res.status(404).json({ message: "Crop not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const crop = await Crop.findByIdAndDelete(id);
    if (crop) {
      res.json(crop);
    } else {
      res.status(404).json({ message: "Crop not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const crop = await Crop.findOne({ _id: id });
    if (crop) {
      res.json(crop);
    } else {
      res.status(404).json({ message: "Crop not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
