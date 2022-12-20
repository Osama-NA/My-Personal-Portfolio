import React, { useState, useRef } from "react";
import InputGroup from "./InputGroup";
import LoadingSpinner from "../UI/loading-spinner/LoadingSpinner";
import SuccessTab from "../UI/success-tab/SuccessTab";
import { isValidEmail } from "../../utils/validators";
import emailjs from "@emailjs/browser";

const emailServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const defaultFormInput = {
  email: "",
  name: "",
  message: "",
};

const ContactForm = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [formInput, setFormInput] = useState(defaultFormInput);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (!isValidateForm()) return;

    sendMessage();
  };

  const isValidateForm = () => {
    const { email, name, message } = formInput;

    if (
      message.trim().length === 0 ||
      email.trim().length === 0 ||
      name.trim().length === 0
    ) {
      alert("Please fill in all the fields");
      setLoading(false);
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      setLoading(false);
      return false;
    }

    return true;
  };

  const sendMessage = () => {
    // Send email
    emailjs
      .sendForm(
        emailServiceID,
        emailTemplateID,
        formRef.current,
        emailPublicKey
      )
      .then(
        (result) => handleSentMessageResponse(result.status, result.text),
        (error) => handleSentMessageResponse(error.status, error.text)
      );

    // Reset form
    setFormInput(defaultFormInput);
  };

  const handleSentMessageResponse = (status, text) => {
    if (status === 200) {
        setShowSuccessTab(true);
        setTimeout(() => setShowSuccessTab(false), 3000);
    } else {
      console.log(text);
      alert("Failed to send message, please try again later");
    }

    // Hide loader;
    setLoading(false);
    // Reset form
    setFormInput(defaultFormInput);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} ref={formRef}>
        <h1>
          Send me a message, let's get in touch
          <span>!</span>
        </h1>

        <InputGroup
          label="Name"
          type="text"
          placeholder="John Doe"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <InputGroup
          label="Email"
          type="email"
          placeholder="example@email.com"
          value={formInput.email}
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
        />
        <InputGroup
          label="Message"
          type="textarea"
          placeholder="Enter your message"
          value={formInput.message}
          onChange={(e) =>
            setFormInput({ ...formInput, message: e.target.value })
          }
        />

        <button type="submit">Send message</button>

        {loading && <LoadingSpinner />}
      </form>

      {showSuccessTab && (
        <SuccessTab
          setShowSuccessTab={setShowSuccessTab}
          message="Message successfully sent"
        />
      )}
    </>
  );
};

export default ContactForm;
