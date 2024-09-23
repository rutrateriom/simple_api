const express = require('express');
const router = express.Router();
const commercialController = require('../controllers/commercialController');

router.get('/', commercialController.getAllCommercials);
router.post('/', commercialController.addCommercial);
router.delete('/:id', commercialController.deleteCommercial);

module.exports = router;
