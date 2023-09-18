import express from 'express'

const router = express.Router()

const packagesController = require('../controllers/packagesController');

router.get('/pkgmain', packagesController.getPackagesMain);
router.get('/pkgsub/:mainid', packagesController.getPackagesSub);
router.get('/pkgcomm/sub/:subid', packagesController.getPackagesCommonBySub);


module.exports = router