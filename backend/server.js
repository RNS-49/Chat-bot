import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import botRoutes from "./routes/bot.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";



const app = express();

app.use(cors({
  origin: "*", // Allow frontend origin
  credentials: true // Allow cookies to be sent
}));

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/bot",botRoutes);
  

app.listen(PORT,()=>{
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
})