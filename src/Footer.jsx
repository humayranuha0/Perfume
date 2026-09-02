import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import Swal from "sweetalert2";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        title: "Subscribed!",
        text: "Thank you for subscribing! Check your inbox for a 10% discount code.",
        icon: "success",
        confirmButtonColor: "#2c2c2c",
        confirmButtonText: "Great!",
        background: "#fcfbf9",
        color: "#2c2c2c",
        customClass: {
          popup: "rounded-4 shadow border-0",
          confirmButton: "rounded-pill px-4",
        },
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-5 col-md-12" data-aos="fade-up">
            <h4 className="fw-bold text-uppercase mb-1 style-title d-flex align-items-center gap-2">
              LUMIÈRE <HiSparkles className="text-warning fs-6" />
            </h4>
            <p
              className="small text-muted mb-3"
              style={{ letterSpacing: "2px" }}
            >
              PARFUMS
            </p>
            <p
              className="text-secondary small mb-4"
              style={{ maxWidth: "320px" }}
            >
              Subscribe to get 10% off your first order and stay updated on
              exclusive scent releases.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="d-flex gap-2"
              style={{ maxWidth: "360px" }}
            >
              <input
                type="email"
                id="newsletter-email"
                name="newsletterEmail"
                aria-label="Email address for newsletter"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="form-control bg-transparent text-light border-secondary small"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="btn btn-outline-light px-3 d-flex align-items-center"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>

          <div
            className="col-lg-2 col-md-3 col-6 offset-lg-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Shop
            </h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">
                <Link
                  to="/perfumes"
                  className="text-secondary text-decoration-none hover-link"
                >
                  All Products
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/perfumes"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Best Sellers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/perfumes"
                  className="text-secondary text-decoration-none hover-link"
                >
                  New Arrivals
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/quiz"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Scent Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-md-3 col-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Company
            </h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">
                <Link
                  to="/ourStory"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Our Story
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/notes"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Ingredients
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Sustainability
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-md-3 col-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Help
            </h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">
                <Link
                  to="/faq"
                  className="text-secondary text-decoration-none hover-link"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/faq"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Shipping &amp; Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary"
          data-aos="fade-up"
        >
          <p className="mb-2 mb-md-0">
            &copy; 2026 Lumière Parfums. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <Link
              to="/about"
              className="text-secondary text-decoration-none hover-link"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about"
              className="text-secondary text-decoration-none hover-link"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
