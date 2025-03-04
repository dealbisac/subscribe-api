import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

//Get Users
userRouter.get('/', getUsers);

//Get User by ID
userRouter.get('/:id', authorize, getUser);

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