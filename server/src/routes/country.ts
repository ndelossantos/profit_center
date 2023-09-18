import express, { Request, Response } from 'express'

const router = express.Router()

const countryController = require('../controllers/countryController');

// admin fetch
router.get('/', countryController.getCountries);


module.exports = router