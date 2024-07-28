import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Particle from "./Particle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate email format and Gmail domain
  const validateEmail = (email) => {
    // Regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateGmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!validateEmail(formState.email)) {
      toast.error('Invalid email format', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        className: 'toast-error'
      });
      return;
    }

    if (!validateGmail(formState.email)) {
      toast.error('Please use a Gmail address', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        className: 'toast-error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_3heb9nc', 
        'template_7c8sg7e', 
        formState,
        'UQk5hBwJoCaPOcinR' 
      );
      toast.success('Message sent successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        className: 'toast-success'
      });
    } catch (err) {
      console.error('FAILED...', err);
      toast.error('Message failed to send.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        className: 'toast-error'
      });
    } finally {
      setFormState({ email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <Particle />
      <form onSubmit={handleSubmit}>
        <h1 className="project-heading">
          Let's <strong className="purple">Connect</strong>
        </h1>
        <p style={{ color: "white" }}>
          Reach out to me for any inquiry. I look forward to reaching new heights with <strong className="purple">YOU</strong>.
        </p>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="subject">Subject/Inquiry</label>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        
        <input type="submit" value="Send" disabled={isSubmitting} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
