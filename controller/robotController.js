const { primsa } = require('../index')
const { Robot } = require('../models/robot')
const robot = new Robot(primsa)

exports.getAllRobots = async (req, res) => {
    try {
        const robots = await robot.GetAllRobots()
        if (!robots) {
            return res.status(200).json({ Robots: [] })
        }
        return res.status(200).json({ Robots: robots })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robots: []
        })
    }
}

exports.getRobotByID = async (req, res) => {
    try {
        const robotID = req.params
        const robot = await robot.GetRobotByID(robotID)
        if (!robot) {
            return res.status(200).json({ Robot: [] })
        }
        return res.status(200).json({ Robot: robot })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robot: []
        })
    }
}

exports.getRobotByAddress = async (req, res) => {
    try {
        const robotAddress = req.params
        const robot = await robot.GetRobotByAddress(robotAddress)
        if (!robot) {
            return res.status(200).json({ Robot: [] })
        }
        return res.status(200).json({ Robot: robot })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robot: []
        })
    }
}

exports.getUserRobots = async (req, res) => {
    try {
        const userID = req.params
        const robots = await robot.GetUserRobots(userID)
        if (!robots) {
            return res.status(200).json({ Robots: [] })
        }
        return res.status(200).json({ Robots: robots })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robots: []
        })
    }
}

exports.getAllConnectedRobots = async (req, res) => {
    try {
        const robots = await robot.GetAllConnectedRobots()
        if (!robots) {
            return res.status(200).json({ Robots: [] })
        }
        return res.status(200).json({ Robots: robots })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robots: []
        })
    }
}

exports.getUserConnectedRobots = async (req, res) => {
    try {
        const userID = req.params
        const robots = await robot.GetUserConnectedRobots(userID)
        if (!robots) {
            return res.status(200).json({ Robots: [] })
        }
        return res.status(200).json({ Robots: robots })
    } catch (err) {
        return res.status(500).json({
            Error: err.message
            , Robots: []
        })
    }
}