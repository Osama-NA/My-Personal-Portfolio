import React, {useState} from 'react'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

  return (
    <form>
        <h1>
            Send me a message, let's get in touch
            <span>!</span>
        </h1>

        <div className='input-group'>
            <label>Name</label>
            <input 
                type='text'
                placeholder='John Doe'
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
        </div>

        <div className='input-group'>
            <label>Email</label>
            <input 
                type='email'
                placeholder='example@email.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
        </div>

        <div className='input-group'>
            <label>Message</label>
            <textarea 
                placeholder='Enter your message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
            />
        </div>

        <button>Send message</button>
    </form>
  )
}

export default ContactForm