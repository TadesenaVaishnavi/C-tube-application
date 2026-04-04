const mongoose = require("mongoose");


const videoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,

  duration: Number,

  privacy: {
    type: String,
    default: "public"
  },

  // 🔥 THIS IS THE MISSING PART
  views: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model("Video", videoSchema);