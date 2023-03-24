import { useState, useEffect } from 'react';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, MainTitle, Title } from './App.styled';

const CONTACTS_KEY = 'contacts';
const getInitialContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  return savedContacts ? savedContacts : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(contacts => [...contacts, newContact]);
  };

  const filterContacts = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactsForm onSave={addContact} />

      <Title>Contacts</Title>
      <Filter onFilter={filter} onChange={filterContacts} />
      <ContactsList items={getFilteredContacts()} onDelete={deleteContact} />

      <GlobalStyle />
    </Layout>
  );
};
