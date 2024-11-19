const asyncHandler = require("express-async-handler");
const Review = require("../Models/review.js");

const addReview = asyncHandler(async (req, res) => {
  const { reviewText, review } = req.body;
  const reviewBy = req.userId;
  const reviewTo = req.body.userId;

  if (!review || !reviewText ||!reviewTo) {
    return res.status(200).json({
      Status: 0,
      Message: "Please fill all the fields",
    });
  }

  const addreview = await Review.create({
    reviewText,
    review,
   reviewBy,
   reviewTo,

  });
  if (addreview) {
    return res.status(200).json({
      Status: 1,
      Message: "review added successfully",
    });
  } else {
    return res.status(200).json({
      Status: 0,
      Message: "Something went wrong",
    });
  }
});

const getReviews = asyncHandler(async (req, res) => {

    const reviews =   await  Review.find().populate('reviewBy').populate('reviewTo');
    console.log("fdsfjhsdkfjsdljfk");
    console.log(reviews);
    return res.status(200).json({
        Status: 1,
        Message: "get rate successfully",
        rates:reviews,
      });
});

module.exports = {
    getReviews,
  addReview,
};
