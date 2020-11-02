import React, {useEffect, useState}  from 'react';
import './Compose.css';

const MESSAGES_URL = "http://localhost:3000/messages/"

export default function Compose(props) {

  const [message, setMessage] = useState('')
  const voterId = props.voterId
  
  // Logic set to post when enter key is hit
  const submitHandler = (event) => {
    if(event.charCode === 13){
      
      // Send request to rails backend to send text message
      const data = {from: '+15512272240', to: '+16468729355',body: message}
      
      const options1 = {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}
      


      fetch("http://localhost:3000/send_text", options1)
        .then(response => {
          if(response.statusText === "Created"){
            console.log("message was sent")
            setMessage("")
            props.setmessageTrigger(!props.messageTrigger)
          }
        })
    } 
  }
  
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          value = {message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress ={submitHandler}
        />

        {
          props.rightItems
        }
      </div>
    );
}