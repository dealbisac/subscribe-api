import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { getUser, getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const userRouter = Router();

//Get Users
userRouter.get('/', getUsers);

//Get User by ID
userRouter.get('/:id', authorize, getUser);

//Create User
userRouter.post('/', authorize, createUser)

//Update User
userRouter.put('/:id', authorize, updateUser)

//Delete User
userRouter.get('/:id', authorize, deleteUser)


export default userRouter;  //export the router