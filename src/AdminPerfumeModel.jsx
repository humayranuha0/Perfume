import React, { useState, useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export default function PerfumesList({ onAddToCart }) {
  const [perfumes, setPerfumes] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

useEffect(() => {
  fetch(`${API_BASE_URL}/api/perfumes`)
    .then((res) => res.json())
    .then((data) => setPerfumes(data))
    .catch((err) => console.error("Error fetching perfumes:", err));
}, []);
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
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-light text-dark border px-3 py-1 rounded-pill small mb-2 fw-semibold d-inline-flex align-items-center gap-1">
            <HiSparkles className="text-warning" /> OUR COLLECTION
          </span>
          <h2
            className="fw-bold display-6"
            style={{ fontFamily: "Lora, serif" }}
          >
            Explore Our Scent Collection
          </h2>
          <p className="text-muted">
            Discover our exclusive range of signature fragrances crafted for
            you.
          </p>
        </div>

        <div className="row g-4">
          {perfumes.length === 0 ? (
            <div className="col-12 text-center py-5" data-aos="fade-in">
              <p className="text-muted">
                No perfumes available in the collection right now.
              </p>
            </div>
          ) : (
            perfumes.map((p, index) => (
              <div
                className="col-md-6"
                key={p._id || index}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
              >
                <div className="card border-0 shadow-sm rounded-4 bg-white p-3 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={
                        p.image ||
                        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300&auto=format&fit=crop&q=80"
                      }
                      alt={p.name}
                      className="rounded-3 object-fit-cover"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="flex-grow-1">
                      <h5
                        className="fw-bold mb-1"
                        style={{ fontFamily: "Lora, serif", fontSize: "18px" }}
                      >
                        {p.name}
                      </h5>
                      <p className="text-muted small mb-2">
                        {p.description || p.category}
                      </p>
                      <div className="fw-semibold text-dark d-flex align-items-center gap-2">
                        <span>${p.price}</span>
                        <span className="text-muted fw-normal small">
                          | Stock: {p.stock}
                        </span>
                        <span className="text-warning small d-flex align-items-center gap-1 ms-auto">
                          <AiFillStar /> {p.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-top text-end">
                    <button
                      onClick={() => onAddToCart(p)}
                      className="btn btn-dark rounded-pill px-4 btn-sm d-inline-flex align-items-center gap-2 fw-medium shadow-sm"
                    >
                      <FiShoppingCart className="small" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
