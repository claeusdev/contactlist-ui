import { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Api from "../api";
import Contacts from "../components/Contacts";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/v1/contacts");
      const contacts = await response.json();
      setContacts(contacts.data);
      setIsLoading(false);
    }
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    const response = await Api().delete(id);
    if (response.status === 204) {
      setContacts(contacts => contacts.filter(contact => contact.id !== id));
      setFlash({
        message: "Successfully Deleted",
        type: "success"
      })
    } else {
      setFlash({
        message: "There was something wrong trying to delete at this time.",
        type: "error"
      })
    }
  };

  return (
    <div className="App">
      <Container>
        <h1>Contacts List</h1>
        <Link to={`/contact/new`}>
          Add Contact
        </Link>
        {flash && <Alert variant={flash.type}>{flash.message}</Alert>}

        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <Contacts contacts={contacts} deleteContact={deleteContact} />
        )}
      </Container>
    </div>
  );
}

export default Home;
