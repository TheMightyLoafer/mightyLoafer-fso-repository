const mongoose = require('mongoose')

if (process.argv.length < 5) {
    console.log('Usage: node mongo.js <password> <name> <number>');
    process.exit(1);
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `
    mongodb+srv://sinisterthought:${password}@cluster0.wd7qv5o.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set(`strictQuery`, false)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => {
        console.log('Connected to MongoDB')

        const contactSchema = new mongoose.Schema({
            name: String,
            number: String,
        })

        const Contact = mongoose.model('Contact', contactSchema)

        const contact = new Contact({
            name: name,
            number: number
        })

        return contact.save()
    })
    .then(() => {
        console.log('Contact saved successfully')
        return mongoose.connection.close()
    })
    .catch(error => console.error('Error', error))

