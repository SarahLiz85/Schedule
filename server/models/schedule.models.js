console.log("schedule.models.js");

const mongoose = require("mongoose");
const ScheduleSchema = new mongoose.Schema({

    activity:{
        type: String,
        required: [true, "Activity is required!"],
        minlength: [3, "Activity must be 3 characters or longer!"]
    },
    description:{
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "Description must be 3 charaters or longer"]
    },
    start:{
        type: Date,
        required: [true, "Start is required!"]
    },
    duration:{
        type: Number,
        required: [true, "Start is required!"],
        min: [0, "Duration cannot be less than 0!"]
    },
    units:{
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model("Schedule", ScheduleSchema);