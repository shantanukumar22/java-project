// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = "AIzaSyAQpxjAnuU0mqDH541FhoL_EesFP8unOFc";
// const genAI = new GoogleGenerativeAI(API_KEY);

// const searchResources = async () => {
//   if (!query.trim()) return;

//   setLoading(true);
//   setError(null);

//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const result = await model.generateContent(`You are an expert academic assistant. Search for the most relevant, high-quality knowledge-based resources about "${query}". Return the results in this strict JSON format:
//     {
//       "resources": [
//         {
//           "title": "Resource title",
//           "description": "Brief description",
//           "type": "video|paper|book|website",
//           "url": "https://resource-url.com",
//           "author": "Author name",
//           "publishedYear": "Year (YYYY)"
//         }
//       ]
//     }
//     Include a diverse mix of research papers, online articles, books, and videos if available. Always prioritize the most accurate, verified, and insightful sources. Always return at least 5 resources.`);

//     const textResponse = result.response.candidates[0].content.parts[0].text;

//     const jsonStartIndex = textResponse.indexOf("{");
//     const jsonEndIndex = textResponse.lastIndexOf("}") + 1;
//     const jsonString = textResponse.substring(jsonStartIndex, jsonEndIndex);

//     const parsedData = JSON.parse(jsonString);
//     setResults(parsedData.resources || []);
//   } catch (err) {
//     console.error("Error fetching resources:", err);
//     setError("Failed to fetch resources. Please try again.");

//     setResults([
//       {
//         title: "Fundamentals of Machine Learning",
//         description: "An introductory video on machine learning algorithms and real-world applications.",
//         type: "video",
//         url: "https://example.com/ml-video",
//         author: "Dr. John Doe",
//         publishedYear: "2023",
//       },
//       {
//         title: "Recent Advances in AI",
//         description: "A paper discussing breakthroughs in artificial intelligence in the last decade.",
//         type: "paper",
//         url: "https://example.com/ai-paper",
//         author: "Jane Smith",
//         publishedYear: "2022",
//       },
//       {
//         title: "Data Science Handbook",
//         description: "A complete guidebook on data science techniques and practices.",
//         type: "book",
//         url: "https://example.com/ds-book",
//         author: "Robert Taylor",
//         publishedYear: "2021",
//       },
//     ]);
//   } finally {
//     setLoading(false);
//   }
// };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       searchResources();
//     }
//   };

//   const filteredResults =
//     activeTab === "all"
//       ? results
//       : results.filter((result) => result.type === activeTab);

// const getIcon = (type) => {
//     switch (type) {
//         case "video":
//             return <Video size={18} />;
//         case "paper":
//             return <FileText size={18} />;
//         case "book":
//             return <Book size={18} />;
//         case "website":
//             return <ExternalLink size={18} />;
//         default:
//             return <FileText size={18} />;

//             return (
//                 <div className="min-h-screen bg-gray-900 text-gray-100">
//                     {/* Banner */}
//                     <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-8 px-6 shadow-lg">
//                         <div className="max-w-4xl mx-auto">
//                             <h1 className="text-3xl font-bold mb-2">Academic Resource Finder</h1>
//                             <p className="text-lg text-gray-200">
//                                 Discover research papers, videos, and educational materials for your
//                                 studies
//                             </p>
//                         </div>
//                     </div>

//                     {/* Search Section */}
//                     <div className="max-w-4xl mx-auto p-6">
//                         <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
//                             <div className="flex items-center gap-2">
//                                 <div className="relative flex-grow">
//                                     <input
//                                         type="text"
//                                         placeholder="Search for academic resources..."
//                                         value={query}
//                                         onChange={(e) => setQuery(e.target.value)}
//                                         onKeyDown={handleKeyDown}
//                                         className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     />
//                                     <Search
//                                         className="absolute left-3 top-3 text-gray-400"
//                                         size={20}
//                                     />
//                                 </div>
//                                 <button
//                                     onClick={searchResources}
//                                     disabled={loading}
//                                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
//                                 >
//                                     {loading ? (
//                                         <Loader className="animate-spin" size={20} />
//                                     ) : (
//                                         "Search"
//                                     )}
//                                 </button>
//                             </div>

