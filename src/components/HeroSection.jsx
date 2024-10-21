// src/components/HeroSection.js
import React, { useState } from "react";
import NewsletterModal from "./NewsletterModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="relative bg-cover bg-center py-20 px-4 text-center"
      style={{
        backgroundImage:
          "url(https://static.news.bitcoin.com/wp-content/uploads/2022/09/chainalysis-crypto-adoption-index.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Stay Informed with the Latest News
        </h1>
        <p className="text-xl mb-8">
          Get the latest breaking news and top headlines from around the world,
          right here.
        </p>

        <div className="flex space-x-4">
          <a
            href="/#"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Top Stories
          </a>
          <button
            onClick={openModal} // Open modal on click
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Modal for Newsletter */}
      {isModalOpen && <NewsletterModal closeModal={closeModal} />}
    </div>
  );
};

export default HeroSection;
