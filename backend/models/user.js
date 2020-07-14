const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//USer schema & model
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    email: {
        type: String,
        required: [true, "Email required"]
    },
    /*carMake: {
      type: String
    },
    carModel: {
        type: String
    },*/
    available: {
        type: Boolean,
        default: false
    }
});

// Create a model under the collection = 'user'
const User = mongoose.model('user', userSchema);

module.exports = User;