import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiArrowRight,
  FiCreditCard,
} from "react-icons/fi";

export default function Cart({ cartItems = [], setCartItems }) {
  const navigate = useNavigate();

  const handleIncrease = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        (item._id || item.id) === productId
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item,
      ),
    );
  };

  const handleDecrease = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          (item._id || item.id) === productId && (item.qty || 1) > 1
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => (item.qty || 1) > 0),
    );
  };

  const handleRemove = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => (item._id || item.id) !== productId),
    );
  };

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      localStorage.setItem("redirectAfterLogin", "true");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0,
  );

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
        <div className="mb-4" data-aos="fade-down">
          <h2
            className="fw-bold d-flex align-items-center gap-2"
            style={{ fontFamily: "Lora, serif" }}
          >
            <FiShoppingBag className="text-dark" /> Your Shopping Cart
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <div
            className="card border-0 shadow-sm p-5 rounded-4 text-center bg-white"
            data-aos="fade-up"
          >
            <FiShoppingBag className="fs-1 text-muted opacity-50 mb-3 mx-auto" />
            <p className="text-muted mb-0">Your cart is empty.</p>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="d-flex flex-column gap-3">
                {cartItems.map((item, idx) => {
                  const id = item._id || item.id;
                  const qty = item.qty || 1;

                  return (
                    <div
                      key={id}
                      className="card border-0 shadow-sm p-3 p-md-4 rounded-4 bg-white"
                      data-aos="fade-up"
                      data-aos-delay={idx * 50}
                    >
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                        <div>
                          <h5
                            className="fw-bold mb-1"
                            style={{ fontFamily: "Lora, serif" }}
                          >
                            {item.name}
                          </h5>
                          <p className="text-muted small mb-2">
                            Price: ${item.price} each
                          </p>

                          <div className="d-flex align-items-center gap-2">
                            <div className="border rounded-pill d-inline-flex align-items-center p-1 bg-light">
                              <button
                                type="button"
                                className="btn btn-sm btn-light rounded-circle p-0 d-flex align-items-center justify-content-center shadow-none"
                                style={{ width: "28px", height: "28px" }}
                                onClick={() => handleDecrease(id)}
                              >
                                <FiMinus className="small" />
                              </button>

                              <span className="fw-bold px-3 small">{qty}</span>

                              <button
                                type="button"
                                className="btn btn-sm btn-light rounded-circle p-0 d-flex align-items-center justify-content-center shadow-none"
                                style={{ width: "28px", height: "28px" }}
                                onClick={() => handleIncrease(id)}
                              >
                                <FiPlus className="small" />
                              </button>
                            </div>

                            <button
                              type="button"
                              className="btn btn-link text-danger text-decoration-none small d-flex align-items-center gap-1 ms-2 p-0"
                              onClick={() => handleRemove(id)}
                            >
                              <FiTrash2 /> Remove
                            </button>
                          </div>
                        </div>

                        <div className="text-sm-end">
                          <span className="fw-bold fs-5 text-dark">
                            ${(item.price * qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-left">
              <div
                className="card border-0 shadow-sm p-4 rounded-4 bg-white sticky-top"
                style={{ top: "100px" }}
              >
                <h4
                  className="fw-bold mb-3 d-flex align-items-center gap-2"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  <FiCreditCard /> Order Summary
                </h4>
                <hr className="my-3 opacity-25" />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-semibold text-secondary">
                    Total Amount:
                  </span>
                  <span className="fw-bold text-success fs-4">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="btn btn-dark w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  Proceed to Checkout <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
