const adminUserModel = require('../models/adminUserModel')

exports.addAdmin = (req, res) => {
    let newAdmin = new adminUserModel(req.body)

    newAdmin.save().then(() => {
        return res.status(200).json({
            success: "Stock order details are saved successfully"
        })
    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    })
}

exports.getAdmins = (req, res) => {
    adminUserModel.find().exec().then((results) => {
        return res.status(200).json({
            results: results
        })

    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    })
}

exports.getSpecAdmin = (req, res) => {
    adminUserModel.findById(req.params.id).exec().then((results) => {
        return res.status(200).json({
            results: results
        })

    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    })
}

exports.searchAdmins = (req, res) => {
    const searchQuery = req.query.q
    const regex = new RegExp(searchQuery, 'i')

    adminUserModel.find({ $or: [{ user_id: regex }, { user_name: regex }, { first_name: regex }, { middle_name: regex }, { last_name: regex }, { middle_name: regex }] }).sort({ _id: -1 }).exec().then((results) => {
        return res.status(200).json({
            results: results
        })

    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    })
}

exports.findAdmin = (req, res) => {
    const searchQuery = req.query.q

    adminUserModel.find({ $or: [{ user_name: searchQuery }, { email: searchQuery }] }).sort({ _id: -1 }).exec().then((results) => {
        return res.status(200).json({
            results: results
        })

    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    })
}