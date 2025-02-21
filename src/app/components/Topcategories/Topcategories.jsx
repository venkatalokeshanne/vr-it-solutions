"use client";
import React from 'react';

const CategoryCard = ({ name, students, image }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <img 
      src={image} 
      alt={name}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-white/80 text-sm">{students}</p>
    </div>
  </div>
);

const TopCategories = () => {
  const topCategories = [
    {
      name: "Python",
      students: "4.2M students",
      image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&q=80",
    },
    {
      name: "Web Development",
      students: "3.8M students",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&q=80",
    },
    {
      name: "Machine Learning",
      students: "2.9M students",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80",
    },
    {
      name: "Data Science",
      students: "2.5M students",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topCategories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;