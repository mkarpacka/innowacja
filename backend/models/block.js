var mongoose = require('mongoose');

var blockSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    timestamp: Date
});

module.exports = mongoose.model("Block", blockSchema);