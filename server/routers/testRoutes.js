const express = require('express');
const { testController } = require('../controllers/testControllers.js');

const router = express.Router()

router.get('/test', testController)

module.exports = router;