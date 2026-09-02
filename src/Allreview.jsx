import React from "react";
import { Link } from "react-router-dom";

const reviewsData = [
  {
    id: 1,
    name: "Jessica R.",
    location: "New York, USA",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    comment:
      "Lumière has completely redefined my daily scent routine. L'Élixir de Rose stays on all day without being overpowering. I get compliments everywhere I go!",
  },
  {
    id: 2,
    name: "Amanda L.",
    location: "London, UK",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    comment:
      "Finally found a perfume brand that is truly cruelty-free and doesn't irritate my sensitive skin. The botanical notes feel so natural and elegant.",
  },
  {
    id: 3,
    name: "Sophia M.",
    location: "Paris, France",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    comment:
      "The packaging is stunning and the Midnight Oud fragrance has such a sophisticated blend. Truly feels like niche luxury at a reasonable price.",
  },
  {
    id: 4,
    name: "David K.",
    location: "Toronto, Canada",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    comment:
      "Bought Oceanic Breeze for summer. Super crisp, fresh, and stays active even after long workout sessions or outdoor events!",
  },
  {
    id: 5,
    name: "Elena G.",
    location: "Milan, Italy",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150",
    comment:
      "Fast shipping and exquisite scents. The Vanilla Bloom has become my signature evening wear fragrance!",
  },
  {
    id: 6,
    name: "Marcus V.",
    location: "Sydney, Australia",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    comment:
      "Outstanding customer service and fast delivery. The Scent Quiz helped me land on the exact type of fragrance I loved.",
  },
];

export default function AllReviews() {
  return (
    <div className="container py-5 my-4" style={{ minHeight: "70vh" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="badge bg-danger-subtle text-danger text-uppercase px-3 py-2 rounded-pill fw-semibold mb-2">
            Real Results
          </span>
          <h2 className="fw-bold display-6">Customer Reviews & Feedback</h2>
        </div>
        <Link to="/" className="btn btn-outline-dark rounded-pill px-4">
          ← Back to Home
        </Link>
      </div>

      <div className="row g-4 mt-2">
        {reviewsData.map((rev) => (
          <div key={rev.id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
              <div className="text-warning mb-3">{"★".repeat(rev.rating)}</div>
              <p
                className="card-text text-secondary fst-italic mb-4"
                style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
              >
                "{rev.comment}"
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="rounded-circle me-3 object-fit-cover"
                  width="48"
                  height="48"
                />
                <div>
                  <h6 className="fw-bold mb-0 text-dark">{rev.name}</h6>
                  <small className="text-muted">{rev.location}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
