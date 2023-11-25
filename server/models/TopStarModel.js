const mongoose = require("mongoose");

// ----------------------------------------------------------------
//                          TopStarSchema
// ----------------------------------------------------------------
const TopStarSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxLength: [50, "50 characters max length"],
  },
  slug: String,
  price: { type: Number, required: [true, "Please add a price"] },
  img: { type: String, required: [true, "Please add a img"] },
});
// ----------------------------------------------------------------


module.exports = mongoose.model("TopStarModel", TopStarSchema);
