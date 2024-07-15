const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

router.post('/', pointController.createPoint);
router.get('/', pointController.getAllPoints);
router.get('/:id', pointController.getPointById);
router.delete('/:id', pointController.deletePoint);

module.exports = router;