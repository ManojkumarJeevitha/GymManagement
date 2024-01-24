const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const planSchema = new mongoose.Schema({
    // businessId: {
    //     type: Schema.Types.ObjectId,
    //     required: false
    // },
    // merchaneName: {
    //     type: String,
    //     required: false,
    // }
     Name: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    duration: {
        type: String,
        required: false,
    },
    cost: {
        type: String,
        required: false,
    }
});

module.exports = new mongoose.model('membership_plan', planSchema);
