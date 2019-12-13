const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

router.post('/proses', homeController.prosesPost);
// router.get('/proses', homeController.prosesGet);
// router.get('/proses/:id', homeController.prosesParams);

module.exports = router;