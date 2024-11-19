const asyncHandler = require("express-async-handler");
const Like = require("../Models/like.js");



const likeuser = asyncHandler(async (req, res) => {
console.log(req.userId);
console.log(req.body.userId);
const likedBy = req.userId;
const likedTo = req.body.userId;
if(!req.body.userId){
  return res.status(200).json({
    Status: 0,
    Message: "Please fill all the fields",
  }); 
}

const like = await Like.create({
    likedBy,
    likedTo
});
if(like){return res.status(200).json({
    Status: 1,
    Message: "liked successfully",

    like: like,
  });}else{
    return res.status(200).json({
        Status: 0,
        Message: "Something went wrong",
    
      });
  }

});


module.exports = {
    likeuser
};
