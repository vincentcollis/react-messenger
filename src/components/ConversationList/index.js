import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {

  const [conversations, setConversations] = useState([]);
  
  
  useEffect(() => {
    getConversations()
  },[])

  

 const getConversations = () => {
    axios.get('http://localhost:3000/voters')
      .then(response => {
        let newConversations = response.data.data.map(result => {
          return {
            voterId: result.id,
            photo: result.attributes.photo,
            name: result.attributes.name,
            text: result.attributes.last_message
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
          rightItems={[<ToolbarButton key="add" icon="ion-ios-add-circle-outline" />]}
        />
        <ConversationSearch />
        {conversations.map(conversation =>
            <ConversationListItem
              setConvo = {props.setConvo}
              setVoterId = {props.setVoterId}
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}