// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 hidden lg:block shadow-md">
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Trending Topics</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Technology
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Climate Change
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Space Exploration
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Global Politics
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
