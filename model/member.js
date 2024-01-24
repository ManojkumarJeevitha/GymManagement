const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: false,
    },
    Email: {
        type: String,
        required: false,
    },
    Phone: {
        type: String,
        required: false,
    },
    height: {
        type: String,
        required: false,
    },
    weight: {
        type: String,
        required: false,
    },
    Address: {
        type: String,
        required: false,
    },
    MembershipStartDate: {
        type: Date,
        required: false,
    },
    MembershipEndDate: {
        type: Date,
        required: false,
    },
    FeesPaid: {
        type: String,
        required: false,
    }
});

module.exports = new mongoose.model('member', memberSchema);
