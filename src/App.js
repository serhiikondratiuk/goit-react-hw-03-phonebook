import { Component } from "react";
import Section from "./components/Section";
import Form from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { nanoid } from "nanoid";
import s from "./App.module.css";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const { contacts } = this.state;
    const repeatedName = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    repeatedName
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilterChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={s.wrapper}>
        <Section>
          <h1 className={s.title}>Phonebook</h1>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section>
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
