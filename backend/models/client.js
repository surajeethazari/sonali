let mongoose = require("mongoose");

let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model("Client", clientSchema);