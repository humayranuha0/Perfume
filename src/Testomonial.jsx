import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Testimonial = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-3">
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5"
          data-aos="fade-up"
        >
          <div>
            <span
              className="badge rounded-pill bg-danger-subtle text-danger-emphasis px-3 py-2 text-uppercase mb-2 d-inline-flex align-items-center gap-1"
              style={{ letterSpacing: "2px", fontSize: "0.7rem" }}
            >
              <HiSparkles className="text-danger" /> REAL RESULTS
            </span>
            <h2
              className="display-6 fw-bold text-dark mb-0"
              style={{ fontFamily: "serif" }}
            >
              Real People, Real Experience.
            </h2>
          </div>
          <Link
            to="/allreview"
            className="btn btn-link text-dark fw-semibold text-decoration-none p-0 mt-3 mt-md-0 d-inline-flex align-items-center gap-2"
          >
            View All Reviews <FaArrowRight style={{ fontSize: "0.85rem" }} />
          </Link>
        </div>

        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div
              className="p-4 rounded-4 h-100 shadow-sm transition-all"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="text-warning mb-2 fs-6 d-flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="text-dark fs-6 fst-italic mb-4"
                style={{ lineHeight: "1.6" }}
              >
                "Lumière has completely redefined my daily scent routine.
                L'Élixir de Rose stays on all day without being overpowering. I
                get compliments everywhere I go!"
              </p>
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  alt="Jessica R."
                  className="rounded-circle object-fit-cover"
                  style={{ width: "45px", height: "45px" }}
                />
                <div>
                  <h6 className="fw-bold text-dark mb-0 fs-6">Jessica R.</h6>
                  <small className="text-muted">New York, USA</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div
              className="p-4 rounded-4 h-100 shadow-sm transition-all"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="text-warning mb-2 fs-6 d-flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="text-dark fs-6 fst-italic mb-4"
                style={{ lineHeight: "1.6" }}
              >
                "Finally found a perfume brand that is truly cruelty-free and
                doesn't irritate my sensitive skin. The botanical notes feel so
                natural and elegant."
              </p>
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"
                  alt="Amanda L."
                  className="rounded-circle object-fit-cover"
                  style={{ width: "45px", height: "45px" }}
                />
                <div>
                  <h6 className="fw-bold text-dark mb-0 fs-6">Amanda L.</h6>
                  <small className="text-muted">London, UK</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
