import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    const {voterId, photo, name, text } = props.data;

    const clickHandler = (event) =>{
      props.setConvo(name)
      props.setVoterId(voterId)
    }
    
    
    return (
      <div className="conversation-list-item" onClick={clickHandler}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
}