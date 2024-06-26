const mongoose = require('mongoose')

const url = process.env.MONGODB_URL



console.log('connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB'
        )})
    .catch(error => {
        console.error('Error connecting to MongoDB', error.message) 
    })

    const noteSchema = new mongoose.Schema({
        content: String,
        important: Boolean,
    })

    noteSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
                delete returnedObject._id
                delete returnedObject.__v
        }
    })

    module.exports = mongoose.model('Note', noteSchema)