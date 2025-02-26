import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLegth: 2,
        maxLegth: 20
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minLegth: 6,
    }  
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
