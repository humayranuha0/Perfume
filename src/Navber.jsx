import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import Swal from "sweetalert2";

export default function Navbar({ user, setUser, cartCount }) {
  const navigate = useNavigate();
  const currentUser = user || JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      background: "#fcfbf9",
      color: "#2c2c2c",
      customClass: {
        popup: "rounded-4 shadow border-0",
        confirmButton: "rounded-pill px-4",
        cancelButton: "rounded-pill px-4",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom sticky-top shadow-sm">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-dark fw-bold"
          style={{ letterSpacing: "2px" }}
        >
          LUMIÈRE
          <span
            className="d-block text-muted"
            style={{ fontSize: "9px", letterSpacing: "3px" }}
          >
            PARFUMS
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu size={24} />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="mainNavbar"
        >
          <ul className="navbar-nav mx-auto gap-lg-4 my-2 my-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-muted">
                Fragrances
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ourStory" className="nav-link text-muted">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notes" className="nav-link text-muted">
                Notes Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-muted">
                Contact
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-muted">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-3 flex-wrap mt-3 mt-lg-0">
            <Link
              to="/cart"
              className="btn btn-outline-dark position-relative rounded-pill px-3 py-2 d-flex align-items-center gap-2"
            >
              <FiShoppingCart size={18} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            {currentUser && currentUser.role === "admin" && (
              <Link to="/admin" className="btn btn-dark rounded-pill px-4 py-2">
                Admin Panel
              </Link>
            )}

            <Link
              to="/perfumes"
              className="btn btn-dark rounded-pill px-4 py-2"
            >
              Shop Now &rarr;
            </Link>

            {currentUser ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger rounded-pill px-3 py-2"
              >
                Logout
              </button>
            ) : (
              <div className="d-flex gap-2">
                <Link
                  to="/register"
                  className="btn btn-outline-dark rounded-pill px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="btn btn-dark rounded-pill px-3 py-2"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
