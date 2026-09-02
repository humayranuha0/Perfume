import React from "react";
import { HiSparkles } from "react-icons/hi2";

const Faq = () => {
  return (
    <div>
      <section className="py-5" style={{ backgroundColor: "#FCF8F5" }}>
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span
                className="badge rounded-pill bg-danger-subtle text-danger-emphasis px-3 py-2 text-uppercase mb-2 d-inline-flex align-items-center gap-1"
                style={{ letterSpacing: "2px", fontSize: "0.7rem" }}
              >
                <HiSparkles className="text-danger" /> FAQ
              </span>
              <h2
                className="display-6 fw-bold text-dark mb-4"
                style={{ fontFamily: "serif" }}
              >
                Everything You Need To Know
              </h2>

              <div className="accordion accordion-flush" id="faqAccordion">
                <div className="accordion-item bg-transparent border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-transparent fw-semibold text-dark px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                    >
                      Are your perfumes suitable for sensitive skin?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body px-0 text-secondary small">
                      Yes! All our fragrances are formulated with clean,
                      non-toxic botanicals and are dermatologist-tested to be
                      gentle on sensitive skin.
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-transparent border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-transparent fw-semibold text-dark px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      How long does the scent typically last?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body px-0 text-secondary small">
                      Our Eau de Parfum formulations have a high concentration
                      of essential oils, offering 8 to 12 hours of long-lasting
                      fragrance.
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-transparent border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-transparent fw-semibold text-dark px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      Are your products 100% vegan and cruelty-free?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body px-0 text-secondary small">
                      Absolutely. We never test on animals, and all our
                      formulations are 100% vegan with ethically sourced
                      ingredients.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
              <img
                src="https://media.istockphoto.com/id/1491165707/photo/a-stylish-bottle-of-perfume-stands-on-a-white-podium-in-the-form-of-an-arch-and-small-pink.jpg?s=612x612&w=0&k=20&c=v6zC8nXilems8n7VEqhr_LvcAxMnNdQjgeAu_EdPlR4="
                alt="Perfume Bottles"
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: "100%", height: "380px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
