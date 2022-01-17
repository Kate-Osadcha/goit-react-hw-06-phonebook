import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <Container>
      <ContactForm />

      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
