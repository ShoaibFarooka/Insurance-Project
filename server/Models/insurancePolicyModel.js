const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    insuranceType: {
        type: String,
        required: true,
    },
    policyStartDate: {
        type: Date,
        required: true,
    },
    policyTerm: {
        type: String,
        required: true
    },
    policyEndDate: {
        type: Date,
        required: true
    },
    claimLimit: {
        type: Number,
        required: true,
    },
    remainingClaimLimit: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
);

//Create Model
const InsurancePolicy = new mongoose.model("InsurancePolicy", policySchema);

module.exports = InsurancePolicy;