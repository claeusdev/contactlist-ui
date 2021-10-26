import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm({ handleSubmit, model }) {
  const [contact, setContact] = useState(() =>
    model
      ? {
          email: model.attributes.email,
          firstName: model.attributes.first_name,
          lastName: model.attributes.last_name,
          phoneNumber: model.attributes.phone_number,
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }
  );

  const onSubmitForm = (e, values) => {
    e.preventDefault();
    handleSubmit(values);
  };

  const onSetContact = (e) => {
    setContact(state => ({...state, [e.target.name]: e.target.value}))
  }

  return (
    <Form onSubmit={(e) => onSubmitForm(e, contact)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={contact.email}
          onChange={onSetContact}
          name="email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={contact.firstName}
          onChange={onSetContact}
          name="firstName"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={onSetContact}
          name="lastName"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTelephone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          value={contact.phoneNumber}
          onChange={onSetContact}
          name="phoneNumber"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
