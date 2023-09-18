import express from 'express'

const router = express.Router()

const profitCenterController = require('../controllers/profitCenterController');

router.get('/headoffice/:from/:to/:search', profitCenterController.getPcHeadOffice);
router.get('/bco/:from/:to/:search', profitCenterController.getPcBCO);
router.get('/branches/:from/:to', profitCenterController.getPcBranches);



module.exports = router