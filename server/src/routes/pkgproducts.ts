import express from 'express'

const router = express.Router()

const pkgProductsController = require('../controllers/pkgProductsController');

router.get('/:commid', pkgProductsController.getPkgproductsByComm);


module.exports = router