import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  
// Перший рендер, якщо в ЛС щось є - парсимо дані
  useEffect(() => {
      const localStContacts = localStorage.getItem('contacts');
    if (localStContacts) {
      setContacts(JSON.parse(localStContacts));
}
    // console.log('First render')
  }, []);
  
  useEffect(() => {
contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

  

  const handleSubmit = (evt) => {
   const id = nanoid();
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
       contactsLists.push({ name, id, number });
    }

     setContacts(contactsLists);
 }
  
  const handleInputChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };
  
    const handleDelete = id => {
    setContacts(contacts.filter (contact => contact.id !== id)
    );
  };
  

 const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  }
  
 
  
  return (
    <div>
      <h1 className="mainTitle">Phonebook</h1>

      <ContactForm handleSubmit={handleSubmit} />
      <Filter filter={filter} handleInputChange={handleInputChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   componentDidMount() {
//     // console.log('App componentDidMount');
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('App componentDidUpdate');

//     const nextListContacts = this.state.contacts;
//     const prevListContacts = prevState.contacts;

//     if (nextListContacts !== prevListContacts) {
//       // console.log('Обновилось поле contacts, записываю contacts в хранилище');
//       localStorage.setItem('contacts', JSON.stringify(nextListContacts));
//     }
//   }

//   handleInputChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     const id = nanoid();
//     const name = evt.name;
//     const number = evt.number;
//     const contactsLists = [...this.state.contacts];

//     if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       contactsLists.push({ name, id, number });
//     }

//     this.setState({ contacts: contactsLists });
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   getFilteredContacts = () => {
//     const filterContactsList = this.state.contacts.filter(contact => {
//       return contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase());
//     });

//     return filterContactsList;
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <div>
//         <h1 className="mainTitle">Phonebook</h1>

//         <ContactForm handleSubmit={this.handleSubmit} />
//         <Filter filter={filter} handleInputChange={this.handleInputChange} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }
