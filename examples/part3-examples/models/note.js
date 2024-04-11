const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB'
        )})
    .catch(result => {
        console.error('Error coonecting to MongoDB', error) })