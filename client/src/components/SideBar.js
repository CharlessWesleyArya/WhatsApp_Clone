import React, { useState } from 'react'
import { Button, Modal, Nav, Tab } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewConversationModal from './NewConversationModal'
import NewContactsModal from './NewContactsModal'

const CONVERSTAIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'
export default function SideBar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSTAIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSTAIONS_KEY


    function closeModal() {
        setModalOpen(false)
    }
    return (
        <div style={{ width: '250px' }} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSTAIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSTAIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border small'>
                    Your Id:<span className='text-muted'>{id}</span>
                </div>
                <Button className='rounded-0' onClick={()=>setModalOpen(true)}>
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <NewConversationModal closeModal={closeModal}/> :
                    <NewContactsModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    )
}
