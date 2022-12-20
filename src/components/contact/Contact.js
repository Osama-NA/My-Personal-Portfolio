import React from "react";
import ContactForm from "./ContactForm";
import SideContent from "./SideContent";
import ContactStyle from "../../styles/Contact.styled";

const Contact = ({ contactRef }) => {
  return (
    <ContactStyle>
      <div className="container">
        <div ref={contactRef} className="ref"></div>
        <h1>
          <span>#</span> Contact
        </h1>

        <main className="content">
          <ContactForm />
          <SideContent />
        </main>
      </div>
    </ContactStyle>
  );
};

export default Contact;
