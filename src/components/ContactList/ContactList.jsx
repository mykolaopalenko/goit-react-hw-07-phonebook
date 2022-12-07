import React from 'react';
import { selectVisibleContacts } from '../../redux/Contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { Item } from './ContactList.styled';

const ContactList = () => {
   const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem id={id} name={name} number={number} />
        </Item>
      ))}
    </ul>
  );
};

export default ContactList;
