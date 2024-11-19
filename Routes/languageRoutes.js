const express = require('express');
const router = express.Router();
const {getLanguages,addLanguage,updateLanguage,deleteLanguage} = require('../Controllers/languageController');
const { protect } = require('../Middlewares/auth');


// //get Language profile
router.get('/',getLanguages);

//add Language profile
// router.post('/',addLanguage);
router.route('/').post(addLanguage);

// //update Language profile
router.put('/:id', updateLanguage);

// //Delete Language profile
router.delete('/:id',deleteLanguage);  


module.exports = router;