const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const languageSchema = new mongoose.Schema({ 
    name: { type: String, required: true },                   
}, { timestamps: true});

module.exports = mongoose.model("languages", languageSchema);