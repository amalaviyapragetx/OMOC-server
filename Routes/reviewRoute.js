const express = require("express");
const router = express.Router();
const { getReviews, addReview } = require("../Controllers/reviewController");
const { protect } = require("../Middlewares/auth");

 //get rates
router.get("/",protect, getReviews);

 //add rate
router.post("/",protect, addReview);

module.exports = router;
