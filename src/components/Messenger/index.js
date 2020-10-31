import React, { useState} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';

import Toolbar from "../Toolbar"
import ToolbarButton from "../ToolbarButton"

export default function Messenger(props) {
  
  const [convo, setConvo] = useState('')
  const [voterId, setVoterId] = useState("")
  
  // console.log("Messanger: ", convo, voterId)
    return (
      <div className="messenger">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />

        <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="scrollable sidebar">
          <ConversationList setConvo = {setConvo} setVoterId = {setVoterId}/>
        </div>

        <div className="scrollable content">
          <MessageList convo={convo} voterId={voterId}/>
        </div>
      </div>
    );
}