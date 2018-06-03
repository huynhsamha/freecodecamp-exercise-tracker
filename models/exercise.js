const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        maxlength: [25, 'Description too long, not greater than 25']
    },
    duration: {
        type: Number,
        required: true,
        min: [1, 'Duration too short, at least 1 minute']
    },
    date: {
        type: Date, 
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }
})

mongoose.model('Exercise', ExerciseSchema);