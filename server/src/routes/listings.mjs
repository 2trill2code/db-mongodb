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
  res.json({
    min: results[0].minBedrooms,
    max: results[0].maxBedrooms,
  });
});

// get all property types
router.get("/types", async (req, res) => {
  const collection = await db.collection("listingsAndReviews");
  const results = await collection.distinct("property_type");
  res.json({
    propertyTypes: results,
  });
});

// get all listings
// NEED TO FIX FOR PAGINATION
router.get("/all", async (req, res) => {
  const collection = await db.collection("listingsAndReviews");
  const results = await collection.find().toArray();
  res.json(results);
});

// get listings by {location, type, bedrooms}
router.get("/:location/:type/:bedrooms", async (req, res) => {
  const collection = await db.collection("listingsAndReviews");
  const query = {
    address: {
      $regex: req.params.location,
      $options: "i",
    },
    property_type: req.params.type,
    bedrooms: parseInt(req.params.bedrooms),
  };
  const results = await collection.find(query).toArray();
  res.json(results);
});

// get listing by id
router.get("/:id", (req, res) => {
  const collection = db.collection("listingsAndReviews");
  const query = { _id: req.params.id };
  const result = collection.findOne(query);
  res.json(result);
});

// PUT
// add booking to listing by id
router.put("/:id/addBooking", (req, res) => {});

// POST

export default router;
