const router = require('express').Router();
const { Location, Traveller , Trip } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const tripData = await Trip.findAll({
      include: [Product],
    });
    res.status(200).json(tripData);
  } catch(err) {
    res.status(500).json(err);
  }
});