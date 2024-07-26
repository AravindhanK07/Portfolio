import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      access_key: "7d4555b1-5b01-438d-b5d1-c624749f5f22",
      name: name,
      email: mail,
      message: message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", data);

      setName("");
      setMail("");
      setMessage("");
      setOpenModal(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 2 }}
      className="container text-light"
    >
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
        <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
          <h1>Let's connect</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center order-md-1">
          <form style={{ width: "400px" }} onSubmit={handleSubmit}>
            <div className="my-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Type something"
                style={{ resize: "none", height: "100px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-end mx-2">
              <button
                className="btn btn-dark border border-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="social-media-icons row justify-content-center">
        <div className="col-12 col-md-3 mt-5 text-center">
          <a
            href="https://www.linkedin.com/in/aravindhan07"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/AravindhanK07"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/_aravindh.yeager_"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>

      {openModal && (
        <div
          className="modal fade show text-dark"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body fw-bold">Message sent!!!</div>
              <div className="modal-footer">
                <button className="btn btn-dark" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
