import React from "react";
import Footer from "./Footer";

const UnderConstruction = () => {
  return (
    <>
      <div className="flex items-center justify-center min-fit my-20 bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-800">
            🚧 Under Construction
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="mt-8">
            <p className="text-md text-gray-500">
              Check back soon for updates.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition duration-300"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UnderConstruction;
