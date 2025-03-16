import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";


//  1. Initialize the app
const app = express();

//Default Middlewares we need in the app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

// Use the routes.
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

// Error middleware
app.use(errorMiddleware);


// 2. Create your route
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription API.')
})


// 3. Make your app expose to port
app.listen(PORT, async () => {
    console.log(`Subscription API is running on port http://localhost:${PORT}`);

    await connectToDatabase();
})

// 4. Export the app
export default app;
