const mongoose = require('mongoose');

const securityScanSchema = new mongoose.Schema({
  scanType: { type: String, required: true },
  target: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  vulnerabilities: [
    {
      id: { type: String, required: true },
      severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
      description: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SecurityScan', securityScanSchema);