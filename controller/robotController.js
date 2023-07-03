const prisma = require('../index')
const Robot = require('../models/robot')
const robotModel = new Robot(prisma)

exports.getAllRobots = async (req, res) => {
    try {
        const robots = await robotModel.GetAllRobots()
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
        const { robotID } = req.params
        const robot = await robotModel.GetRobotByID(parseInt(robotID))
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
        const { robotAddress } = req.params;
        const robot = await robotModel.GetRobotByAddress(robotAddress);
        if (!robot) {
            return res.status(200).json({ Robot: [] });
        }
        return res.status(200).json({ Robot: robot });
    } catch (err) {
        return res.status(500).json({
            Error: err.message,
            Robot: []
        });
    }
};


exports.getUserRobots = async (req, res) => {
    try {
        const { userID } = req.params
        const robots = await robotModel.GetUserRobots(parseInt(userID))
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
        const robots = await robotModel.GetAllConnectedRobots()
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
        const { userID } = req.params
        const robots = await robotModel.GetUserConnectedRobots(parseInt(userID))
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