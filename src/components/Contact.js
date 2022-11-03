import { Link, useNavigate } from "react-router-dom";

import Footer from "./Footer";

const Contact = () => {
  const name = "Olukunle Joseph/lerderl";
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='container'>
      <Link to='/'>Go Back to Home page</Link>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      {/* form */}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label">First name</label>
          <input type="text" className="form-control" id="first_name" placeholder='Enter your first name' required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name" className="form-label">Last name</label>
          <input type="text" className="form-control" id="last_name" placeholder='Enter your last name' required/>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder='yourname@email.com' required/>
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            rows={4}
            required
            type="text"
            id="message"
            className="form-control"
            placeholder="Send me a message and i'll reply as soon as possible..."
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
            <label className="form-check-label" htmlFor="gridCheck">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary" id='btn__submit'>Send message</button>
        </div>
      </form>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;
