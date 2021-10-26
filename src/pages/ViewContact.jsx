import { useEffect, useState } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Api from "../api";

export default function ViewContact({ match }) {
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updateHistory, setUpdateHistory] = useState([]);

  const history = useHistory();
  useEffect(() => {
    async function fetchContact() {
      setIsLoading(true);
      const response = await Api().getContact(match.params.id);
      setContact(response.data);
      setUpdateHistory(response.included)
      setIsLoading(false);
    }
    fetchContact();
  }, [match.params.id]);

  return (
    <div className="App">
      <Container>
        <h1>Contacts List</h1>

        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <>
            {contact && (
              <div className="my-3">
                <h1>
                  Name: {contact.attributes.first_name}{" "}
                  {contact.attributes.last_name}
                </h1>
                <h2>Email: {contact.attributes.email}</h2>
                <h2>Phone Number: {contact.attributes.phone_number}</h2>
              </div>
            )}
            <h3>Update history</h3>
            <hr />
            <ul>
              {updateHistory.map(history => <li>{history.attributes.titlize}</li>)}
            </ul>
            <Button variant="link" onClick={() => history.goBack()}>
              Back
            </Button>
          </>
        )}
      </Container>
    </div>
  );
}
