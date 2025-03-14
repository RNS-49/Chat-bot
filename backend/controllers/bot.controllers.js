import { chatWithBot } from "../bot/botService.js"

export const chatService = async(req,res)=>{
  try {
    const {message} = req.body;
    if(!message){
      return res.status(400).json({error:"please enter a valid input"});
    }else{
    console.log("sending message",message);
    const botResponse = await chatWithBot(message);
   return res.json({response:botResponse});
    }
  } catch (error) {
    return res.status(500).json({error:"internal server error"});
  }
}