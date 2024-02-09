const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClothingItemSchema = new Schema({
    // userId: {
    //     type: Number,
    //     required: true,
    //     default: 'testId',
    // },
    outfits: {
        type: [{
            type: mongoose.Types.ObjectId, ref: 'Outfit'
        }],
        default: [],
    },
    name: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        default: '',
    },
    occasion: {
        type: String,
        default: 'Unspecified',
    },
    category: {
        type: String,
        default: 'Unspecified',
    },
    weather: {
        type: String,
        default: 'Unspecified',
    },
    colors: {
        type: String,
        default: 'Unspecified',
    },
    brand: {
        type: String,
        default: 'Unspecified',
    },
    size: {
        type: String,
        default: 'Unspecified',
    },
    image: { type: String },
    quantity: {
        type: Number,
        default: 1,
    },
    available: {
        type: Number,
        default: 1,
    },
    worn: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: 'Put Away',
        enum: ['Put Away', 'Wearing', 'Dirty', 'Washing', 'Drying', 'Clean', 'Folding', 'In Storage', 'Other'],
    }
});



module.exports = mongoose.model('ClothingItem', ClothingItemSchema);