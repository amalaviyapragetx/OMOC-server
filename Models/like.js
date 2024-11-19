const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema(
  {
    likedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    likedTo: { type: Schema.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("likes", likeSchema);


