import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    validate: Boolean
})

export const usersModel = mongoose.model(usersCollection, usersSchema);