import mongoose from "mongoose";

import { DB_URI } from '../config/env.js';

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment inside .env.<development>/<production>.local');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connectToDatabase;