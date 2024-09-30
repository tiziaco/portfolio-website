'use client';

import { sendContactForm } from '@/actions/contact';
import { useState, useTransition, FormEvent } from 'react';
import LitUpButton from './LitUpButton';


export default function ContactForm() {
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await sendContactForm({ fullname, email, message });
      if (result.success) {
        setStatus('Message sent successfully');
      } else {
        setStatus('Failed to send message');
      }
    });
  };

  return (
    <div className="contact-form flex flex-col justify-center items-center pt-10">
      <form onSubmit={handleSubmit}
        className='form_container glassmorphism'>
        <div>
          <label>Fullname</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className='form_input'
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='form_input'
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='form_textarea'
          />
        </div>
        <LitUpButton isPending={isPending}/>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
