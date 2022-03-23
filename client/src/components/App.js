import React from 'react'
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import DashBoard from './DashBoard';
import Login from "./Login";

function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <DashBoard id={id} />
      </ConversationsProvider>

    </ContactsProvider>
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
