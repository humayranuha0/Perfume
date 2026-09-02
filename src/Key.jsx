import React from "react";

const Key = () => {
  return (
    <section className="py-5 bg-white border-top border-bottom border-light-subtle">
      <div className="container py-3">
        <div className="text-center mb-5 promise-header">
          <span
            className="badge rounded-pill bg-danger-subtle text-danger-emphasis px-3 py-2 text-uppercase"
            style={{ letterSpacing: "2px", fontSize: "0.7rem" }}
          >
            OUR PROMISE
          </span>
          <h2
            className="display-6 fw-bold text-dark mt-2"
            style={{ fontFamily: "serif" }}
          >
            Pure Luxury, Zero Compromise.
          </h2>
        </div>

        <div className="row g-4 text-center">
          <div className="col-lg-3 col-sm-6 promise-card-wrapper delay-1">
            <div
              className="p-4 rounded-4 h-100 promise-card"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="fs-2 mb-3 icon-float">🌸</div>
              <h5 className="fw-bold text-dark fs-6 mb-2">Clean Botanicals</h5>
              <p className="text-muted small mb-0">
                Safe, non-toxic & dermatologist tested on all skin types.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 promise-card-wrapper delay-2">
            <div
              className="p-4 rounded-4 h-100 promise-card"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="fs-2 mb-3 icon-float">🐰</div>
              <h5 className="fw-bold text-dark fs-6 mb-2">100% Cruelty Free</h5>
              <p className="text-muted small mb-0">
                Kind to animals, always. Never tested on animals.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 promise-card-wrapper delay-3">
            <div
              className="p-4 rounded-4 h-100 promise-card"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="fs-2 mb-3 icon-float">🌱</div>
              <h5 className="fw-bold text-dark fs-6 mb-2">Vegan Friendly</h5>
              <p className="text-muted small mb-0">
                Formulated entirely without animal-derived ingredients.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 promise-card-wrapper delay-4">
            <div
              className="p-4 rounded-4 h-100 promise-card"
              style={{ backgroundColor: "#FCF8F5" }}
            >
              <div className="fs-2 mb-3 icon-float">♻️</div>
              <h5 className="fw-bold text-dark fs-6 mb-2">
                Sustainable Packaging
              </h5>
              <p className="text-muted small mb-0">
                Eco-conscious glass bottles and recyclable boxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Key;
