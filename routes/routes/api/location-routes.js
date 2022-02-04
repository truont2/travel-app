const router = require('express').Router();
const { Location, Traveller , Trip } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const locationData = await Location.findAll({
      include: [Product],
    });
    res.status(200).json(locationData);
  } catch(err) {
    res.status(500).json(err);
  }
});
