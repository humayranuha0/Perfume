import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiMail,
  FiShield,
  FiShoppingBag,
  FiCalendar,
  FiBell,
  FiPackage,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

export default function Dashboard({ user }) {
  const [orders, setOrders] = useState([]);
  const currentUser = user || JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    fetch("http://localhost:3000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        const ordersArray = Array.isArray(data)
          ? data
          : data.orders || data.data || [];

        const userEmailLower = currentUser?.email?.toLowerCase().trim();

        const myOrders = ordersArray.filter((order) => {
          const orderEmail = (
            order.userEmail ||
            order.shipping?.email ||
            order.email ||
            ""
          )
            .toLowerCase()
            .trim();
          return orderEmail === userEmailLower;
        });

        setOrders(myOrders);
      })
      .catch((err) => console.error("Error fetching user orders:", err));
  }, [currentUser]);
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
        <div
          className="card border-0 shadow-sm p-4 p-md-5 rounded-4 mb-4 bg-white"
          data-aos="fade-down"
        >
          <div className="d-flex align-items-center gap-3">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: "60px", height: "60px" }}
            >
              <FiUser className="fs-3 text-dark" />
            </div>
            <div>
              <h3
                className="fw-bold mb-1"
                style={{ fontFamily: "Lora, serif" }}
              >
                Welcome back, {currentUser.name || "User"}! 👋
              </h3>
              <p className="text-muted mb-0 small d-flex align-items-center gap-1">
                <FiMail /> {currentUser.email}
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8" data-aos="fade-right">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100 bg-white">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4
                  className="fw-bold mb-0"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  <FiShoppingBag className="me-2 mb-1" />
                  Recent Orders
                </h4>
                <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-normal small">
                  Total Orders: {orders.length}
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-5">
                  <FiPackage className="fs-1 text-muted opacity-50 mb-3" />
                  <p className="text-muted mb-0">
                    You haven't placed any orders yet. Explore our fragrances
                    and start shopping!
                  </p>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {orders.map((order, idx) => {
                    const orderId = order._id || order.id || idx;
                    const itemsList = order.items || order.cardItems || [];
                    const total = order.totalPrice ?? order.totalAmount ?? 0;

                    return (
                      <div
                        key={orderId}
                        className="border border-light-subtle rounded-4 p-3 p-md-4 bg-light shadow-sm"
                        data-aos="fade-up"
                        data-aos-delay={idx * 50}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                          <span className="small text-muted fw-bold d-flex align-items-center gap-1">
                            <FiCalendar /> Order Date:{" "}
                            {order.date
                              ? new Date(order.date).toLocaleDateString()
                              : "N/A"}
                          </span>
                          <span
                            className={`badge px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1 ${
                              order.status === "Confirmed"
                                ? "bg-success text-white"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {order.status === "Confirmed" ? (
                              <FiCheckCircle />
                            ) : (
                              <FiClock />
                            )}
                            {order.status || "Pending"}
                          </span>
                        </div>

                        <div className="mb-3">
                          {itemsList.map((it, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="d-flex justify-content-between small text-secondary py-1"
                            >
                              <span>
                                {it.name || it.perfume?.name || "Item"}
                                <span className="text-muted">
                                  {" "}
                                  (Qty: {it.qty || it.quantity || 1})
                                </span>
                              </span>
                              <span className="fw-medium">
                                $
                                {(
                                  (it.price || 0) * (it.qty || it.quantity || 1)
                                ).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                          <span className="fw-semibold text-dark">
                            Overall Total:
                          </span>
                          <span className="text-success fs-5 fw-bold">
                            ${Number(total).toFixed(2)}
                          </span>
                        </div>

                        {order.deliveryMessage && (
                          <div className="mt-3 p-3 rounded-3 bg-info-subtle border border-info-subtle text-dark small d-flex align-items-start gap-2">
                            <FiBell className="text-info fs-5 flex-shrink-0 mt-1" />
                            <div>
                              <strong className="d-block mb-1">
                                Admin Update:
                              </strong>
                              {order.deliveryMessage}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100 bg-white">
              <h4
                className="fw-bold mb-4 pb-2 border-bottom"
                style={{ fontFamily: "Lora, serif" }}
              >
                Account Details
              </h4>

              <div className="mb-3">
                <p className="small text-muted mb-1 d-flex align-items-center gap-1">
                  <FiUser className="text-secondary" /> Full Name:
                </p>
                <h6 className="fw-bold text-dark">{currentUser.name}</h6>
              </div>

              <div className="mb-3">
                <p className="small text-muted mb-1 d-flex align-items-center gap-1">
                  <FiMail className="text-secondary" /> Email Address:
                </p>
                <h6 className="fw-bold text-dark">{currentUser.email}</h6>
              </div>

              <div className="mb-2">
                <p className="small text-muted mb-1 d-flex align-items-center gap-1">
                  <FiShield className="text-secondary" /> Role:
                </p>
                <span className="badge bg-success text-capitalize px-3 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-1">
                  <FiShield className="small" />
                  {currentUser.role || "Customer"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
