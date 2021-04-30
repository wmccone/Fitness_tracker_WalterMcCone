const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
      name: String,
      type: String,
      weight: Number,
      sets: Number,
      reps: Number,
      duration: Number,
      distance: Number
})
const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [exerciseSchema],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;