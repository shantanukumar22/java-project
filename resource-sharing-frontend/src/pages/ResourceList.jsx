// import React, { useEffect, useState } from "react";
// import { getAllResources } from "../services/resourceService";

// const ResourcesList = () => {
//   const [resources, setResources] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchResources = async () => {
//       const result = await getAllResources();
//       if (result.error) {
//         setError(result.error);
//       } else {
//         setResources(result);
//       }
//     };

//     fetchResources();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">All Resources</h2>

//       {error && <p className="text-red-500">{error}</p>}

//       {resources.length === 0 && !error ? (
//         <p>No resources available.</p>
//       ) : (
//         <ul>
//           {resources.map((resource) => (
//             <li key={resource.id} className="border-b py-2">
//               <h3 className="font-semibold">{resource.title}</h3>
//               <p>{resource.description}</p>
//               <a href={resource.url} className="text-blue-500">
//                 {resource.url}
//               </a>
//               <p className="text-sm text-gray-500">{resource.category}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ResourcesList;

// import React, { useEffect, useState } from "react";
// import { getAllResources } from "../services/resourceService";
// import {
//   Book,
//   Link as LinkIcon,
//   Filter,
//   Search,
//   Layers,
//   ExternalLink,
// } from "lucide-react";

// const ResourcesList = () => {
//   const [resources, setResources] = useState([]);
//   const [filteredResources, setFilteredResources] = useState([]);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     const fetchResources = async () => {
//       try {
//         const result = await getAllResources();
//         if (result.error) {
//           setError(result.error);
//         } else {
//           setResources(result);
//           setFilteredResources(result);
//         }
//       } catch (err) {
//         setError("Failed to fetch resources. Please try again later.");
//       }
//     };

//     fetchResources();
//   }, []);

//   useEffect(() => {
//     let result = resources;

//     // Filter by category
//     if (selectedCategory !== "All") {
//       result = result.filter(
//         (resource) => resource.category === selectedCategory
//       );
//     }

//     // Filter by search term
//     if (searchTerm) {
//       result = result.filter(
//         (resource) =>
//           resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           resource.description
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           resource.category.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredResources(result);
//   }, [searchTerm, selectedCategory, resources]);

//   const getCategories = () => {
//     const categories = [
//       "All",
//       ...new Set(resources.map((res) => res.category)),
//     ];
//     return categories;
//   };

//   const openResourceLink = (url) => {
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
//       <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//               <Layers className="w-8 h-8" />
//               Resource Library
//             </h2>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search resources..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="
//                   w-64 pl-10 pr-4 py-2
//                   bg-white/10 text-white
//                   rounded-full
//                   focus:outline-none
//                   focus:ring-2 focus:ring-white/30
//                 "
//               />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
//             </div>
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="p-6">
//           <div className="mb-6 flex items-center space-x-4">
//             <Filter className="text-white/70 w-6 h-6" />
//             <div className="flex space-x-2 overflow-x-auto pb-2">
//               {getCategories().map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`
//                     px-4 py-2 rounded-full text-sm
//                     whitespace-nowrap
//                     transition-all duration-300
//                     ${
//                       selectedCategory === category
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                     }
//                   `}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Error Handling */}
//           {error && (
//             <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg text-red-400 flex items-center mb-6">
//               <AlertTriangle className="mr-3 w-6 h-6" />
//               {error}
//             </div>
//           )}

//           {/* Resources Grid */}
//           {filteredResources.length === 0 && !error ? (
//             <div className="text-center py-12 bg-gray-700 rounded-lg">
//               <Book className="w-12 h-12 mx-auto text-white/70 mb-4" />
//               <p className="text-white/70 text-xl">No resources found.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredResources.map((resource) => (
//                 <div
//                   key={resource.id}
//                   className="
//                     bg-gray-700 rounded-2xl overflow-hidden
//                     shadow-lg transform transition-all
//                     hover:scale-105 hover:shadow-2xl
//                     flex flex-col
//                   "
//                 >
//                   <div className="p-6 flex-grow">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-bold text-white flex items-center gap-2">
//                         <Book className="w-6 h-6 text-blue-400" />
//                         {resource.title}
//                       </h3>
//                       <span
//                         className="
//                           px-3 py-1 rounded-full
//                           text-xs font-bold
//                           bg-blue-500/20 text-blue-300
//                         "
//                       >
//                         {resource.category}
//                       </span>
//                     </div>

//                     <p className="text-white/70 mb-4 line-clamp-3">
//                       {resource.description}
//                     </p>

//                     <div className="mt-auto">
//                       <button
//                         onClick={() => openResourceLink(resource.url)}
//                         className="
//                           w-full py-3
//                           bg-gradient-to-r from-blue-600 to-purple-600
//                           text-white
//                           rounded-lg
//                           font-semibold
//                           hover:from-blue-700 hover:to-purple-700
//                           transition duration-300
//                           flex items-center justify-center
//                           space-x-2
//                         "
//                       >
//                         <ExternalLink className="w-5 h-5" />
//                         <span>Open Resource</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcesList;
import React, { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceService";
import {
  Book,
  Filter,
  Search,
  Layers,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const ResourcesList = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const result = await getAllResources();
        if (result.error) {
          setError(result.error);
        } else {
          setResources(result);
          setFilteredResources(result);
        }
      } catch (err) {
        setError("Failed to fetch resources. Please try again later.");
      }
    };
    fetchResources();
  }, []);

  useEffect(() => {
    let result = resources;
    if (selectedCategory !== "All") {
      result = result.filter(
        (resource) => resource.category === selectedCategory
      );
    }
    if (searchTerm) {
      result = result.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredResources(result);
  }, [searchTerm, selectedCategory, resources]);

  const getCategories = () => {
    return ["All", ...new Set(resources.map((res) => res.category))];
  };

  const openResourceLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-8 h-8" />
              Resource Library
            </h2>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900/50 text-white rounded-full 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-900 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-300" />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="p-6">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-orange-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {getCategories().map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200
                    ${
                      selectedCategory === category
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Error Handling */}
          {error && (
            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg text-red-300 flex items-center mb-6">
              <AlertTriangle className="mr-3 w-5 h-5" />
              {error}
            </div>
          )}

          {/* Resources Grid */}
          {filteredResources.length === 0 && !error ? (
            <div className="text-center py-12 bg-gray-700/50 rounded-lg border border-gray-600">
              <Book className="w-12 h-12 mx-auto text-orange-400 mb-4" />
              <p className="text-gray-300 text-xl">No resources found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-600 hover:border-orange-500 transition-all flex flex-col"
                >
                  <div className="p-5 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Book className="w-5 h-5 text-orange-400" />
                        {resource.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-900/40 text-orange-300 border border-orange-500/30">
                        {resource.category}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {resource.description}
                    </p>
                  </div>

                  <div className="px-5 pb-5 mt-auto">
                    <button
                      onClick={() => openResourceLink(resource.url)}
                      className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Access Resource</span>
                    </button>
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

export default ResourcesList;
