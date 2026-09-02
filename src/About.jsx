import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiGlobe, FiAward } from "react-icons/fi";
export default function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          
          <div className="col-lg-5" data-aos="fade-right">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1676347929093-6614fb45bd90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxwZXJmdW1lfGVufDB8fDB8fHww" 
                alt="Perfume Craft" 
                className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
                style={{ maxHeight: '480px' }}
              />
              
              <div className="position-absolute bottom-0 start-0 translate-middle-y ms-3 p-3 bg-white rounded-4 shadow-lg border d-flex align-items-center gap-3">
                <div className="p-3 bg-danger-subtle rounded-circle text-danger">
                  <FiAward size={28} />
                </div>
                <div>
                  <h4 className="fw-bold mb-0 text-dark" style={{ fontFamily: 'Lora, serif' }}>10+ Years</h4>
                  <p className="small text-muted mb-0">Of Artisanal Excellence</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <span className="badge rounded-pill bg-secondary-subtle text-secondary-emphasis px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1.5px', fontSize: '0.75rem' }}>
              ABOUT OUR CRAFT
            </span>

            <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: 'Lora, serif' }}>
              Fragrances That Love Your Skin And The Planet.
            </h2>

            <p className="text-secondary mb-4">
              At Lumière, we create clean, sophisticated, and sustainable fragrances that deliver visible elegance without compromise. Every bottle is a harmony of handpicked florals, warm woods, and rare spices designed to complement your natural allure.
            </p>

            
            <div className="row g-3 mb-4">
              <div className="col-sm-6 d-flex align-items-start gap-3">
                <div className="p-2 bg-light rounded-3 text-dark fs-4">
                  <FiShield className="text-danger" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Clean Ingredients</h6>
                  <p className="small text-muted mb-0">Safe & non-toxic formula</p>
                </div>
              </div>

              <div className="col-sm-6 d-flex align-items-start gap-3">
                <div className="p-2 bg-light rounded-3 text-dark fs-4">
                  <FiGlobe className="text-success" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Sustainably Sourced</h6>
                  <p className="small text-muted mb-0">100% Eco-conscious</p>
                </div>
              </div>
            </div>

            <Link to="/ourStory" className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2">
              Our Full Story <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}