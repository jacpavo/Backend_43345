import mongoose from 'mongoose'

const orderCollection = 'orders'

const orderSchema = mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ["compact", "SUV", "Pickup"],
        default: "SUV"
    },
    price: Number,
    quantity: Number,
    date: Date,

})

const orderModel = mongoose.model(orderCollection, orderSchema);

export default orderModel