//                             <div className="mt-4 text-sm text-gray-400">
//                                 Try searching for: "neural networks", "climate science", "quantum
//                                 computing"
//                             </div>
//                         </div>

//                         {error && (
//                             <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg mb-6">
//                                 {error}
//                             </div>
//                         )}

//                         {results.length > 0 && (
//                             <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
//                                 <div className="flex border-b border-gray-700">
//                                     <button
//                                         className={`px-4 py-3 flex-1 font-medium ${activeTab === "all"
//                                                 ? "bg-blue-900 bg-opacity-50 text-blue-300"
//                                                 : "hover:bg-gray-700"
//                                             }`}
//                                         onClick={() => setActiveTab("all")}
//                                     >
//                                         All Resources
//                                     </button>
//                                     <button
//                                         className={`px-4 py-3 flex-1 font-medium ${activeTab === "video"
//                                                 ? "bg-blue-900 bg-opacity-50 text-blue-300"
//                                                 : "hover:bg-gray-700"
//                                             }`}
//                                         onClick={() => setActiveTab("video")}
//                                     >
//                                         Videos
//                                     </button>
//                                     <button
//                                         className={`px-4 py-3 flex-1 font-medium ${activeTab === "paper"
//                                                 ? "bg-blue-900 bg-opacity-50 text-blue-300"
//                                                 : "hover:bg-gray-700"
//                                             }`}
//                                         onClick={() => setActiveTab("paper")}
//                                     >
//                                         Papers
//                                     </button>
//                                     <button
//                                         className={`px-4 py-3 flex-1 font-medium ${activeTab === "book"
//                                                 ? "bg-blue-900 bg-opacity-50 text-blue-300"
//                                                 : "hover:bg-gray-700"
//                                             }`}
//                                         onClick={() => setActiveTab("book")}
//                                     >
//                                         Books
//                                     </button>
//                                 </div>

//                                 <div className="divide-y divide-gray-700">
//                                     {filteredResults.length > 0 ? (
//                                         filteredResults.map((resource, index) => (
//                                             <div key={index} className="p-4 hover:bg-gray-700">
//                                                 <div className="flex items-start gap-3">
//                                                     <div className="mt-1 p-2 bg-gray-700 rounded-lg">
//                                                         {getIcon(resource.type)}
//                                                     </div>
//                                                     <div>
//                                                         <a
//                                                             href={resource.url}
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             className="text-blue-400 hover:text-blue-300 font-medium text-lg flex items-center gap-1"
//                                                         >
//                                                             {resource.title}
//                                                             <ExternalLink size={16} />
//                                                         </a>
//                                                         <div className="text-sm text-gray-400 mb-1">
//                                                             {resource.author} • {resource.publishedYear} •{" "}
//                                                             <span className="capitalize">{resource.type}</span>
//                                                         </div>
//                                                         <p className="text-gray-300">{resource.description}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <div className="p-8 text-center text-gray-400">
//                                             No {activeTab === "all" ? "resources" : activeTab + "s"} found
//                                             for this query.
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             );
//     }
// }

// export default ResourceSearch;

// import React, { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import {
//   Search,
//   Loader,
//   Video,
//   FileText,
//   Book,
//   ExternalLink,
// } from "lucide-react";

// function ResourceSearch() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const API_KEY = "AIzaSyAQpxjAnuU0mqDH541FhoL_EesFP8unOFc";
//   const genAI = new GoogleGenerativeAI(API_KEY);

//   const searchResources = async () => {
//     if (!query.trim()) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const model = genAI.getGenerativeModel({
//         model: "models/gemini-1.5-flash",
//       });

