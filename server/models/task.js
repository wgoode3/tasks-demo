const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: String,
    isComplete: Boolean
}, {timestamps: true});

mongoose.model("Task", TaskSchema);