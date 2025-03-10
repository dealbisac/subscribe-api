import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { getUser, getUsers, createUser } from '../controllers/user.controller.js';

const userRouter = Router();

//Get Users
userRouter.get('/', getUsers);

//Get User by ID
userRouter.get('/:id', authorize, getUser);

//Create User
userRouter.post('/', authorize, createUser)

//Update User
userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE user details'});
})

//Delete User
userRouter.get('/:id', (req, res) => {
    res.send({ title: 'DELETE user'});
})


export default userRouter;  //export the router