import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: Date,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
});
export const gameModel= mongoose.model("Game", gameSchema);