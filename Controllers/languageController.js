const asyncHandler = require("express-async-handler");
const Language = require("../Models/language.js");


const addLanguage = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(200).json({
      Status: 0,
      Message: "Please fill all the fields",
    });
  }

  const language = await Language.create({
    name,
  });

  if (language) {
    res.status(200).json({
      Status: 1,
      Message: "Language added Successfully",
      language: language,
    });
  } else {
    return res.status(200).json({ Status: 0, error: "Something Went Wrong" });
  }
});

const getLanguages = asyncHandler(async (req, res) => {
  const languages = await Language.find();
  if (languages) {
    res.status(200).json({
      Status: 1,
      Message: "Language get Successfully",
      languages: languages,
    });
  } else {
    return res.status(200).json({ Status: 0, error: "No languages found" });
  }
});

const updateLanguage = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const { name } = req.body;


  if (!name) {
    return res.status(200).json({
      Status: 0,
      Message: "Please fill all the fields",
    });
  }
  const language = await Language.findOne({_id:req.params.id});

  if (language) {
    language.name = name;
    await language.save();
    res.status(200).json({
      Status: 1,
      Message: "Language Updated Successfully",
      language: language,
    });
  } else {
    return res.status(200).json({ Status: 0, error: "Language Not Found" });
  }
});
const deleteLanguage = asyncHandler(async (req, res) => {

    const { id } = req.params.id;
   

    const language = await Language.findOne({_id:req.params.id});
  
    if (language) {
     await Language.deleteOne(id);
      res.status(200).json({
        Status: 1,
        Message: "Language Deleted Successfully",
      
      });
    } else {
      return res.status(200).json({ Status: 0, error: "Language Not Found" });
    }
});
module.exports = {
  getLanguages,
  addLanguage,
  updateLanguage,
  deleteLanguage,
};
