import React from 'react'
import ContactForm from './ContactForm'
import ContactStyle from "../../styles/Contact.styled";

const Contact = ({contactRef}) => {
  return (
    <ContactStyle>
      <div className="container">
        <div ref={contactRef} className="ref"></div>
        <h1><span>#</span> Contact</h1>

        <main className='content'>
          <ContactForm />
        </main>
      </div>
    </ContactStyle>
  )
}

export default Contact