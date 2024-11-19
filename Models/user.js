const mongoose = require("mongoose");
Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({ 
    name: { type: String },                  //first name 
    email: { type: String, required: true, unique: true },    //email is unique //email is required for login
    password: { type: String, required: false },               //password is required for login
    lname: { type: String },                  //last name
    phone: { type: String, required: false },                  //phone number
    country_code: { type: String, required: false },                  //phone number
    iso_code: { type: String, required: false },      
    gender: { type: String,default: "Male" },       //phone number
    profilepic: { type: String, required: false, default: "generaluserpic.png" },   //profile pic required is false because it is not mandatory and default is generaluserpic.png 
    experience:{type:Number,required: false,},
    rate:{type:Number,required: false,},
    about: { type: String}, 
    education: { type: String}, 
    birthDateTime:{type:Date,},
    emailverified: { type: Boolean, required: true , default: false},    //email is verified or not 
    role: { type: String, required: true , default: "user"},
    logintype: { type: String, required: true,default: "email" },
    loginbythirdpartyid: { type: String, required: false },
    otp: { type: String, required: false },

  
    languages:[{ 
        type: Schema.ObjectId, 
        ref: 'languages' }],
    expertises:[{ 
        type: Schema.ObjectId, 
        ref: 'expertises' }],

    resettoken : {type:String, required: false, default: undefined},
    resettokentime : {type:String, required: false, default: undefined}, 
}, { timestamps: true});

// post-save hook to remove referenceList if it's undefined or empty

userSchema.pre('save', function(next) {
  if (this.role == "user") {
      this.languages = undefined;
      this.expertises = undefined;
  }
next();
});
// userSchema.post('save', function(req) {
//     if(this.role == "user"){
//       this.languages = undefined;
//       this.expertises = undefined;
//         if (!this.languages || this.languages.length === 0) {
//           userSchema.remove(this.languages);
//             this.languages = undefined;
//           } 
//           if (!this.expertises || this.expertises.length === 0) {
//             this.expertises = undefined;
//           }
//     }
//   });

  userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    if (obj.role === "user") {
        delete obj.languages;
        delete obj.expertises;
    }
    return obj;
};
module.exports = mongoose.model("users", userSchema);



