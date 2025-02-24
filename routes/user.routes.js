import { Router } from 'express';

const userRouter = Router();

//Get Users
userRouter.get('/', (req, res) => {
    res.send({ title: 'GET all users'});
})

//Get User by ID
userRouter.get('/:id', (req, res) => {
    res.send({ title: 'GET user details'});
})

//Create User
userRouter.post('/', (req, res) => {
    res.send({ title: 'CREATE new user'});
})

//Update User
userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE user details'});
})

//Delete User
userRouter.get('/:id', (req, res) => {
    res.send({ title: 'DELETE user'});
})


export default userRouter;  //export the router