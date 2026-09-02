import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { GiFragrance } from "react-icons/gi";

export default function NotesGuide() {
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

        <div className="row align-items-center mb-5 g-5">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small mb-3 fw-semibold d-inline-flex align-items-center gap-1">
              <GiFragrance className="text-primary" /> FRAGRANCE ANATOMY
            </span>
            <h1
              className="display-4 fw-bold mb-3"
              style={{ fontFamily: "Lora, serif" }}
            >
              Understanding Scent Notes
            </h1>
            <p className="text-muted lead fs-6" style={{ lineHeight: "1.8" }}>
              Every luxury perfume tells a story in three chapters. Learn how
              top, heart, and base notes unfold gracefully on your skin over
              time.
            </p>
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="position-relative overflow-hidden rounded-4 shadow-sm border">
              <img
                src="https://media.istockphoto.com/id/2236000880/photo/rose-perfume.jpg?s=612x612&w=0&k=20&c=H1F0I7RZA87mWUCult8521EqWKm87GVKUxVeH-t5bCE="
                alt="Aesthetic Perfume Bottle"
                className="img-fluid w-100 object-fit-cover"
                style={{ height: "260px" }}
              />
              <div className="position-absolute bottom-0 start-0 m-3 p-2 bg-white bg-opacity-90 rounded-3 shadow-sm d-flex align-items-center gap-1">
                <HiSparkles className="text-warning" />
                <span
                  className="text-dark small fw-bold"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  The Art of Luxury Scent
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card border-0 shadow-sm rounded-4 bg-white h-100 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1125870538/photo/a-jar-of-perfume-without-a-cap-with-a-sprig-of-gypsophila.jpg?s=612x612&w=0&k=20&c=xRgkQfr7QqFP8Lh0kYi0pviXmQHH4DOBxJJKu9kEGro="
                alt="Top Notes"
                className="card-img-top object-fit-cover"
                style={{ height: "160px" }}
              />
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge bg-dark text-white px-3 py-1 rounded-pill align-self-start mb-3 d-inline-flex align-items-center gap-1">
                  <FiClock /> FIRST 15-30 MINUTES
                </span>
                <h3
                  className="fw-bold mb-3"
                  style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
                >
                  Top Notes
                </h3>
                <p
                  className="text-muted small mb-4"
                  style={{ lineHeight: "1.7" }}
                >
                  The initial impression of the fragrance. These are light,
                  fresh molecules that evaporate quickly, welcoming you with the
                  first burst of scent.
                </p>
                <div className="mt-auto border-top pt-3">
                  <span className="fw-semibold small text-dark">
                    Common Examples:
                  </span>
                  <p className="text-muted small mb-0 mt-1">
                    Bergamot, Lemon, Pink Pepper, Sea Salt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card border-0 shadow-sm rounded-4 bg-white h-100 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1194825741/photo/close-up-of-glass-bottle-of-perfume-and-opened-gift-box-as-a-background-on-the-white-surface.jpg?s=612x612&w=0&k=20&c=wL-Jxi5xwfr2jp4QzNAQJQtFYr-XYC5WmZyCChL_EYA="
                alt="Heart Notes"
                className="card-img-top object-fit-cover"
                style={{ height: "160px" }}
              />
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge bg-dark text-white px-3 py-1 rounded-pill align-self-start mb-3 d-inline-flex align-items-center gap-1">
                  <FiClock /> 2 TO 4 HOURS
                </span>
                <h3
                  className="fw-bold mb-3"
                  style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
                >
                  Heart (Middle) Notes
                </h3>
                <p
                  className="text-muted small mb-4"
                  style={{ lineHeight: "1.7" }}
                >
                  Emerging just as the top notes fade, the heart forms the core
                  of the fragrance. They are usually warm, floral, and
                  well-rounded.
                </p>
                <div className="mt-auto border-top pt-3">
                  <span className="fw-semibold small text-dark">
                    Common Examples:
                  </span>
                  <p className="text-muted small mb-0 mt-1">
                    Rose Damascena, Jasmine, Cardamom, Iris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card border-0 shadow-sm rounded-4 bg-white h-100 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2149954181/photo/three-luxury-perfume-bottles.jpg?s=612x612&w=0&k=20&c=KAoIRUXUd9iG00-e9fygQNGl2e3drc-8aNPSdrtngug="
                alt="Base Notes"
                className="card-img-top object-fit-cover"
                style={{ height: "160px" }}
              />
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge bg-dark text-white px-3 py-1 rounded-pill align-self-start mb-3 d-inline-flex align-items-center gap-1">
                  <FiClock /> 6+ HOURS
                </span>
                <h3
                  className="fw-bold mb-3"
                  style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
                >
                  Base Notes
                </h3>
                <p
                  className="text-muted small mb-4"
                  style={{ lineHeight: "1.7" }}
                >
                  The rich, deep foundation that lingers longest on your skin.
                  These notes mix with your body chemistry to create your unique
                  signature scent.
                </p>
                <div className="mt-auto border-top pt-3">
                  <span className="fw-semibold small text-dark">
                    Common Examples:
                  </span>
                  <p className="text-muted small mb-0 mt-1">
                    Vanilla, Amberwood, Sandalwood, Musk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
