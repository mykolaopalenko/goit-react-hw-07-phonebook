import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { PhoneTitle, Wrapper } from './App.styled';
import { GlobalStyles } from 'utils/GlobalStyle';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <Wrapper>
      <PhoneTitle>Phonebook</PhoneTitle>
      <ContactForm />
      <PhoneTitle>Contacts</PhoneTitle>
      <Filter />
      <ContactList />
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};
