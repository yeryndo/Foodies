const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkboxModel = new Schema({
    checkbox: {
        type: String
    },
}, {
    collection: 'recipes'
    });

module.exports = mongoose.model('CheckboxModel', checkboxModel);