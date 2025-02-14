const mongoose = require('mongoose');

const pipelineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Triggered', 'Success', 'Failure'],
        required: true,
    },
    triggeredAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Pipeline', pipelineSchema);
