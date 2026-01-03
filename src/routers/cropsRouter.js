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
    const { email, limit, sort, order, search, page, type } = req.query;
    const query = {};

    if (email) query.ownerEmail = email;
    if (search) query.name = { $regex: search, $options: "i" };
    if (type) query.type = { $regex: `^${type}$`, $options: "i" };

    let sortField = sort || "createdAt";

    if (sortField === "cropName") sortField = "name";

    const sortOrder = order === "asc" ? 1 : -1;
    const itemsPerPage = parseInt(limit) || 8;
    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * itemsPerPage;

    const crops = await Crop.find(query)
      .sort({ [sortField]: sortOrder })
      .collation({ locale: "en", strength: 2 })
      .skip(skip)
      .limit(itemsPerPage);

    const totalCrops = await Crop.countDocuments(query);

    res.json({
      crops,
      totalCrops,
      totalPages: Math.ceil(totalCrops / itemsPerPage),
      currentPage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || error });
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
    console.log(crop);
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
