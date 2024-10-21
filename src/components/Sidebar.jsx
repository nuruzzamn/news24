// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 hidden lg:block shadow-md">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">Trending Topics</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Global Sports Event Returns with Exciting Lineup for 2024
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Team X’s Defensive Strategy Leads to Unstoppable Winning Streak
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Team X’s Defensive Strategy Leads to Unstoppable Winning Streak
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Historic Win for Team X as They Clinch the National Title
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Injury Report: Key Players Expected to Miss the Playoffs
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Shocking Upset as Underdog Z Defeats Top-Ranked Team
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Star Player Y Breaks League Record for Most Points in a Season
            </a>
          </li>
          <li>
            <a
              href="#tech-sustainability"
              className="text-blue-600 hover:underline"
            >
              Team X Secures Championship Victory in Thrilling Overtime Finale
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
