const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
    member_id: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    payment_date: {
        type: Date,
        required: false,
    },
    amount: {
        type: String,
        required: false,
    },
});

module.exports = new mongoose.model('service', serviceSchema);
