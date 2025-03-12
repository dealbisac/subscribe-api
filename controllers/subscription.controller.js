import Subscription from '../models/subscription.model.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            users: req.user._id,
        })
        
        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
}

export const updateSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!subscription) {
            const error = new Error('Problem with updating the subscription.');
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: subscription });
        
    } catch (error) {
        next(error);
    }
}

export const getUserSubscription = async (req, res, next) => {
    try {
        //Check if the user is the same as the one in the token
        if(req.user !== req.params.id) {
            const error = new Error('You are not the owner of this account.');
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });

        res.status(200).json({ success: true, data: subscriptions })
    } catch (error) {
        next(error)
    }
}