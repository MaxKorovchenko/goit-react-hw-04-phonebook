import { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, MainTitle, Title } from './App.styled';
import { Filter } from 'components/Filter/Filter';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
      return;
    }

    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <Layout>
        <MainTitle>Phonebook</MainTitle>
        <ContactsForm onSave={this.addContact} />

        <Title>Contacts</Title>
        <Filter onFilter={filter} onChange={this.filterContacts} />
        <ContactsList contactsList={contacts} onDelete={this.deleteContact} />

        <GlobalStyle />
      </Layout>
    );
  }
}
