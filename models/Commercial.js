const mongoose = require('mongoose');

const commercialSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    spent: Number
});

const Commercial = mongoose.model('Commercial', commercialSchema);

module.exports = Commercial;
