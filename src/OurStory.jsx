import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { GiLeafSwirl, GiChemicalDrop, GiAmphora } from "react-icons/gi";

export default function OurStory() {
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
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small mb-3 fw-semibold d-inline-flex align-items-center gap-1">
              <HiSparkles className="text-warning" /> OUR HERITAGE & MISSION
            </span>
            <h1
              className="display-4 fw-bold mb-3"
              style={{ fontFamily: "Lora, serif" }}
            >
              Crafting Memories Through Scent
            </h1>
            <p className="text-muted lead fs-6" style={{ lineHeight: "1.8" }}>
              At Lumière, we believe that fragrance is more than an accessory—it
              is an invisible poetry, a silent storyteller, and a keeper of our
              most cherished moments.
            </p>
          </div>
        </div>

        <div className="row align-items-center g-5 mb-5 pb-5 border-bottom">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="position-relative">
              <img
                src="https://media.istockphoto.com/id/2156568452/photo/perfume.jpg?s=612x612&w=0&k=20&c=QOVnJkeowNP6cpXK5uccSOottub0Jki357oI2gQDzT4="
                alt="Perfume Lab"
                className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
                style={{ height: "400px" }}
              />
            </div>
          </div>
          <div
            className="col-lg-6 ps-lg-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="fw-bold mb-4" style={{ fontFamily: "Lora, serif" }}>
              Rooted in Purity, Elevated by Design
            </h2>
            <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
              Founded with an uncompromising vision, Lumière bridges the gap
              between traditional artisanal perfumery and modern sustainable
              luxury. Every bottle is a harmonious blend of rare botanicals,
              ethically harvested woods, and safe, non-toxic ingredients.
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
              We work closely with master perfumers across the globe to curate
              scents that respect both your skin and the planet, ensuring a
              clean, radiant experience with every drop.
            </p>

            <div className="d-flex gap-4">
              <div>
                <h3
                  className="fw-bold fs-3 mb-0"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  100%
                </h3>
                <small className="text-muted">Vegan & Cruelty-Free</small>
              </div>
              <div className="border-start ps-4">
                <h3
                  className="fw-bold fs-3 mb-0"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  12+
                </h3>
                <small className="text-muted">Hours Longevity</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mb-5" data-aos="fade-up">
          <div className="col-12 mb-4">
            <h2 className="fw-bold" style={{ fontFamily: "Lora, serif" }}>
              The Pillars of Lumière
            </h2>
          </div>

          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
              <div className="mb-3 fs-3 text-success">
                <GiLeafSwirl />
              </div>
              <h5
                className="fw-bold mb-2"
                style={{ fontFamily: "Lora, serif" }}
              >
                Sustainable Sourcing
              </h5>
              <p
                className="text-muted small mb-0"
                style={{ lineHeight: "1.6" }}
              >
                We partner with eco-conscious growers who prioritize
                biodiversity and fair labor practices for all raw materials.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
              <div className="mb-3 fs-3 text-warning">
                <GiChemicalDrop />
              </div>
              <h5
                className="fw-bold mb-2"
                style={{ fontFamily: "Lora, serif" }}
              >
                Clean Ingredients
              </h5>
              <p
                className="text-muted small mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Formulated without parabens, phthalates, or harmful synthetic
                chemicals, making it safe for sensitive skin.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
              <div className="mb-3 fs-3 text-secondary">
                <GiAmphora />
              </div>
              <h5
                className="fw-bold mb-2"
                style={{ fontFamily: "Lora, serif" }}
              >
                Timeless Aesthetics
              </h5>
              <p
                className="text-muted small mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Designed not just to smell exquisite, but to look like a piece
                of art resting on your vanity table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
