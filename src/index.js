//require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("Error => ",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is runnig at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!! ",err);
})
