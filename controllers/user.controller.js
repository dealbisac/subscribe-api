import User from "../models/user.model.js";

export const getUsers = async(req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({ success: true, data: users });
    
    } catch (error) {
        next(error);
    }
}

export const getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if(!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: user });

    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    try {
        const user = await User.create({ ...req.body });

        res.status(200).json({ success: true, data: user})
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!user) {
            const error = new Error('Problem with updating the user.');
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: user });
        
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            const error = new Error('Problem with deleting the user.');
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: user });
        
    } catch (error) {
        next(error);
    }
}