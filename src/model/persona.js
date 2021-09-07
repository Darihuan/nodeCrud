const {model, Schema} = require('mongoose');

const personaSchema = new Schema({
    user: String,
    password: String,
    name: String,
    surname: String,
    companyEmail: String,
    personalEmail: String,
    city: String,
    active: Boolean,
    createdDate: Date,
    imageUrl: String,
    terminationDate: Date
})

module.exports = model('Persona',personaSchema);