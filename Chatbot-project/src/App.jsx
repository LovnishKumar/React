import { useState } from 'react'
import { ChatMessages } from './components/chatMessages';
import { ChatInput } from './components/ChatInput';

import './App.css'

function App() {
        const [chatMessages,setChatMessages ] = useState([]);
       // const [chatMessages, setChatMessages] = array;
      //const chatMessages = array[0];
      //const setChatMessages = array[1];

        return (
          <div className="app-container">
              
              <ChatMessages 
              chatMessages={chatMessages} 
              />
              <ChatInput 
              chatMessages={chatMessages}   
              setChatMessages={setChatMessages}
              />
          </div>
        );
      }

export default App
