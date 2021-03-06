var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  excerpt: {
    type: String
  },
  // `note` is an array that stores a Note id
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;