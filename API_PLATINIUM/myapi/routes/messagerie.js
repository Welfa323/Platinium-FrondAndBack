const messagerieController = require("../controller/messagerie")
const express = require('express')

const router = express.Router()


router.post('/', messagerieController.create)
router.get('/', messagerieController.all)
router.delete('/:id', messagerieController.remove)

module.exports = router