import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};
    if (!user.name) validationErrors.name = "Name is required";
    if (!user.email) validationErrors.email = "Email is required";
    if (!user.subject) validationErrors.subject = "Subject is required";
    if (!user.message) validationErrors.message = "Message is required";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      console.log("Form submitted", user);
      alert("Successfully submitted");
      setUser({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <section
      className="contact my-5"
      data-aos="fade-down"
      data-aos-duration="700"
      data-aos-offset="200"
    >
      <div className="container">
        {/* map */}
        <div className="row mb-4">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193559.13256472183!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1757997306886!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <div className="row">
          {/* left side */}
          <div className="col-12 col-md-4 col-lg-5 mb-4">
            <div className="d-flex mb-3">
              <div className="me-3 text-danger fs-3">
                <FaLocationDot />
              </div>
              <div>
                <h5>Address</h5>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <div className="me-3 text-danger fs-3">
                <IoCall />
              </div>
              <div>
                <h5>Call Us</h5>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="me-3 text-danger fs-3">
                <IoMail />
              </div>
              <div>
                <h5>Email Us</h5>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          {/* right side form */}
          <div className="col-12 col-md-8 col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={user.name}
                    onChange={handleChange}
                  />
                  {error.name && (<p className="text-danger">{error.name}</p>)}
                </div>
                <div className="col-6 mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {error.email && (<small className="text-danger">{error.email}</small>)}
                </div>
              </div>
              <div className="mb-3">
                <input
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  value={user.subject}
                  onChange={handleChange}
                />
                {error.subject && (<small className="text-danger">{error.subject}</small>)}
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  value={user.message}
                  onChange={handleChange}
                ></textarea>
                {error.message && (<small className="text-danger">{error.message}</small>)}
              </div>
              <div>
                <button type="submit" className="btn btn-danger px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
