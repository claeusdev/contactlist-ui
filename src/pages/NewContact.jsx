import ContactForm from "../components/Form";
import Api from "../api";
import { useHistory } from "react-router";
import { useState } from "react";

export default function NewContact() {
  const history = useHistory();
  const createContact = async (values) => {
    const response = await Api().create(values);
    if (response.status === 201) {
      history.push("/");
    }
  };
  return (
    <>
      <h1>Add Contact</h1>
      <ContactForm handleSubmit={createContact} />
    </>
  );
}
