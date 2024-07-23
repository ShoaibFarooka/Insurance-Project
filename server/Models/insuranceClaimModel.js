const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    policy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InsurancePolicy",
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    expenseDate: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    followUp: {
        type: Boolean,
        required: true,
    },
    previousClaimID: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
    },
    lastEditedClaimDate: {
        type: Date,
        required: true,
    },
},
    { timestamps: true }
);

//Create Model
const InsuranceClaim = new mongoose.model("InsuranceClaim", claimSchema);

module.exports = InsuranceClaim;