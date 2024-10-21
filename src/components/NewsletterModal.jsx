import React, { useState } from "react";

const NewsletterModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-3xl font-bold transition-transform transform hover:scale-110"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Subscribe to our Newsletter
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-500 font-semibold text-lg">
              Thank you for subscribing!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
