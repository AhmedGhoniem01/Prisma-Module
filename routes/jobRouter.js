const express = require('express')
const router = express.Router()
const jobController = require('../controller/jobController')

router.get('/get/id/:jobID', jobController.getJobByID)
router.get('/get/user/:userID', jobController.getUserJobs)
router.get('/get/robot/:robotID', jobController.getRobotJobs)
router.get('/get/pending/user/:userID', jobController.getUserPendingJobs)
router.get('/get/executed/user/:userID', jobController.getUserExecutedJobs)
router.get('/get/pending/robot/:robotID', jobController.getRobotPendingJobs)
router.get('/get/executed/robot/:robotID', jobController.getRobotExecutedJobs)
router.get('/get/', jobController.getAllJobs)

module.exports = router