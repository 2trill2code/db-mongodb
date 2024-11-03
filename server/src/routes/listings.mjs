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
// /listings?location=[string]&type=[string]&bedrooms=[int]
router.get("/", async (req, res) => {
  const collection = await db.collection("listingsAndReviews");
  const query = {
    "address.market": {
      $regex: req.query.location,
      $options: "i",
    },
  };
  if (req.query.type) query.property_type = req.query.type;
  if (req.query.bedrooms) query.bedrooms = req.query.bedrooms;

  const results = await collection.find(query).toArray();
  const mappedResults = results.map((listing) => {
    return {
      _id: listing._id,
      name: listing.name,
      summary: listing.summary,
      dailyPrice: parseInt(listing.price.toString()),
      reviewScore: listing.review_scores.review_scores_rating,
      location: listing.address.market,
      type: listing.property_type,
      bedrooms: listing.bedrooms,
    };
  });

  res.json(mappedResults);
});

// get listing by id
router.get("/:id", async (req, res) => {
  const collection = db.collection("listingsAndReviews");

  const result = await collection.findOne({ _id: req.params.id });
  const mappedResult = {
    _id: result._id,
    name: result.name,
    summary: result.summary,
    dailyPrice: parseInt(result.price.toString()),
    reviewScore: result.review_scores.review_scores_rating,
    location: result.address.market,
    type: result.property_type,
    bedrooms: result.bedrooms,
  };
  res.json(mappedResult);
});

// PUT
// add booking to listing by id
router.put("/:id/addBooking", (req, res) => {});

// POST

export default router;
