import { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import ContactForm from "../components/Form";

import Api from "../api";

export default function EditContact({ match, history, setFlash }) {
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      setIsLoading(true);
      const response = await Api().getContact(match.params.id)
      setContact(response.data);
      setIsLoading(false);
    }
    fetchContact();
  }, [match.params.id]);

  const updateContact = async (values) => {
    const response = await Api().update({ ...values, id: match.params.id });
    if (response.status === 200) {
      return history.push("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <h1>Edit Contact</h1>
          <ContactForm model={contact} handleSubmit={updateContact} />
          <Button variant="link" onClick={() => history.goBack()}>
              Back
            </Button>
        </>
      )}
    </>
  );
}
