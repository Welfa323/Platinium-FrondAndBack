const newsletterController = require('../controller/newsletter');

const express = require('express')
const router = express.Router()

router.post('/', newsletterController.create)
router.get('/', newsletterController.all)
router.delete('/:id', newsletterController.remove)

module.exports = router;