import React, {useEffect, useState}  from 'react';
import './Compose.css';

export default function Compose(props) {

  const [message, setMessage] = useState('')

  // Logic set to post when enter key is hit
  const submitHandler = (event) => {
    // console.log(event.charCode)
    if(event.charCode === 13){
      console.log('Message Text:', event.target.value)
    }
  }
  
  console.log(message)
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