//       const result = await model.generateContent([
//         `You are an expert academic assistant. Search for the most relevant, high-quality knowledge-based resources about "${query}". Return the results in this strict JSON format:
//       {
//         "resources": [
//           {
//             "title": "Resource title",
//             "description": "Brief description",
//             "type": "video|paper|book|website",
//             "url": "https://resource-url.com",
//             "author": "Author name",
//             "publishedYear": "Year (YYYY)"
//           }
//         ]
//       }
//       Include a diverse mix of research papers, online articles, books, and videos if available. Always prioritize the most accurate, verified, and insightful sources. Always return at least 5 resources.`,
//       ]);

//       const textResponse = result.response.candidates[0].content.parts[0].text;

//       const jsonStartIndex = textResponse.indexOf("{");
//       const jsonEndIndex = textResponse.lastIndexOf("}") + 1;
//       const jsonString = textResponse.substring(jsonStartIndex, jsonEndIndex);

//       const parsedData = JSON.parse(jsonString);
//       setResults(parsedData.resources || []);
//     } catch (err) {
//       console.error("Error fetching resources:", err);
//       setError("Failed to fetch resources. Please try again.");
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       searchResources();
//     }
//   };

//   const filteredResults =
//     activeTab === "all"
//       ? results
//       : results.filter((result) => result.type === activeTab);

//   const getIcon = (type) => {
//     switch (type) {
//       case "video":
//         return <Video size={18} />;
//       case "paper":
//         return <FileText size={18} />;
//       case "book":
//         return <Book size={18} />;
//       case "website":
//         return <ExternalLink size={18} />;
//       default:
//         return <FileText size={18} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Banner */}
//       <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-8 px-6 shadow-lg">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-2">Academic Resource Finder</h1>
//           <p className="text-lg text-gray-200">
//             Discover research papers, videos, and educational materials for your
//             studies
//           </p>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
//           <div className="flex items-center gap-2">
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 placeholder="Search for academic resources..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search
//                 className="absolute left-3 top-3 text-gray-400"
//                 size={20}
//               />
//             </div>
//             <button
//               onClick={searchResources}
//               disabled={loading}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
//             >
//               {loading ? (
//                 <Loader className="animate-spin" size={20} />
//               ) : (
//                 "Search"
//               )}
//             </button>
//           </div>

//           <div className="mt-4 text-sm text-gray-400">
//             Try searching for: "neural networks", "climate science", "quantum
//             computing"
//           </div>
//         </div>

//         {error && (
//           <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg mb-6">
//             {error}
//           </div>
//         )}

//         {results.length > 0 && (
//           <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
//             <div className="flex border-b border-gray-700">
//               {["all", "video", "paper", "book"].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`px-4 py-3 flex-1 font-medium ${
//                     activeTab === tab
//                       ? "bg-blue-900 bg-opacity-50 text-blue-300"
//                       : "hover:bg-gray-700"
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab === "all"
//                     ? "All Resources"
//                     : `${tab.charAt(0).toUpperCase()}${tab.slice(1)}s`}
//                 </button>
//               ))}
//             </div>

//             <div className="divide-y divide-gray-700">
//               {filteredResults.length > 0 ? (
//                 filteredResults.map((resource, index) => (
//                   <div key={index} className="p-4 hover:bg-gray-700">
//                     <div className="flex items-start gap-3">
//                       <div className="mt-1 p-2 bg-gray-700 rounded-lg">
//                         {getIcon(resource.type)}
//                       </div>
//                       <div>
//                         <a
//                           href={resource.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-400 hover:text-blue-300 font-medium text-lg flex items-center gap-1"
//                         >
//                           {resource.title}
//                           <ExternalLink size={16} />
//                         </a>
//                         <div className="text-sm text-gray-400 mb-1">
//                           {resource.author} • {resource.publishedYear} •{" "}
//                           <span className="capitalize">{resource.type}</span>
//                         </div>
//                         <p className="text-gray-300">{resource.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="p-8 text-center text-gray-400">
//                   No {activeTab === "all" ? "resources" : activeTab + "s"} found
//                   for this query.
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResourceSearch;
// src/components/ResourceSearch.jsx

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  Search,
  Loader,
  Video,
  FileText,
  Book,
  ExternalLink,
} from "lucide-react";

function ResourceSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyAQpxjAnuU0mqDH541FhoL_EesFP8unOFc";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const searchResources = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({
        model: "models/gemini-1.5-flash",
      });

      const result = await model.generateContent([
        `You are an expert academic assistant. Search for the most relevant, high-quality knowledge-based resources about "${query}". Return the results in this strict JSON format:
      {
        "resources": [
          {
            "title": "Resource title",
            "description": "Brief description",
            "type": "video|paper|book|website",
            "url": "https://resource-url.com",
            "author": "Author name",
            "publishedYear": "Year (YYYY)"
          }
        ]
      }
      Include a diverse mix of research papers, online articles, books, and videos if available. Always prioritize the most accurate, verified, and insightful sources. Always return at least 5 resources.`,
      ]);

      const textResponse = result.response.candidates[0].content.parts[0].text;

      const jsonStartIndex = textResponse.indexOf("{");
      const jsonEndIndex = textResponse.lastIndexOf("}") + 1;
      const jsonString = textResponse.substring(jsonStartIndex, jsonEndIndex);

      const parsedData = JSON.parse(jsonString);
      setResults(parsedData.resources || []);
    } catch (err) {
      console.error("Error fetching resources:", err);
      setError("Failed to fetch resources. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchResources();
    }
  };

  const filteredResults =
    activeTab === "all"
      ? results
      : results.filter((result) => result.type === activeTab);

  const getIcon = (type) => {
    switch (type) {
      case "video":
        return <Video size={18} />;
      case "paper":
        return <FileText size={18} />;
      case "book":
        return <Book size={18} />;
      case "website":
        return <ExternalLink size={18} />;
      default:
        return <FileText size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 font-sans">
      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-900 via-orange-700 to-orange-600 py-10 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Academic Resource Finder
          </h1>
          <p className="text-lg text-orange-100">
            Discover research papers, books, videos, and more
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-[#262626] border border-[#333] rounded-xl py-3 px-4 pl-10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <button
              onClick={searchResources}
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                "Search"
              )}
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-400 text-center">
            Try: "AI in medicine", "blockchain technology", "renewable energy"
          </div>
        </div>

        {error && (
          <div className="bg-red-800 bg-opacity-30 text-red-300 p-4 rounded-xl mb-8">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#333]">
              {["all", "video", "paper", "book"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-3 flex-1 font-semibold transition ${
                    activeTab === tab
                      ? "bg-orange-700 text-white"
                      : "hover:bg-[#2d2d2d] text-gray-400"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all"
                    ? "All Resources"
                    : `${tab.charAt(0).toUpperCase()}${tab.slice(1)}s`}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="divide-y divide-[#333]">
              {filteredResults.length > 0 ? (
                filteredResults.map((resource, index) => (
                  <div
                    key={index}
                    className="p-5 hover:bg-[#262626] transition duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#333] rounded-lg text-orange-400">
                        {getIcon(resource.type)}
                      </div>
                      <div>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 font-semibold text-lg flex items-center gap-1"
                        >
                          {resource.title}
                          <ExternalLink size={16} />
                        </a>
                        <div className="text-sm text-gray-400 mt-1">
                          {resource.author} • {resource.publishedYear} •{" "}
                          <span className="capitalize">{resource.type}</span>
                        </div>
                        <p className="mt-1 text-gray-300">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No {activeTab === "all" ? "resources" : activeTab + "s"} found
                  for this query.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceSearch;
