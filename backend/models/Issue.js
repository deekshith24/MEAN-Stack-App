let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let IssueSchema = new Schema({
  title: {
    type: String
  },
  responsible: {
    type: String
  },
  description: {
    type: String
  },
  severity: {
    type: String
  },
  status: {
    type: String,
    default: "Open"
  }
});


module.exports = mongoose.model("Issue", IssueSchema);;
