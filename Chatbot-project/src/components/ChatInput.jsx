import { useState } from 'react'
import { Chatbot} from 'supersimpledev'
import './ChatInput.css'


export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event){
          setInputText(event.target.value)
        }

        async function sendMessage(){
          const newChatMessages = [
          ...chatMessages, {
            message : inputText,
            sender : "user",
            id : crypto.randomUUID()
          }
         ];
         setChatMessages([
            ...newChatMessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be removed later, when we add the response.
            {
              message: <img src="loading-spinner.gif" className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

           const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
          setInputText('');

        }
        return (
          <div className="chat-input-container">
            <input 
              className="chat-input"
              placeholder="Send a message to Chatbot" 
              size="30" 
              onChange={saveInputText}
              value={inputText}
            />
            <button className="button-send" onClick={sendMessage}>Send</button>
          </div>
        );
      }