import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      const shouldRedirectCheckout = localStorage.getItem("redirectAfterLogin");

      if (shouldRedirectCheckout === "true") {
        localStorage.removeItem("redirectAfterLogin"); 
        navigate("/checkout"); 
      } else if (res.data.user && res.data.user.role === "admin") {
        navigate("/admin"); 
      } else {
        navigate("/dashboard"); 
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card shadow border-0 p-4 rounded-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="fw-bold text-center mb-1">Login</h3>
        <p className="text-muted text-center small mb-4">Access your account</p>

        {error && (
          <div className="alert alert-danger py-2 small text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label small fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-dark w-100 py-2 fw-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-3 small text-muted">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-dark fw-bold text-decoration-none"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
