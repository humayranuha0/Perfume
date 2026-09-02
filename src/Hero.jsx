import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="py-5 bg-light-subtle position-relative overflow-hidden">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span
              className="badge rounded-pill bg-danger-subtle text-danger-emphasis px-3 py-2 text-uppercase mb-3 d-inline-flex align-items-center gap-2"
              style={{ letterSpacing: "1.5px", fontSize: "0.75rem" }}
            >
              <HiSparkles className="text-danger" /> CLEAN. EFFECTIVE. RADIANT.
            </span>

            <h1
              className="display-4 fw-bold text-dark mb-3"
              style={{ fontFamily: "Lora, serif", lineHeight: "1.2" }}
            >
              A Symphony Of Fine Scents.
            </h1>

            <p
              className="text-secondary mb-4 fs-6"
              style={{ maxWidth: "480px" }}
            >
              Indulge in artisanal fragrances meticulously blended with rare
              botanicals. Designed to reveal your unique identity and leave an
              everlasting impression.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link
                to="/perfumes"
                className="btn btn-dark rounded-pill px-4 py-2 d-flex align-items-center gap-2 shadow-sm"
              >
                Explore Scents <FiArrowRight />
              </Link>
              <Link
                to="/quiz"
                className="btn btn-outline-dark rounded-pill px-4 py-2"
              >
                Scent Quiz
              </Link>
            </div>

            <div className="pt-3 border-top d-flex align-items-center gap-3">
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  alt="User"
                  className="rounded-circle border border-2 border-white"
                  width="36"
                  height="36"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                  alt="User"
                  className="rounded-circle border border-2 border-white"
                  width="36"
                  height="36"
                  style={{ marginLeft: "-10px" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"
                  alt="User"
                  className="rounded-circle border border-2 border-white"
                  width="36"
                  height="36"
                  style={{ marginLeft: "-10px" }}
                />
              </div>
              <div>
                <p className="mb-0 fw-bold small text-dark">
                  Trusted by 25k+ customers
                </p>
                <p className="mb-0 small text-warning d-flex align-items-center gap-1">
                  <FiStar className="fill-warning" /> <strong>4.9 / 5.0</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80"
                alt="Signature Perfume"
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: "520px" }}
              />

              <div
                className="position-absolute bottom-0 start-0 m-4 p-3 bg-white rounded-3 shadow border border-light"
                style={{ maxWidth: "220px" }}
              >
                <span
                  className="badge bg-dark text-uppercase mb-1"
                  style={{ fontSize: "9px", letterSpacing: "1px" }}
                >
                  Signature Blend
                </span>
                <h6
                  className="fw-bold mb-1 text-dark"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  L'Élixir de Rose
                </h6>
                <small
                  className="text-muted d-block"
                  style={{ fontSize: "11px" }}
                >
                  Rose Damascena & Vanilla
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
