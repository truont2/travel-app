const router = require('express').Router();
const { Location, Traveller , Trip } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const travellerData = await Traveller.findAll({
      include: [Product],
    });
    res.status(200).json(travellerData);
  } catch(err) {
    res.status(500).json(err);
  }
});