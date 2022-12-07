import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contactsOperations';
import {
  ContactName,
  ContactStyle,
  DeleteBtn,
} from '../ContactItem/ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactName>
        <Avatar size="40" name={name} round={true} />
        <ContactStyle>
          {name}: {number}
        </ContactStyle>
      </ContactName>
      <DeleteBtn
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        children="Delete"
        type="button"
      >
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
