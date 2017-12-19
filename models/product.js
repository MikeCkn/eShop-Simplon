import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    name: String,
    price: Number,
    likes: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Product', Product);