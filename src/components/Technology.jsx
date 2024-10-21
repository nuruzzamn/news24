import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import newsData from "../db/newsData";
import Footer from "./Footer";

const Technology = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Number of news articles per page
  const articlesPerPage = 6;

  // Calculate the displayed articles for the current page
  const currentArticles = newsData.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  // Handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-fit">
        <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row">
          {/* Sidebar Section */}
          <aside className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Top News Categories
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#global-tech"
                  // className="text-blue-600 hover:underline hover:text-gray-800 transition duration-300 ease-in-out"
                  className="text-blue-600 hover:underline"
                >
                  Global Tech
                </a>
              </li>
              <li>
                <a
                  href="#ai-healthcare"
                  className="text-blue-600 hover:underline"
                >
                  AI in Healthcare
                </a>
              </li>
              <li>
                <a
                  href="#cybersecurity"
                  className="text-blue-600 hover:underline"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#5g-networks"
                  className="text-blue-600 hover:underline"
                >
                  5G Networks
                </a>
              </li>
              <li>
                <a href="#blockchain" className="text-blue-600 hover:underline">
                  Blockchain
                </a>
              </li>
              <li>
                <a
                  href="#quantum-computing"
                  className="text-blue-600 hover:underline"
                >
                  Quantum Computing
                </a>
              </li>
              <li>
                <a
                  href="#autonomous-vehicles"
                  className="text-blue-600 hover:underline"
                >
                  Self-Driving Cars
                </a>
              </li>
              <li>
                <a href="#vr-gaming" className="text-blue-600 hover:underline">
                  VR in Gaming
                </a>
              </li>
              <li>
                <a
                  href="#ar-shopping"
                  className="text-blue-600 hover:underline"
                >
                  AR in Shopping
                </a>
              </li>
              <li>
                <a
                  href="#tech-sustainability"
                  className="text-blue-600 hover:underline"
                >
                  Tech Sustainability
                </a>
              </li>
            </ul>
          </aside>

          <div className="flex flex-col justify-center items-center">
            {/* Main Card Section */}
            <section className="lg:full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-2">
                    <h3
                      id={item.title.toLowerCase().replace(/ /g, "-")}
                      className="text-lg font-bold text-gray-800 mb-1"
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{item.description}</p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </section>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={Math.ceil(newsData.length / articlesPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination flex"}
                previousLinkClassName={"mr-2 text-blue-600 hover:underline"}
                nextLinkClassName={"ml-2 text-blue-600 hover:underline"}
                disabledClassName={"text-gray-500"}
                activeClassName={"font-bold text-blue-600"}
                pageClassName={"mx-1"}
                pageLinkClassName={"text-blue-600 hover:underline"}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Technology;

// import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
// import newsData from "../data/newsData";

// const Technology = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   // Number of news articles per page
//   const articlesPerPage = 6;

//   // Calculate the displayed articles for the current page
//   const currentArticles = newsData.slice(
//     currentPage * articlesPerPage,
//     (currentPage + 1) * articlesPerPage
//   );

//   // Handle page click
//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row">
//         {/* Sidebar Section */}
//         <aside className="lg:w-1/4 mb-8 lg:mb-0">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Top News Categories
//           </h2>

//         </aside>

//         {/* Main Card Section */}
//         <section className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentArticles.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-44 object-cover"
//               />
//               <div className="p-4">
//                 <h3
//                   id={item.title.toLowerCase().replace(/ /g, "-")}
//                   className="text-2xl font-bold text-gray-800 mb-2"
//                 >
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 mb-2">{item.description}</p>
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Read more
//                 </a>
//               </div>
//             </div>
//           ))}
//         </section>
//         {/* Pagination */}
//         <div className="flex justify-center mt-6">
//           <ReactPaginate
//             previousLabel={"← Previous"}
//             nextLabel={"Next →"}
//             pageCount={Math.ceil(newsData.length / articlesPerPage)}
//             onPageChange={handlePageClick}
//             containerClassName={"pagination flex"}
//             previousLinkClassName={"mr-2 text-blue-600 hover:underline"}
//             nextLinkClassName={"ml-2 text-blue-600 hover:underline"}
//             disabledClassName={"text-gray-500"}
//             activeClassName={"font-bold text-blue-600"}
//             pageClassName={"mx-1"}
//             pageLinkClassName={"text-blue-600 hover:underline"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technology;
