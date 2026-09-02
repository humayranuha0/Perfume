import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiLock,
  FiMessageSquare,
  FiBox,
  FiShoppingBag,
  FiPlus,
  FiTrash2,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import Swal from "sweetalert2";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("contacts");
  const [messages, setMessages] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveryDates, setDeliveryDates] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/contact")
      .then((res) => res.json())
      .then((data) =>
        setMessages(Array.isArray(data) ? data : data.messages || []),
      )
      .catch((err) => console.error("Error fetching messages:", err));

    fetch("http://localhost:3000/api/perfumes")
      .then((res) => res.json())
      .then((data) =>
        setPerfumes(Array.isArray(data) ? data : data.perfumes || []),
      )
      .catch((err) => console.error("Error fetching perfumes:", err));

    fetch("http://localhost:3000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else if (Array.isArray(data.orders)) {
          setOrders(data.orders);
        } else if (Array.isArray(data.data)) {
          setOrders(data.data);
        } else {
          setOrders([]);
        }
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const handleDeleteMessage = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setMessages(messages.filter((msg) => (msg._id || msg.id) !== id));
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  const handleDeletePerfume = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/perfumes/delete/${id}`,
        {
          method: "DELETE",
        },
      );
      const data = await res.json();
      if (data.success) {
        setPerfumes(perfumes.filter((p) => (p._id || p.id) !== id));
      }
    } catch (err) {
      console.error("Error deleting perfume:", err);
    }
  };

  const handleDateChange = (orderId, date) => {
    setDeliveryDates({ ...deliveryDates, [orderId]: date });
  };

  const handleApprove = async (orderId) => {
    const date = deliveryDates[orderId];

    if (!date) {
      Swal.fire({
        title: "Select Delivery Date!",
        text: "Please select a delivery date first.",
        icon: "warning",
        confirmButtonColor: "#2c2c2c",
        confirmButtonText: "OK",
        background: "#fcfbf9",
        color: "#2c2c2c",
        customClass: {
          popup: "rounded-4 shadow border-0",
          confirmButton: "rounded-pill px-4",
        },
      });
      return;
    }

    const messageText = `Your order has been confirmed. Expected delivery date is ${date}.`;

    try {
      const res = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "Confirmed",
          deliveryMessage: messageText,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const updatedOrders = orders.map((order) => {
          if ((order._id || order.id) === orderId) {
            return {
              ...order,
              status: "Confirmed",
              deliveryMessage: messageText,
            };
          }
          return order;
        });

        
        setOrders(updatedOrders);

        Swal.fire({
          title: "Order Confirmed!",
          text: "Order confirmed and message sent successfully.",
          icon: "success",
          confirmButtonColor: "#2c2c2c",
          confirmButtonText: "Done",
          background: "#fcfbf9",
          color: "#2c2c2c",
          customClass: {
            popup: "rounded-4 shadow border-0",
            confirmButton: "rounded-pill px-4",
          },
        });
      } else {
        Swal.fire({
          title: "Action Failed",
          text: "Failed to update order status on server.",
          icon: "error",
          confirmButtonColor: "#dc3545",
          confirmButtonText: "Try Again",
          background: "#fcfbf9",
          color: "#2c2c2c",
          customClass: {
            popup: "rounded-4 shadow border-0",
            confirmButton: "rounded-pill px-4",
          },
        });
      }
    } catch (err) {
      console.error("Error approving order:", err);

      Swal.fire({
        title: "Something Went Wrong!",
        text: "An error occurred while approving the order.",
        icon: "error",
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Close",
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
          className="d-flex justify-content-between align-items-center mb-4"
          data-aos="fade-down"
        >
          <Link
            to="/"
            className="text-muted text-decoration-none small d-flex align-items-center gap-1"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <span className="badge bg-danger text-white px-3 py-2 rounded-pill d-flex align-items-center gap-1 shadow-sm">
            <FiLock /> Admin Dashboard
          </span>
        </div>

        <div className="row g-4">
          <div className="col-lg-3" data-aos="fade-right">
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white">
              <h5
                className="fw-bold mb-3 px-2"
                style={{ fontFamily: "Lora, serif" }}
              >
                ADMIN MENU
              </h5>
              <div className="nav flex-column nav-pills gap-2">
                <button
                  className={`nav-link text-start rounded-pill d-flex align-items-center gap-2 fw-medium ${
                    activeTab === "orders"
                      ? "active bg-dark text-white"
                      : "text-dark bg-light"
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <FiShoppingBag /> Orders
                </button>

                <button
                  className={`nav-link text-start rounded-pill d-flex align-items-center gap-2 fw-medium ${
                    activeTab === "perfumes"
                      ? "active bg-dark text-white"
                      : "text-dark bg-light"
                  }`}
                  onClick={() => setActiveTab("perfumes")}
                >
                  <FiBox /> Perfumes
                </button>

                <button
                  className={`nav-link text-start rounded-pill d-flex align-items-center gap-2 fw-medium ${
                    activeTab === "contacts"
                      ? "active bg-dark text-white"
                      : "text-dark bg-light"
                  }`}
                  onClick={() => setActiveTab("contacts")}
                >
                  <FiMessageSquare /> Messages
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9" data-aos="fade-left">
            {activeTab === "orders" && (
              <div>
                <div className="mb-4">
                  <h2 className="fw-bold" style={{ fontFamily: "Lora, serif" }}>
                    Customer Orders
                  </h2>
                  <p className="text-muted small mb-0">
                    Track and manage all incoming customer purchases.
                  </p>
                </div>

                <div className="card border-0 shadow-sm rounded-4 bg-white p-3 p-md-4">
                  {orders.length === 0 ? (
                    <div className="text-center py-5">
                      <p className="text-muted mb-0">No orders found.</p>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table align-middle mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Order ID</th>
                            <th>Customer Info</th>
                            <th>Items Details</th>
                            <th>Total Amount</th>
                            <th>Status & Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, idx) => {
                            const currentOrderId = order._id || order.id || idx;

                            const customerName =
                              order.name ||
                              order.customerName ||
                              order.shipping?.name ||
                              "N/A";
                            const customerPhone =
                              order.number ||
                              order.phone ||
                              order.shipping?.phone ||
                              "N/A";
                            const customerLocation =
                              order.address ||
                              order.location ||
                              order.shipping?.location ||
                              "N/A";

                            const itemsList =
                              order.cardItems ||
                              order.items ||
                              order.orderItems ||
                              [];

                            const totalPrice =
                              order.totalAmount ||
                              order.totalPrice ||
                              itemsList.reduce((sum, item) => {
                                const price =
                                  item.price || item.perfume?.price || 0;
                                const qty = item.qty || item.quantity || 1;
                                return sum + price * qty;
                              }, 0);

                            return (
                              <tr key={currentOrderId}>
                                <td className="small text-muted fw-bold">
                                  #{String(currentOrderId).slice(-6)}
                                </td>
                                <td>
                                  <span className="fw-semibold text-dark d-flex align-items-center gap-1">
                                    <FiUser className="text-secondary" />{" "}
                                    {customerName}
                                  </span>
                                  <small className="text-muted d-block align-items-center gap-1 mt-1">
                                    <FiPhone /> {customerPhone}
                                  </small>
                                  <small className="text-muted d-block align-items-center gap-1">
                                    <FiMapPin /> {customerLocation}
                                  </small>
                                </td>
                                <td>
                                  {itemsList.length > 0 ? (
                                    itemsList.map((item, i) => (
                                      <div
                                        key={i}
                                        className="small text-dark mb-1"
                                      >
                                        •{" "}
                                        {item.name ||
                                          item.title ||
                                          item.perfume?.name ||
                                          "Perfume"}{" "}
                                        (Qty: {item.qty || item.quantity || 1})
                                      </div>
                                    ))
                                  ) : (
                                    <span className="small text-muted">
                                      0 items
                                    </span>
                                  )}
                                </td>
                                <td className="fw-bold text-success">
                                  ${Number(totalPrice).toFixed(2)}
                                </td>
                                <td>
                                  {order.status === "Confirmed" ? (
                                    <div>
                                      <span className="badge bg-success mb-1 d-inline-flex align-items-center gap-1">
                                        <FiCheckCircle /> Confirmed
                                      </span>
                                      <br />
                                      <small
                                        className="text-muted d-flex align-items-center gap-1"
                                        style={{ fontSize: "11px" }}
                                      >
                                        <FiCalendar />{" "}
                                        {order.deliveryDate || "Processing"}
                                      </small>
                                    </div>
                                  ) : (
                                    <div
                                      className="d-flex flex-column gap-2"
                                      style={{ maxWidth: "180px" }}
                                    >
                                      <input
                                        type="date"
                                        className="form-control form-control-sm rounded-pill"
                                        onChange={(e) =>
                                          handleDateChange &&
                                          handleDateChange(
                                            currentOrderId,
                                            e.target.value,
                                          )
                                        }
                                      />
                                      <button
                                        className="btn btn-sm btn-dark rounded-pill fw-bold"
                                        onClick={() =>
                                          handleApprove &&
                                          handleApprove(currentOrderId)
                                        }
                                      >
                                        Approve & Send Msg
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "perfumes" && (
              <div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                  <div>
                    <h2
                      className="fw-bold"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      Perfumes
                    </h2>
                    <p className="text-muted small mb-0">
                      Manage available store inventory.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/admin/add-perfume")}
                    className="btn btn-dark btn-sm px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1 shadow-sm"
                  >
                    <FiPlus /> Add New Perfume
                  </button>
                </div>

                <div className="row g-4">
                  {perfumes.length === 0 ? (
                    <div className="col-12 text-center py-5">
                      <p className="text-muted">No perfumes available.</p>
                    </div>
                  ) : (
                    perfumes.map((p, idx) => (
                      <div
                        className="col-md-6"
                        key={p._id || p.id || idx}
                        data-aos="fade-up"
                      >
                        <div className="card border-0 shadow-sm rounded-4 bg-white p-3 h-100 position-relative">
                          <button
                            onClick={() =>
                              handleDeletePerfume &&
                              handleDeletePerfume(p._id || p.id)
                            }
                            className="btn btn-light btn-sm position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center text-danger shadow-sm"
                            style={{ width: "32px", height: "32px" }}
                            title="Delete Perfume"
                          >
                            <FiTrash2 />
                          </button>

                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={
                                p.image ||
                                "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
                              }
                              alt={p.name}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                              className="rounded-3 flex-shrink-0"
                            />
                            <div className="overflow-hidden">
                              <h5
                                className="fw-bold mb-1 text-truncate"
                                style={{ fontFamily: "Lora, serif" }}
                              >
                                {p.name}
                              </h5>
                              <p className="text-muted small mb-2 text-truncate">
                                {p.description || p.category}
                              </p>
                              <div className="fw-semibold text-dark d-flex align-items-center gap-2">
                                <span className="text-success">${p.price}</span>
                                <span className="text-muted fw-normal small">
                                  | Stock: {p.stock || "In Stock"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === "contacts" && (
              <div>
                <div className="mb-4">
                  <h2 className="fw-bold" style={{ fontFamily: "Lora, serif" }}>
                    Customer Messages
                  </h2>
                  <p className="text-muted small mb-0">
                    View inquiries sent by customers.
                  </p>
                </div>

                <div className="card border-0 shadow-sm rounded-4 bg-white p-3 p-md-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-5">
                      <p className="text-muted mb-0">No messages found.</p>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table align-middle mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject / Message</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {messages.map((msg, idx) => (
                            <tr key={msg._id || msg.id || idx}>
                              <td className="fw-semibold">{msg.name}</td>
                              <td className="text-muted small">{msg.email}</td>
                              <td
                                className="small"
                                style={{ maxWidth: "250px" }}
                              >
                                <strong>{msg.subject}</strong>
                                <p className="text-muted mb-0 text-truncate">
                                  {msg.message}
                                </p>
                              </td>
                              <td className="text-end">
                                <button
                                  className="btn btn-outline-danger btn-sm rounded-pill d-inline-flex align-items-center gap-1"
                                  onClick={() =>
                                    handleDeleteMessage &&
                                    handleDeleteMessage(msg._id || msg.id)
                                  }
                                >
                                  <FiTrash2 /> Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
