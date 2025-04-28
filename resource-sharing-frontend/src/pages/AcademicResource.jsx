// AcademicResourcesList.jsx
import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Tag,
  Link as LinkIcon,
  Star,
  ChevronRight,
} from "lucide-react";

const academicResourcesData = [
  {
    id: 1,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
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
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
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
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
    category: "Second year",
    imageUrl:
      "https://i.pinimg.com/736x/30/6e/7d/306e7da62776ac49d0250e8bccd39797.jpg",
    link: "https://92sgpa.vercel.app/",
    year: "Java",
  },
  {
    id: 4,
    title: "Your gateway to study materials and activities",
    description:
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
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
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
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
      "Get all the Academic resources for the first year whether it is physics, maths, python or java, all the resources curated just for you.",
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
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              Academic Resources Hub
            </h2>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md pl-10 pr-4 py-3 bg-black/30 text-white rounded-xl focus focus/50 placeholder-gray-300 border border-white/10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Content */}
        <div className="p-4 md:p-6">
          {/* Category Filters */}
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 text-orange-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {getCategories().map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-xl text-sm 
                    transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }
                    font-medium
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
              <BookOpen className="w-16 h-16 mx-auto text-orange-400/70 mb-4" />
              <p className="text-gray-300 text-xl">No resources found.</p>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-300 hover:shadow-orange-500/20 hover:border-orange-500/30"
                  onMouseEnter={() => setHoveredCard(resource.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                      style={{
                        transform:
                          hoveredCard === resource.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 rounded-lg text-xs font-bold bg-orange-500 text-white">
                          {resource.year}
                        </span>
                        <div className="flex items-center text-orange-300">
                          <Star className="w-4 h-4 mr-1 fill-orange-300 stroke-orange-300" />
                          <Star className="w-4 h-4 mr-1 fill-orange-300 stroke-orange-300" />
                          <Star className="w-4 h-4 mr-1 fill-orange-300 stroke-orange-300" />
                          <Star className="w-4 h-4 mr-1 fill-orange-300 stroke-orange-300" />
                          <Star className="w-4 h-4 fill-gray-600 stroke-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 mr-2 text-orange-400" />
                      <p className="text-orange-300 text-sm font-medium">
                        {resource.category}
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {resource.title}
                    </h3>

                    <p className="text-gray-400 mb-5 line-clamp-3 text-sm">
                      {resource.description}
                    </p>

                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-orange-600/20"
                    >
                      <LinkIcon className="w-5 h-5" />
                      <span>Access Resource</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>
              Explore our curated academic resources to enhance your learning
              journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicResourcesList;
