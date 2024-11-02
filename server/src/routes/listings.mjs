// ** listings/ routes **

import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

// GET
// get min and max bedrooms
router.get("/bedrooms", async (req, res) => {
  const collection = await db.collection("listingsAndReviews");
  const results = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          minBedrooms: { $min: "$bedrooms" },
          maxBedrooms: { $max: "$bedrooms" },
        },
      },
    ])
    .toArray();
  res.send(results);
});

// get all property types
router.get("/types", (req, res) => {});

// get all listings
router.get("/all", (req, res) => {});

// get listings by {location, type, bedrooms}
router.get("/:location/:type/:bedrooms", (req, res) => {});

// get listing by id
router.get("/:id", (req, res) => {});

// PUT
// add booking to listing by id
router.put("/:id/addBooking", (req, res) => {});

// POST

export default router;
