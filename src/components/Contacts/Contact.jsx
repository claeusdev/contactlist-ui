import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Contact({ contact, deleteContact }) {
  return (
    <Card key={contact.id} body className="my-2">
      <Link to={`/contact/${contact.id}`}>
        {contact.attributes.first_name} {contact.attributes.last_name}
      </Link>

      <Button variant="link">
        <Link to={`/contact/${contact.id}/edit`}>Edit</Link>
      </Button>
      <Button variant="link" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </Card>
  );
}
