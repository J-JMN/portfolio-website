import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" tabIndex="-1" aria-labelledby="contact-title" className="contact-section">
      <h2 id="contact-title">Contact</h2>
      <p>
        Feel free to reach me at <a href="mailto:j.mburu.pro@gmail.com">j.mburu.pro@gmail.com</a> or find me on{' '}
        <a href="https://github.com/J-JMN" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  );
};

export default Contact;
