import React from 'react'
import '../styles/documentation.css'

function Documentation() {
  return (
    <div className='documentation-sec container-fluid'>
            <div>
            <h2>ChatNexus-AI</h2>
            <h4>Overview</h4>
            <p>ChatNexus is an AI-powered chatbot platform designed to facilitate intelligent and interactive conversations. It leverages Natural Language Processing (NLP) and machine learning algorithms to provide accurate and context-aware responses. Whether used for customer support, personal assistance, or general inquiries, ChatNexus ensures a seamless communication experience. With a focus on security, scalability, and customization, it caters to various industries and user needs.</p>
            </div>  

            <div>
              <h4>Features</h4>
              <ul>
                <li>Smart AI Conversation: Engages in human-like interactions using advanced NLP.</li>
                <li>Instant & Accurate Responses: Provides fast and reliable answers.</li>
                <li>Secure & Private: Ensures encrypted communication and data protection.</li>
                <li>Multi-Language Support: Communicates in various languages to reach a global audience.</li>
                <li>Customizable & Scalable: Easily adaptable to different use cases and scalable for large audiences.</li>
                <li>Continuous Learning & Improvement: Uses machine learning to enhance responses over time.</li>
                <li>Documentation & API Access: Provides well-structured documentation for developers to integrate with ease.</li>
              </ul>
            </div>

            <div>
              <h4>Technologies Used</h4>
              <ul>
                <li>Frontend: React.js, Bootstrap, CSS</li>
                <li>Backend: Node.js, Express.js </li>
                <li>Database: MongoDB </li>
                <li>Authentication: JWT</li>
                <li>Icons & UI: Font Awesome, Toastify for notifications</li>
              </ul>
            </div>

            <div>
              <h4>Future Enhancements</h4>
              <ul>
                <li>Mobile app development for Android & iOS.</li>
                <li>Integration with third-party services and APIs.</li>
                <li>Advanced AI models for more contextual responses.</li>
                <li>Voice support for hands-free conversations.</li>
                <li>Community and user-based learning improvements.</li>
              </ul>
            </div>

            <div>
              <h4>Support</h4>
              <p>For support, contact us at: support@chatnexus.com</p>
            </div>
    </div>
  )
}

export default Documentation
