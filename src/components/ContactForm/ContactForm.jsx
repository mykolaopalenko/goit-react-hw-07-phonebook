import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts  } from '../../redux/Contacts/contactsSelectors';
import { addContact } from '../../redux/Contacts/contactsOperations';
import {
  ContactFormStyle,
  ContantLabel,
  ContactInput,
  ContactBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts );

  const handlOnChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return toast.error(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <ContactFormStyle onSubmit={handleOnSubmit}>
      <ContantLabel htmlFor={nameInputId}>
        Name
        <ContactInput
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlOnChange}
          value={name}
        />
      </ContantLabel>
      <ContantLabel htmlFor={numberInputId}>
        Number
        <ContactInput
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlOnChange}
          value={number}
        />
      </ContantLabel>
      <ContactBtn type="submit">Add contact</ContactBtn>
    </ContactFormStyle>
  );
};

export default ContactForm;
