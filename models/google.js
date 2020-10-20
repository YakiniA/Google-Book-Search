const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required:true},
  image: { type: String, required:true},
  link: {type: String, required:true}
});

const Google = mongoose.model("Google", googleSchema);

module.exports = Google;
