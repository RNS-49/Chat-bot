import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function chatWithBot(userMessage) {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",  // making request to huggingface model using openRouter service
            {
                model: "openchat/openchat-3.5-0106",     // openchat model from huggingface
                messages: [{ role: "user", content: userMessage }]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching response from OpenChat:", error);
        return { error: "Sorry, I couldn't process that request." };
    }
}