import { useState } from 'react';

import css from './ContactForm.module.css';


export function ContactForm ({handleSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name': setName(value);
        break;
      
      case 'number': setNumber(value);
        break;
      
      default: return;
    } 
   
  }


const handleFormSubmit = evt => {
    evt.preventDefault();

  handleSubmit({ name: name, number: number });

  // очіщення форми
  setName('');
  setNumber('');
};
  
return (<form className={css.contactForm} onSubmit={handleFormSubmit}>
    <h2 className={css.nameTxt}>Name</h2>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      className={css.formName}
      placeholder="Please enter name"
      value={name}
      onChange={handleInputChange}
    />

    <h2 className={css.nameTxt}>Number</h2>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      className={css.formTel}
      placeholder="Please enter phone number"
      value={number}
      onChange={handleInputChange}
    />
    <button
      className={css.addContactBtn}
      type="submit"
      disabled={!name || !number}
    >
      Add contact
    </button>
  </form>);

};


// export class ContactForm extends Component {
  // state = {
  //   name: '',
  //   number: '',
  // };
  // handleInputChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   this.setState({ [name]: value });
  // };




//   handleSubmit = evt => {
//     evt.preventDefault();

//     this.props.handleSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.contactForm} onSubmit={this.handleSubmit}>
//         <h2 className={css.nameTxt}>Name</h2>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           className={css.formName}
//           placeholder="Please enter name"
//           value={name}
//           onChange={this.handleInputChange}
//         />

//         <h2 className={css.nameTxt}>Number</h2>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           className={css.formTel}
//           placeholder="Please enter phone number"
//           value={number}
//           onChange={this.handleInputChange}
//         />
//         <button
//           className={css.addContactBtn}
//           type="submit"
//           disabled={!name || !number}
//         >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };
