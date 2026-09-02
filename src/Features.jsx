import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FeaturedScents({ onAddToCart }) {
  const [perfumes, setPerfumes] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

 useEffect(() => {
  fetch(`${API_BASE_URL}/api/perfumes`)
    .then((res) => res.json())
    .then((data) => setPerfumes(data))
    .catch((err) => console.log(err));
}, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-4" data-aos="fade-right" data-aos-duration="600">
          <Link to="/" className="text-muted text-decoration-none small">
            &larr; Back to Home
          </Link>
        </div>

        <div
          className="d-flex justify-content-between align-items-end mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <p
              className="text-uppercase text-muted small mb-1"
              style={{ letterSpacing: "2px" }}
            >
              FEATURED COLLECTION
            </p>
            <h2 className="fw-bold m-0" style={{ fontFamily: "Lora, serif" }}>
              Our Signature Scents
            </h2>
          </div>

          <Link
            to="/perfumes"
            className="text-dark text-decoration-none fw-semibold small pb-1 border-bottom border-dark"
          >
            View All Products &rarr;
          </Link>
        </div>

        <div className="row g-4">
          {perfumes.slice(0, 4).map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-3"
              key={item._id || item.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150} // কার্ডগুলো একটির পর একটি সুন্দর সিকুয়েন্সে আসার জন্য
            >
              <div className="card h-100 border-0 shadow-sm position-relative rounded-4 overflow-hidden product-card">
                {item.badge && (
                  <span
                    className="position-absolute top-0 start-0 m-3 badge bg-dark text-white text-uppercase"
                    style={{ zIndex: 2 }}
                  >
                    {item.badge}
                  </span>
                )}

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top object-fit-cover product-img"
                    style={{ height: "200px" }}
                  />
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2 small text-muted">
                    <span className="text-warning fw-bold">
                      ★ {item.rating}{" "}
                      <span className="text-secondary fw-normal">
                        ({item.reviews || "450"})
                      </span>
                    </span>
                    <span>{item.size}</span>
                  </div>

                  <h3
                    className="h6 fw-bold text-dark mb-1"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-muted small mb-4"
                    style={{ fontSize: "12px" }}
                  >
                    {item.notes}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span
                      className="fw-bold fs-5"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      ${Number(item.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="btn btn-dark rounded-pill px-3 py-2 btn-cart"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
