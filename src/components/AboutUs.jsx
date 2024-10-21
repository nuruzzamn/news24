import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We are a dedicated news platform providing timely and factual
              reporting on the latest trends, issues, and developments from
              around the world.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto">
              Our mission is to inform and empower our readers by providing
              accurate, unbiased news and insights that help them make
              well-informed decisions.
            </p>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="h-40 w-40 rounded-full mx-auto"
                  src="https://via.placeholder.com/150"
                  alt="team member"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sarah Brown
                  </h3>
                  <p className="text-gray-500">Editor-in-Chief</p>
                  <p className="mt-2 text-gray-600">
                    Sarah leads the editorial team with over 15 years of
                    experience in journalism.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="h-40 w-40 rounded-full mx-auto"
                  src="https://via.placeholder.com/150"
                  alt="team member"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    James Lee
                  </h3>
                  <p className="text-gray-500">Senior Reporter</p>
                  <p className="mt-2 text-gray-600">
                    James is a seasoned journalist specializing in global
                    political coverage.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="h-40 w-40 rounded-full mx-auto"
                  src="https://via.placeholder.com/150"
                  alt="team member"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Emily Johnson
                  </h3>
                  <p className="text-gray-500">Investigative Journalist</p>
                  <p className="mt-2 text-gray-600">
                    Emily focuses on uncovering stories that matter, with a
                    background in data-driven journalism.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Have any questions or feedback? We'd love to hear from you. Reach
              out to us via email or through our social media platforms.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:info@example.com"
                className="text-blue-600 hover:text-blue-800"
              >
                info@newswebsite.com
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
