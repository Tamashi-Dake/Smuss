import mongoose,{Schema} from "mongoose";

const songSchema = new Schema({
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    playedTime: {
      type: Number,
      required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
  });
  
  const Song = mongoose.model.Song || mongoose.model('Song', songSchema);
  
  module.exports = Song;