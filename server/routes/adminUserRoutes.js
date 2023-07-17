const express = require('express')
const adminUserControllers = require('../controllers/adminUserControllers')

const router = express.Router()

router.post('/admins/add', adminUserControllers.addAdmin)

router.get('/admins/get', adminUserControllers.getAdmins)

router.get('/admins/get/:id', adminUserControllers.getSpecAdmin)

router.get('/admins/search', adminUserControllers.searchAdmins)

router.get('/admins/find', adminUserControllers.findAdmin)

module.exports = router;