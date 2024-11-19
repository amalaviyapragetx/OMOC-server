const express = require("express");
const router = express.Router();
const {

    likeuser,

} = require("../Controllers/likeController");
const { protect } = require("../Middlewares/auth");

//like unlike
router.post('/', protect,likeuser);



module.exports = router;
