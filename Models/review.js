const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema(
  {
    review:{type:Number,required: false,},
    reviewText: { type: String, required: false }, 
    reviewBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    reviewTo: { type: Schema.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("review", reviewSchema);


