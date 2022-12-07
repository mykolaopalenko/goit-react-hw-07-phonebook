import React from 'react';
import { getValueFilter } from '../../redux/Filters/filtersSelectors';
import { getContacts } from '../../redux/Contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { Item } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getValueFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

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
