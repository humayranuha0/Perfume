import React, { useEffect, useState } from "react";
import Navbar from "./Navber";
import AdminPerfumeManager from "./AdminPerfumeModel";
import Register from "./Register";
import Checkout from "./CheckOut";
import ScentQuizModal from "./ScentQuiz";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import OurStory from "./OurStory";
import NotesGuide from "./NotesGuide";
import Contact from "./Contact";
import AdminPanel from "./AdminPanel";
import AddPerfume from "./AddPerfume";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Faq from "./Faq";
import AllReviews from "./Allreview";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const handleAddToCart = (product) => {
    const productId = product._id || product.id;

    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) => (item._id || item.id) === productId,
      );
      if (existing) {
        return prevItems.map((item) =>
          (item._id || item.id) === productId
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, id: productId, qty: 1 }];
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#fcfbf9",
      color: "#2c2c2c",
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `${product.name || "Product"} added to cart!`,
    });
  };

  return (
    <div>
      <Navbar
        user={user}
        setUser={setUser}
        cartCount={cartItems.reduce((acc, item) => acc + (item.qty || 1), 0)}
      />
      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />}
        />
        <Route
          path="/perfumes"
          element={
            <AdminPerfumeManager
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/notes" element={<NotesGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<ScentQuizModal />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/allreview" element={<AllReviews />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            (user && user.email) || localStorage.getItem("user") ? (
              <Dashboard
                user={user || JSON.parse(localStorage.getItem("user"))}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/add-perfume" element={<AddPerfume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
