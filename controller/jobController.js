const prisma = require('../index')
const Job = require('../models/job')
const jobModel = new Job(prisma)

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await jobModel.GetAllJobs()
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getJobByID = async (req, res) => {
    try {
        const { jobID } = req.params
        const job = await jobModel.GetJobByID(parseInt(jobID))
        if (!job) {
            return res.status(200).json({ Job: [] })
        }
        return res.status(200).json({ Job: job })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Job: []
        })
    }
}

exports.getUserJobs = async (req, res) => {
    try {
        const { userID } = req.params
        const jobs = await jobModel.GetUserJobs(parseInt(userID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getRobotJobs = async (req, res) => {
    try {
        const { robotID } = req.params
        const jobs = await jobModel.GetRoobtJobs(parseInt(robotID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getUserPendingJobs = async (req, res) => {
    try {
        const { userID } = req.params
        const jobs = await jobModel.GetUserPendingJobs(parseInt(userID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getUserExecutedJobs = async (req, res) => {
    try {
        const { userID } = req.params
        const jobs = await jobModel.GetUserExecutedJobs(parseInt(userID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getRobotPendingJobs = async (req, res) => {
    try {
        const { robotID } = req.params
        const jobs = await jobModel.GetRobotPendingJobs(parseInt(robotID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}

exports.getRobotExecutedJobs = async (req, res) => {
    try {
        const { robotID } = req.params
        const jobs = await jobModel.GetRobotExecutedJobs(parseInt(robotID))
        if (!jobs) {
            return res.status(200).json({ Jobs: [] })
        }
        return res.status(200).json({ Jobs: jobs })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Jobs: []
        })
    }
}