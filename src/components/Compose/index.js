import React, {useEffect, useState}  from 'react';
import './Compose.css';


const MESSAGES_URL = "http://localhost:3000/messages/"

export default function Compose(props) {

  const [message, setMessage] = useState('')
  
  const voterId = props.voterId
  
  // Logic set to post when enter key is hit
  const submitHandler = (event) => {
    if(event.charCode === 13){
      
      const data = {
        origin: true,
        body: message,
        user_id: 1,
        voter_id: parseInt(voterId),
      }

      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }
      
      fetch(MESSAGES_URL, options)
        .then(response => console.log(response))
        .then(props.messageTrigger?props.setmessageTrigger(false):props.setmessageTrigger(true))

      setMessage("")
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