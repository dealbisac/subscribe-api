import { Router } from "express";
import authorize from "../middlewares/auth.middleware";

const subscriptionRouter = Router();

// Get all subscription
subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'GET all subscriptions'});
})

// Get subscription by ID
subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: 'GET subscription details'});
})

// Create new subscription
subscriptionRouter.post('/', authorize, (req, res) => {
    res.send({ title: 'CREATE new subscription'});
})

// Update subscription
subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE subscription'});
})

// Delete subscription
subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETE subscription.'});
})

// Get all user subscription
subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'GET all user subscriptions'});
})

// Cancel subscription
subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'CANCEL subscriptions'});
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'GET upcoming subscriptions'});
})

export default subscriptionRouter; 