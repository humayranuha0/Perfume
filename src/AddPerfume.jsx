import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiUploadCloud } from 'react-icons/fi';
import Swal from 'sweetalert2';

export default function AddPerfume() {
  const [perfumeData, setPerfumeData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    size: '',
    rating: '5',
    image: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPerfumeData({ ...perfumeData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('http://localhost:3000/api/perfumes/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(perfumeData)
    });

    const data = await res.json();
    

    if (res.ok && data._id) {

      Swal.fire({
        title: 'Success!',
        text: 'Perfume added successfully!',
        icon: 'success',
        confirmButtonColor: '#0d6efd'
      }).then(() => {
        navigate('/admin'); 
      });

    } else {

      Swal.fire({
        title: 'Error!',
        text: 'Failed to add perfume',
        icon: 'error',
        confirmButtonColor: '#dc3545'
      });
    }

  } catch (err) {
    console.error('Error adding perfume:', err);


    Swal.fire({
      title: 'Something went wrong!',
      text: err.message || 'Server error',
      icon: 'error'
    });

  } finally {
    setLoading(false);
  }
};
  

  return (
    <div className="py-5" style={{ backgroundColor: '#fcfbf9', minHeight: '100vh', color: '#2b2b2b' }}>
      <div className="container py-4" style={{ maxWidth: '800px' }}>
        
        
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
          <Link to="/admin" className="text-muted text-decoration-none small d-flex align-items-center gap-1 fw-semibold">
            <FiArrowLeft /> Back to Dashboard
          </Link>
          <span className="badge bg-danger text-white px-3 py-2 rounded-pill">✨ New Perfume Entry</span>
        </div>

        
        <div className="card border-0 shadow-lg rounded-4 bg-white p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ fontFamily: 'Lora, serif' }}>Add New Luxury Scent</h2>
            <p className="text-muted small">Fill in all details below to list a new perfume in the collection.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              
              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Perfume Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control rounded-3 py-2" 
                  placeholder="e.g. Le Labo Santal 33" 
                  value={perfumeData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Category</label>
                <input 
                  type="text" 
                  name="category" 
                  className="form-control rounded-3 py-2" 
                  placeholder="e.g. Woody, Floral, Oriental" 
                  value={perfumeData.category} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Price ($)</label>
                <input 
                  type="number" 
                  name="price" 
                  className="form-control rounded-3 py-2" 
                  placeholder="320" 
                  value={perfumeData.price} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Stock Quantity</label>
                <input 
                  type="number" 
                  name="stock" 
                  className="form-control rounded-3 py-2" 
                  placeholder="15" 
                  value={perfumeData.stock} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Bottle Size (e.g. 100ml)</label>
                <input 
                  type="text" 
                  name="size" 
                  className="form-control rounded-3 py-2" 
                  placeholder="100ml" 
                  value={perfumeData.size} 
                  onChange={handleChange} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted d-flex align-items-center gap-1">
                  <FiStar className="text-warning" /> Rating (1 - 5)
                </label>
                <select 
                  name="rating" 
                  className="form-select rounded-3 py-2" 
                  value={perfumeData.rating} 
                  onChange={handleChange}
                >
                  <option value="5">5 Stars (★★★★★)</option>
                  <option value="4.5">4.5 Stars</option>
                  <option value="4">4 Stars</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Image URL</label>
                <input 
                  type="url" 
                  name="image" 
                  className="form-control rounded-3 py-2" 
                  placeholder="https://images.unsplash.com/..." 
                  value={perfumeData.image} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="col-12">
                <label className="form-label small fw-bold text-muted">Scent Notes / Description</label>
                <textarea 
                  name="description" 
                  rows="3" 
                  className="form-control rounded-3 p-3" 
                  placeholder="e.g. Cardamom, Iris, Violet & Australian Sandalwood" 
                  value={perfumeData.description} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 text-center mt-4">
                <button 
                  type="submit" 
                  className="btn btn-dark rounded-pill px-5 py-3 fw-semibold shadow-sm d-inline-flex align-items-center gap-2"
                  disabled={loading}
                >
                  <FiUploadCloud size={18} /> {loading ? "Saving Perfume..." : "Save Perfume to Collection"}
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
}