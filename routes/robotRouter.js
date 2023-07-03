const express = require('express')
const router = express.Router()
const robotController = require('../controller/robotController')

router.get('/get/user/:userID', robotController.GetUserRobots)
router.get('/get/id/:robotID', robotController.GetRobotByID)
router.get('/get/address/:robotAdress', robotController.GetRobotByAddress)
router.get('/get/', robotController.GetAllRobots)
router.get('/get/connected/user/:userID', robotController.GetUserConnectedRobots)
router.get('/get/connected', robotController.GetAllConnectedRobots)

module.exports = router