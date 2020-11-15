const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkboxModel = new Schema({
    ingredients: {
        type: String
    },
}, {
    collection: 'checkboxes'
    });

module.exports = mongoose.model('CheckboxModel', checkboxModel);