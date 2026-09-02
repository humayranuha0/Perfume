import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Checkout({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const existingUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: existingUser?.name || "",
    email: existingUser?.email || "",
    password: "",
    location: existingUser?.location || "",
    phone: existingUser?.phone || "",
    paymentMethod: "Cash on Delivery",
    senderNumber: "",
    trxId: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0,
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const newOrder = {
      customerName: formData.name || existingUser?.name || "Customer",
      userEmail: existingUser?.email || formData.email,
      phone: formData.phone || formData.number || "N/A",
      address: formData.address || formData.location || "N/A",
      items: cartItems,
      itemsCount: cartItems.reduce(
        (acc, item) => acc + (item.qty || item.quantity || 1),
        0,
      ),
      totalPrice: totalPrice,
      status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Order placed successfully!",
          icon: "success",
          confirmButtonColor: "#0d6efd",
        }).then(() => {
          setCartItems([]);
          localStorage.removeItem("cartItems");
          navigate("/dashboard");
        });
      } else {
        const data = await response.json();
        Swal.fire({
          title: "Error!",
          text: data.error || "Failed to place order.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Something went wrong!",
        text: "Network error or server failed to respond.",
        icon: "error",
        confirmButtonColor: "#dc3545",
      });
    }
  };
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" style={{ fontFamily: "Lora, serif" }}>
        Checkout & Order Confirmation
      </h2>
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4 rounded-4">
            <h4 className="fw-bold mb-3">
              {existingUser
                ? "Shipping & Delivery Details"
                : "Register & Checkout"}
            </h4>
            <form onSubmit={handlePlaceOrder}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-pill"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-pill"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {!existingUser && (
                <div className="mb-3">
                  <label className="form-label small fw-bold">
                    Password (For Account)
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-pill"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label small fw-bold">
                  Delivery Location / Address
                </label>
                <input
                  type="text"
                  name="location"
                  className="form-control rounded-pill"
                  placeholder="e.g. Dhaka, Bangladesh"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control rounded-pill"
                  placeholder="e.g. 017XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  className="form-select rounded-pill"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="Online Payment">
                    Online Payment (bKash / Nagad)
                  </option>
                </select>
              </div>

              {formData.paymentMethod === "Online Payment" && (
                <div className="p-3 border rounded-4 bg-light mb-3">
                  <h6 className="fw-bold text-dark mb-2">
                    📱 Mobile Banking Details (Send Money)
                  </h6>
                  <p className="small text-muted mb-2">
                    Send money to our merchant number and fill in your details
                    below:
                    <br />
                    <strong className="text-danger">
                      bKash / Nagad Personal: 01700000000
                    </strong>
                  </p>

                  <div className="mb-2">
                    <label className="form-label small">
                      Your Sender Number (Number used for payment)
                    </label>
                    <input
                      type="text"
                      name="senderNumber"
                      className="form-control form-control-sm rounded-pill"
                      placeholder="018XXXXXXXX"
                      value={formData.senderNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label small">
                      Transaction ID (TrxID)
                    </label>
                    <input
                      type="text"
                      name="trxId"
                      className="form-control form-control-sm rounded-pill"
                      placeholder="e.g. 9H7X8K2L1M"
                      value={formData.trxId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-dark w-100 rounded-pill py-2 fw-bold"
              >
                Place Order (${totalPrice.toFixed(2)})
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4 rounded-4 bg-light">
            <h4 className="fw-bold mb-3">Your Order Summary</h4>
            <hr />
            <div
              className="mb-3"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-3"
                >
                  <div>
                    <span className="fw-bold d-block">{item.name}</span>
                    <small className="text-muted">
                      Qty: {item.qty || 1} × ${item.price}
                    </small>
                  </div>
                  <span className="fw-bold">
                    ${(item.price * (item.qty || 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-4 text-success">
              <span>Overall Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
