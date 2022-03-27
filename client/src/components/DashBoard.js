import React from 'react'
import { useConversations } from '../contexts/ConversationProvider'
import OpenConversation from './OpenConversation'
import SideBar from './SideBar'


export default function DashBoard({ id }) {
    const { slectedConversation } = useConversations()
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <SideBar id={id} />
            {slectedConversation && <OpenConversation />}
        </div>
    )
}
