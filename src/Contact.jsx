import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiSend,
  FiUser,
  FiMail,
  FiBookOpen,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import { HiEnvelopeOpen } from "react-icons/hi2";

export default function Contact() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#fcfbf9",
        minHeight: "100vh",
        color: "#2c2c2c",
      }}
    >
      <div className="container py-4">
        <div className="mb-4" data-aos="fade-right">
          <Link
            to="/"
            className="text-muted text-decoration-none small d-inline-flex align-items-center gap-1"
          >
            <FiArrowLeft /> Back to Home
          </Link>
        </div>

        <div
          className="row justify-content-center text-center mb-5"
          data-aos="fade-up"
        >
          <div className="col-lg-8">
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small mb-3 fw-medium d-inline-flex align-items-center gap-1">
              <HiEnvelopeOpen className="text-danger" /> GET IN TOUCH
            </span>
            <h1
              className="display-4 fw-bold mb-3"
              style={{ fontFamily: "Lora, serif" }}
            >
              We'd Love to Hear From You
            </h1>
            <p className="text-muted lead fs-6" style={{ lineHeight: "1.8" }}>
              Have questions or need help finding your signature scent? Reach
              out to our concierge team.
            </p>
          </div>
        </div>

        {submitted && (
          <div className="row justify-content-center mb-4" data-aos="zoom-in">
            <div className="col-lg-7">
              <div className="alert alert-success text-center rounded-4 shadow-sm border-0 d-flex align-items-center justify-content-center gap-2 py-3">
                <FiCheckCircle className="fs-5" />
                <span>Thank you! Your message is delivered.</span>
              </div>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="150">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white">
              <h4
                className="fw-bold mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                Send a Message
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="name"
                      className="form-label small text-muted d-flex align-items-center gap-1 fw-medium"
                    >
                      <FiUser className="text-secondary" /> Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="form-control rounded-3 py-2 px-3 border-light-subtle bg-light"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="email"
                      className="form-label small text-muted d-flex align-items-center gap-1 fw-medium"
                    >
                      <FiMail className="text-secondary" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="form-control rounded-3 py-2 px-3 border-light-subtle bg-light"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="subject"
                      className="form-label small text-muted d-flex align-items-center gap-1 fw-medium"
                    >
                      <FiBookOpen className="text-secondary" /> Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      autoComplete="subject"
                      className="form-control rounded-3 py-2 px-3 border-light-subtle bg-light"
                      placeholder="Order Inquiry / Custom Fragrance"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="form-label small text-muted d-flex align-items-center gap-1 fw-medium"
                    >
                      <FiMessageSquare className="text-secondary" /> Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      autoComplete="off"
                      className="form-control rounded-3 py-2 px-3 border-light-subtle bg-light"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-dark w-100 rounded-pill py-3 d-inline-flex align-items-center justify-content-center gap-2 fw-medium shadow-sm"
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <FiSend className="small" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
