const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
    // userId: {
    //     type: Number,
    //     required: true,
    //     default: 'testId',
    // },
    clothingItems: {
        type: [{
            type: mongoose.Types.ObjectId, ref: 'ClothingItem'
        }],
        default: [],
    },
    name: {
        type: String,
        required: true,
    },
    weather: {
        type: String,
        default: 'Unspecified',
    },
    occasion: {
        type: String,
        default: 'Unspecified',
    },
    notes: {
        type: String,
        default: '',
    }
});

module.exports = mongoose.model('Outfit', OutfitSchema);