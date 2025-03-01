import { Router } from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controller';

const authRouter = Router();

//Sign up Route
authRouter.post('/sign-up', signUp);

//Sign in Route
authRouter.post('/sign-in', signIn);

//Sign out Route
authRouter.post('/sign-out', signOut)

export default authRouter;