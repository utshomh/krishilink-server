import express from "express";

import Interest from "../models/Interest.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const interest = new Interest(req.body);
    await interest.save();
    res.status(201).json(interest);
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

router.get("/", async (_req, res) => {
  try {
    const { email, limit } = req.query;
    const query = email ? { ownerEmail: email } : {};
    const interests = limit
      ? await Interest.find(query).limit(limit)
      : await Interest.find(query);
    res.json(interests);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const interest = await Interest.findOneAndUpdate({ _id: id }, updates, {
      new: true,
      runValidators: true,
    });
    if (interest) {
      res.json(interest);
    } else {
      res.status(404).json({ message: "Interest not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const interest = await Interest.findByIdAndDelete(id);
    if (interest) {
      res.json(interest);
    } else {
      res.status(404).json({ message: "Interest not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const interest = await Interest.findOne({ _id: id });
    if (interest) {
      res.json(interest);
    } else {
      res.status(404).json({ message: "Interest not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
