import  express  from "express";
import { chatService } from "../controllers/bot.controllers.js";


const router = express.Router();

router.post("/chat",chatService);


export default router;