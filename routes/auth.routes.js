import { Router } from 'express';

const authRouter = Router();

//Sign up Route
authRouter.post('/sign-up', (req, res) => {
    res.send({title: 'Sign up'})
})

//Sign in Route
authRouter.post('/sign-in', (req, res) => {
    res.send({title: 'Sign in'})
})

//Sign out Route
authRouter.post('/sign-out', (req, res) => {
    res.send({title: 'Sign out'})
})