import express from "express";

import { PORT } from './config/env.js';

//  1. Initialize the app
const app = express();


// 2. Create your route
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription API.')
})


// 3. Make your app expose to port
app.listen(PORT, () => {
    console.log(`Subscription API is running on port http://localhost:${PORT}`);
})

// 4. Export the app
export default app;
