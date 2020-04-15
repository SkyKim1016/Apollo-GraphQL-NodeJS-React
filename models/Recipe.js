const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    text:true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    text:true
  },
  description: {
    type: String,
    required: true,
    text:true
  },
  instructions: {
    type: String,
    required: true,
    text:true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String,
    text:true
  }
});

RecipeSchema.index({
    "$**": "text"
});

module.exports = mongoose.model("Recipe", RecipeSchema);
