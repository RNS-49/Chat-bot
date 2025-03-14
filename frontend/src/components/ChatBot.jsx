import React, { useState,useEffect,useRef } from 'react';
import "../styles/chatbot.css";
import { Drawer } from 'antd';
import logo from '../images/logo-home.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ChatBot() {

  const [input, setInput] = useState({ message: "" });
  const [chatHistory, setChatHistory] = useState([{
    sender: "bot",
    text: "Hi! How can i help you today😊?",
  }]); // Stores both user and bot messages

  const chatContainerRef = useRef(null); // Reference for chat container

  const navigate = useNavigate();

  const handleUserMessage = async (e) => {
    e.preventDefault();
    if (!input.message.trim()){ 
      toast.error("Enter a valid input!")
      return}; // Prevent empty messages

    // Add user message to chat history
    const userMessage = { sender: "user", text: input.message };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/bot/chat", input);
 
      if (response.status === 400) {
        toast.error("Enter a valid input");
        return;
      }

      const botMessage = {
        sender: "bot",
        text: response.data.response.choices[0].message.content,
      };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error occurred", error);
    }

    setInput({ message: "" }); // Clear input field
  };



  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  }
  

  useEffect(() => {
    if (chatContainerRef.current) {
      requestAnimationFrame(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      });
    }
  }, [chatHistory]);


  function handleLogout(){
     localStorage.removeItem('user');
     window.dispatchEvent(new Event('authChange')); // Notify App.js about the change
     navigate('/'); // Redirect to the login page
     toast.success("LogOut Succesfull");
     console.log("LogOut Success");
    }


  return (
    <div className="chat-container">

      <div className="chat-content">

         <Drawer className='drawer' title="ChatNexus-AI" onClose={onClose} open={open}>
          <span title='logout' onClick={handleLogout}><p><i class="fa-solid fa-power-off"></i>Logout</p></span>
          
        </Drawer>

        {/* Navbar */}
        <div className="chat-header">
          <h5 onClick={showDrawer} title='Click to view options'>ChatNexus-AI<img className='icon-bot' src={logo} alt="" /></h5>
        </div>

        {/* Chat Messages */}
        <div className="chat-box" ref={chatContainerRef}>
          {chatHistory.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender === "user" ? "sent" : "received"}`}>
            <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br>") }}></p>

            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <form onSubmit={handleUserMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input.message}
              onChange={(e) => setInput({ message: e.target.value })}
            />
            <button title='Click to send'>➤</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;







// import React from 'react'
// import { useState,useEffect } from 'react';
// import "../styles/chatbot.css"
// import logo from '../images/logo-home.png'
// import Sidebar from '../components/SideBar';
// import axios from 'axios';
// import {toast} from 'react-hot-toast'

// function ChatBot() {

//   const [input,setInput]=useState([{
//     message:""
//   }])

//   const [botresponse,setBotResponse] = useState([]);

//   const handleUserMessage=async(e)=>{
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/bot/chat",input);

//       if(response.status === 400){
//         toast.error("Enter a valid input");
//       }
//       console.log("bot response",response)
//       setBotResponse(response.data);
//       const botResponse = response.data.response.choices[0].message.content;
//       console.log(botResponse);
//     } catch (error) {
//       console.log("error occured",error)
//     }
//   }
//   // useEffect(() => {
//   //   console.log("Updated bot response:", botresponse);
//   // }, [botresponse]);
  
 
//   return (
   
//       <div className="chat-container">

//       {/* Chat Area */}
//       <div className="chat-content">
//         {/* Navbar */}
//         <div className="chat-header">
//           <h5>ChatNexus-AI</h5>
//         </div>

//         {/* Chat Messages */}
//         <div className="chat-box">
//           {/* Sent Message */}
//           <div className="chat-message sent">
//             <p>Hello, ChatBot!</p>
//           </div>

//           {/* Received Message */}
//           <div className="chat-message received">
//             <p>Hi! How can I assist you?</p>
//           </div>
          
//         </div>

//         {/* Chat Input */}
//         <div className="chat-input">
//           <form onSubmit={handleUserMessage}>
//           <input type="text" placeholder="Type your message..." value={input.message} onChange={(e)=>{setInput({...input,message:e.target.value})}}/>
//           <button>➤</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ChatBot
