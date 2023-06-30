import mongoose from "mongoose";
import orderModel from "./model/order";

const environment = async () => {
    await mongoose.connect(/** */)
    
    //* Aggregation metodo de filtración

    //let order = await orderModel.aggregate([{
    //    $match: {size: "SUV"}
    //}
    //,])

    let result = await orderModel.insertMany(
    [
        {
            name: "Duster", size: "SUV", price: 27000, quantity: 10, date: 2023-1-1
        },
        {
            name: "Ranger", size: "Pickup", price: 53000, quantity: 2, date: 2022-12-12
        },
    ]
    )
    console.log(result)
} 

environment()