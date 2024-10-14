// src/components/Content.js
import React from "react";
import { newsArticles } from "../db/dummyData";

const NewsCard = ({ title, description, image, publishedAt }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="text-gray-500 text-xs mt-2">Published: {publishedAt}</div>
    </div>
  </div>
);

const Content = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsArticles.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Content;
