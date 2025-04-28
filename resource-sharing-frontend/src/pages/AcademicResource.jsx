import React, { useState } from "react";
import {
  Gift,
  Tag,
  Filter,
  Search,
  BookOpen,
  Link as LinkIcon,
} from "lucide-react";

const academicResourcesData = [
  {
    id: 1,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "First year",
    imageUrl:
      "https://i.pinimg.com/474x/f5/13/b5/f513b52d7f4587764547a2fdf193417b.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Maths",
  },
  {
    id: 2,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "First year",
    imageUrl:
      "https://i.pinimg.com/474x/fa/07/6d/fa076d5eebe1a1ae8c7dc89ab86871b8.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Maths",
  },
  {
    id: 3,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "Second  year",
    imageUrl:
      "https://i.pinimg.com/736x/30/6e/7d/306e7da62776ac49d0250e8bccd39797.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Java",
  },
  {
    id: 4,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "Third year",
    imageUrl:
      "https://i.pinimg.com/736x/38/1e/1d/381e1d29ff6cdfd19ae2801d8bc77c37.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Maths",
  },
  {
    id: 5,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "Third year",
    imageUrl:
      "https://i.pinimg.com/736x/38/1e/1d/381e1d29ff6cdfd19ae2801d8bc77c37.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Maths",
  },
  {
    id: 6,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year wether it is physics maths python or java all the resources curated just for you",
    category: "Third year",
    imageUrl:
      "https://i.pinimg.com/474x/f5/13/b5/f513b52d7f4587764547a2fdf193417b.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Maths",
  },
];

const AcademicResourcesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategories = () => {
    const categories = [
      "All",
      ...new Set(academicResourcesData.map((res) => res.category)),
    ];
    return categories;
  };

  const filteredResources = academicResourcesData.filter(
    (resource) =>
      (selectedCategory === "All" || resource.category === selectedCategory) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#121317] p-8">
      <div className="max-w-6xl mx-auto bg-[#1C1C24] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              Academic Resources
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                    w-64 pl-10 pr-4 py-2 
                    bg-white/10 text-white 
                    rounded-full 
                    focus:outline-none 
                    focus:ring-2 focus:ring-white/30
                  "
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Content */}
        <div className="p-6">
          {/* Category Filters */}
          <div className="mb-6 flex items-center space-x-4">
            <Filter className="text-white/70 w-6 h-6" />
            <div className="flex space-x-2">
              {getCategories().map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm 
                    transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          {filteredResources.length === 0 ? (
            <div className="text-center py-12 bg-gray-700 rounded-lg">
              <BookOpen className="w-12 h-12 mx-auto text-white/70 mb-4" />
              <p className="text-white/70 text-xl">No resources found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="
                    bg-gray-700 rounded-2xl overflow-hidden 
                    shadow-lg transform transition-all 
                    hover:scale-105 hover:shadow-2xl
                  "
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {resource.title}
                      </h3>
                      <span
                        className="
                        px-3 py-1 rounded-full text-xs font-bold
                        bg-blue-500 text-white
                      "
                      >
                        {resource.year}
                      </span>
                    </div>

                    <div className="flex items-center mb-3">
                      <Tag className="w-5 h-5 mr-2 text-white/70" />
                      <p className="text-white/80">{resource.category}</p>
                    </div>

                    <p className="text-white/70 mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full py-3 
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white 
                        rounded-lg 
                        font-semibold 
                        hover:from-blue-700 hover:to-purple-700
                        transition duration-300
                        flex items-center justify-center
                        space-x-2
                      "
                    >
                      <LinkIcon className="w-5 h-5" />
                      <span>Open Resource</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicResourcesList;
