import React from "react";
import { newsArticles } from "../db/dummyData";

const NewsCard = ({ title, description, image, publishedAt }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div>
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="text-gray-500 text-xs mt-2">
          Published: {publishedAt}
        </div>
        <div className="mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Content = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between">
        <p className="text-2xl sm:text-3xl font-bold ">Latest news</p>
        <a href="#" className="">
          <p className="ml-4 text-red-600 hover:text-blue-400">
            See more <span>&#8594;</span>
          </p>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Content;
