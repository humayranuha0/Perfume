import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight, HiArrowPath } from "react-icons/hi2";
import {
  FiShoppingBag,
  FiSun,
  FiHeart,
  FiFeather,
  FiSmile,
} from "react-icons/fi";

const quizQuestions = [
  {
    id: 1,
    question: "What kind of vibe do you prefer?",
    options: [
      {
        label: "Fresh & Clean",
        key: "Fresh & Clean",
        icon: <FiSun className="text-warning fs-5" />,
      },
      {
        label: "Floral & Romantic",
        key: "Floral & Romantic",
        icon: <FiHeart className="text-danger fs-5" />,
      },
      {
        label: "Warm & Woodsy",
        key: "Warm & Woodsy",
        icon: <FiFeather className="text-success fs-5" />,
      },
      {
        label: "Sweet & Vanilla",
        key: "Sweet & Vanilla",
        icon: <FiSmile className="text-primary fs-5" />,
      },
    ],
  },
  {
    id: 2,
    question: "When are you planning to wear this fragrance?",
    options: [
      { label: "Everyday / Casual", key: "Everyday / Casual" },
      { label: "Special Evening Events", key: "Special Evening Events" },
      { label: "Work / Office", key: "Work / Office" },
      { label: "Date Night", key: "Date Night" },
    ],
  },
];

const suggestedPerfumes = {
  "Fresh & Clean": {
    name: "Oceanic Breeze",
    notes: "Bergamot, Sea Salt & Jasmine",
    price: 120,
    desc: "A highly refreshing scent, perfect for your everyday casual wear or office use.",
  },
  "Floral & Romantic": {
    name: "L'Élixir de Rose",
    notes: "Rose Damascena & Vanilla",
    price: 160,
    desc: "Based on your choices, this delicate floral blend is your perfect match for date night.",
  },
  "Warm & Woodsy": {
    name: "Midnight Oud",
    notes: "Smoked Oud, Amber & Cedar",
    price: 190,
    desc: "A strong, confident woody fragrance ideal for special evening events.",
  },
  "Sweet & Vanilla": {
    name: "Vanilla Bloom",
    notes: "Bourbon Vanilla, Caramel & Musk",
    price: 145,
    desc: "Sweet, comforting, and long-lasting. Great for making a warm impression.",
  },
};

export default function QuizPage() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleOptionSelect = (selectedKey) => {
    const updatedAnswers = { ...userAnswers, [currentStep]: selectedKey };
    setUserAnswers(updatedAnswers);

    if (currentStep + 1 < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const selectedVibe = updatedAnswers[0];
      const matchedPerfume =
        suggestedPerfumes[selectedVibe] ||
        suggestedPerfumes["Floral & Romantic"];
      setResult(matchedPerfume);
    }
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setResult(null);
  };

  return (
    <div className="container py-5 my-5" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          {!result ? (
            /* কুইজ কার্ড */
            <div
              className="card border-0 shadow-lg p-4 rounded-4 bg-white"
              data-aos="fade-up"
            >
              <span className="badge bg-light text-dark mb-3 border align-self-center px-3 py-2 rounded-pill fw-semibold small d-inline-flex align-items-center gap-1">
                Question {currentStep + 1} of {quizQuestions.length}
              </span>

              <h3
                className="fw-bold mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                {quizQuestions[currentStep].question}
              </h3>

              <div className="d-grid gap-3">
                {quizQuestions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="btn btn-outline-dark py-3 rounded-3 fw-medium text-start px-4 d-flex align-items-center justify-content-between zoom-option-btn"
                    onClick={() => handleOptionSelect(opt.key)}
                    data-aos="fade-up"
                    data-aos-delay={idx * 80}
                  >
                    <span className="d-inline-flex align-items-center gap-2">
                      {opt.icon && opt.icon}
                      {opt.label}
                    </span>
                    <HiArrowRight className="small opacity-50" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* রেজাল্ট কার্ড */
            <div
              className="card border-0 shadow-lg p-5 rounded-4 text-center bg-white"
              data-aos="zoom-in"
            >
              <span className="badge bg-success-subtle text-success border border-success mb-3 align-self-center px-3 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-1">
                <HiSparkles className="text-success" /> Your Perfect Match Found
              </span>

              <h2
                className="fw-bold text-dark mb-2"
                style={{ fontFamily: "Lora, serif" }}
              >
                {result.name}
              </h2>

              <p className="text-muted small mb-3 fw-medium">
                Notes: {result.notes}
              </p>

              <p className="text-secondary mb-4" style={{ lineHeight: "1.7" }}>
                {result.desc}
              </p>

              <h3 className="text-success fw-bold mb-4">${result.price}</h3>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <button
                  className="btn btn-outline-dark rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 fw-medium shadow-sm"
                  onClick={handleRetake}
                >
                  <HiArrowPath /> Retake Quiz
                </button>

                <button
                  className="btn btn-dark rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 fw-medium shadow-sm"
                  onClick={() => navigate("/perfumes")}
                >
                  <FiShoppingBag /> Shop Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
