import { Row, Col } from "react-bootstrap";
import Contact from "./Contact";

function Contacts({ contacts, deleteContact }) {
  return (
    <Row>
      {contacts.map((contact) => (
        <Col md={4} key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
        </Col>
      ))}
    </Row>
  );
}

export default Contacts;
