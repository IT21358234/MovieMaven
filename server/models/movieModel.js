const mongoose = require('mongoose')

const movie_schema = new mongoose.Schema({

    movie_id: {
        type: String,
        required: true
    },
    movie_name: {
        type: String,
        required: true
    },
    released: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    blog_posts: {
        type: [String],
        required: false
    },
    added_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('movie', movie_schema)