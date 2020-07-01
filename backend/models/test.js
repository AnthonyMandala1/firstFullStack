const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The server text field is required']
    }
})

const Test = mongoose.model('test', serverSchema);

module.exports = Test;