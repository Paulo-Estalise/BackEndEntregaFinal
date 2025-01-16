const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productsCollection = "products";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: {
        type: Number,
        unique: true
    },
    stock: Number,
    status: String,
    category: String
});

productSchema.plugin(mongoosePaginate);

const productModel = mongoose.model(productsCollection, productSchema);

module.exports = productModel;
