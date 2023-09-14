const mongoose = require("mongoose")
const Schema = mongoose.Schema

const songSchema = new Schema({
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    artist: {
      type: String,
    },
    playedTime: {
      type: Number,
    },
    timestamp: {
        type: String,
    },
  });
  
  const Song = mongoose.model.Song || mongoose.model('Song', songSchema);
  
  module.exports = Song;