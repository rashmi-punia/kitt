import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";


import userRoutes from "./routes/userRoute.js"
import productRoutes from "./routes/productRoute.js"
import cartRoutes from "./routes/cartRouter.js"
import { errorHandler,notFound } from "./middleware/errorMiddleware.js";


const app =express();

app.use(cors());
app.use(express.json())
dotenv.config()

connectDB()


app.use("/api/users" ,userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 7000;
app.listen(PORT, ()=>{
    console.log(`ecoomerce pi on ${PORT}`);
})



