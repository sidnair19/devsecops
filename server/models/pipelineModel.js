const mongoose = require('mongoose');

const pipelineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['running', 'stopped', 'failed'], default: 'stopped' },
  logs: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pipeline', pipelineSchema);
