var mongoose = require('mongoose');

var textSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    part: String,
    content: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model("Text", textSchema);