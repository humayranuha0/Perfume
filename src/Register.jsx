import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register({ setUser }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    location: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

   try {
  const response = await fetch(`${API_BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user || formData));
      if (setUser) setUser(data.user || formData);

      Swal.fire({
        title: "Welcome!",
        text: "Registration successful!",
        icon: "success",
        confirmButtonColor: "#2c2c2c",
        background: "#fcfbf9",
        color: "#2c2c2c",
        customClass: {
          popup: "rounded-4 shadow border-0",
          confirmButton: "rounded-pill px-4",
        },
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      setError(err.message);

      Swal.fire({
        title: "Registration Failed",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#dc3545",
        background: "#fcfbf9",
        color: "#2c2c2c",
        customClass: {
          popup: "rounded-4 shadow border-0",
          confirmButton: "rounded-pill px-4",
        },
      });
    }
  };
  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card border-0 shadow-sm p-4 rounded-4"
        style={{ width: "400px" }}
      >
        <h2
          className="fw-bold text-center mb-1"
          style={{ fontFamily: "Lora, serif" }}
        >
          Customer Sign In
        </h2>
        <p className="text-muted text-center small mb-4">Create your account</p>

        {error && (
          <div className="alert alert-danger py-2 text-center small">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
            <label className="form-label small fw-bold">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-pill"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-pill"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">
              Location / Address
            </label>
            <input
              type="text"
              name="location"
              className="form-control rounded-pill"
              placeholder="e.g. Sylhet"
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
              placeholder="e.g. 017xxxxxxxx"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input type="hidden" name="role" value="customer" />

          <button
            type="submit"
            className="btn btn-dark w-100 rounded-pill py-2 mt-2"
          >
            Register & Continue
          </button>
        </form>

        <p className="text-center small text-muted mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-dark fw-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
