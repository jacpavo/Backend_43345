import mongoose from 'mongoose';

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    name: String,
    description: String, 
    code: String,
    price: Number,
    stock: Number
})

export const productsModel = mongoose.model(productsCollection, productSchema);