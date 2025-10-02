const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// ✅ Change: use mongoose.models cache to prevent OverwriteModelError
const foodPartnerModel = mongoose.models.foodpartner || mongoose.model('foodpartner', foodPartnerSchema);

module.exports = foodPartnerModel;
