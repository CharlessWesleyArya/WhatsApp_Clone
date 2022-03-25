import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationProvider'
export default function Conversations() {
  const { conversations, slectedConversationIndex } = useConversations()
  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, index) => (
        <ListGroup.Item key={index}
          action
          onClick={() => slectedConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(recipient => recipient.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
