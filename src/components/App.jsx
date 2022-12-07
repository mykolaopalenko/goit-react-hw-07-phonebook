import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { PhoneTitle, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/Contacts/contactsOperations'
import { selectError, selectIsLoading } from '../redux/Contacts/contactsSelectors';
import { GlobalStyles } from 'utils/GlobalStyle';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error && toast.error(error);
  return (
    <Wrapper>
      <PhoneTitle>Phonebook</PhoneTitle>
      <ContactForm />
      <PhoneTitle>Contacts</PhoneTitle>
      <Filter />
      <ContactList />
      <GlobalStyles />
      {isLoading && !error && <Loader />}
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};
