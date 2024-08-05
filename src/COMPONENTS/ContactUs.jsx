import React from 'react';

function ContactUs() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, feel free to reach out to us.</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
