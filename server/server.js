const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const adminUserRoutes = require('./routes/adminUserRoutes')

app.use('/adminApp', adminUserRoutes)

const PORT = 5000
const DB_URL = 'mongodb+srv://nilanka_sn:Sanjana2001@personinfoapp.jasbbsj.mongodb.net/persons_info?retryWrites=true&w=majority'

mongoose.connect(DB_URL).then(() => {
    console.log('Database was connected')
}).catch((err) => {
    console.log('Database was not connected, Error orccured')
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})