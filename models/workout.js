const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
  exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Enter a workout type"
        },
        name: {
            type: String,
            trime: true,
            required: "Name your workout"
        },
        duration: {
            type: Number,
            required: "Enter workout length in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;