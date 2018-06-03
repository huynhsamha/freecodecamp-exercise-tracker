const express = require('express');
const router = express.Router();

const exercise = require('./exercise');

router.use('/exercise', exercise);

module.exports = router;