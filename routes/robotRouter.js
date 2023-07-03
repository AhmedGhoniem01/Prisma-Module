const express = require('express')
const router = express.Router()
const robotController = require('../controller/robotController')

router.get('/get/id/:robotID', robotController.getRobotByID)
router.get('/get/address/:robotAdress', robotController.getRobotByAddress)
router.get('/get/user/:userID', robotController.getUserRobots)
router.get('/get/connected/user/:userID', robotController.getUserConnectedRobots)
router.get('/get/connected', robotController.getAllConnectedRobots)
router.get('/get/', robotController.getAllRobots)

module.exports = router