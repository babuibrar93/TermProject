var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true
  // },
  email:String,
  password:String,
  
  // createdAt: {
  //   type: Date,
  //   default: Date.now()
  // }
});


var Userlogins = mongoose.model("Userlogin", UserSchema);
module.exports = Userlogins;
