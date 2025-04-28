// import React, { useEffect, useState } from "react";
// import { getAllRequests } from "../services/requestservice";

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       const fetchedRequests = await getAllRequests();
//       setRequests(fetchedRequests);
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div>
//       <h2>All Requests</h2>
//       <div>
//         {requests.length === 0 ? (
//           <p>No requests found.</p>
//         ) : (
//           <ul>
//             {requests.map((request) => (
//               <li key={request.id}>
//                 <h3>title:{request.title}</h3>
//                 <p>{request.description}</p>
//                 <p>
//                   <strong>Category:</strong> {request.category}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestList;

// import React, { useEffect, useState } from "react";
// import { getAllRequests } from "../services/requestservice";

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       const fetchedRequests = await getAllRequests();
//       setRequests(fetchedRequests);
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
//         All Requests
//       </h2>
//       <div>
//         {requests.length === 0 ? (
//           <p className="text-center text-gray-500">No requests found.</p>
//         ) : (
//           <ul className="space-y-6">
//             {requests.map((request) => (
//               <li
//                 key={request.id}
//                 className="p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-all"
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   Title: {request.title}
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   give here or contact:{request.description}
//                 </p>
//                 <p className="font-medium text-gray-700">
//                   <strong>Category:</strong> {request.category}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestList;
// !!!!!!!!
// import React, { useEffect, useState } from "react";
// import { getAllRequests, fulfillRequest } from "../services/requestservice";

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       const fetchedRequests = await getAllRequests();
//       setRequests(fetchedRequests);
//     };

//     fetchRequests();
//   }, []);

//   const handleFulfill = async (id) => {
//     try {
//       const response = await fulfillRequest(id);

//       if (response && !response.error) {
//         // Update UI immediately
//         setRequests((prevRequests) =>
//           prevRequests.map((req) =>
//             req.id === id ? { ...req, status: "fulfilled" } : req
//           )
//         );
//       } else {
//         console.error("Failed to mark request as fulfilled");
//       }
//     } catch (error) {
//       console.error("Error fulfilling request:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
//         All Requests
//       </h2>
//       <div>
//         {requests.length === 0 ? (
//           <p className="text-center text-gray-500">No requests found.</p>
//         ) : (
//           <ul className="space-y-6">
//             {requests.map((request) => (
//               <li
//                 key={request.id}
//                 className={`p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-all ${
//                   request.status === "fulfilled" ? "bg-green-200" : "bg-white"
//                 }`}
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   Title: {request.title}
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   Give here or contact: {request.description}
//                 </p>
//                 <p className="font-medium text-gray-700">
//                   <strong>Category:</strong> {request.category}
//                 </p>
//                 {request.status !== "fulfilled" && (
//                   <button
//                     onClick={() => handleFulfill(request.id)}
//                     className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//                   >
//                     I will share
//                   </button>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestList;
// import React, { useEffect, useState } from "react";
// import { getAllRequests, fulfillRequest } from "../services/requestservice";
// import { Check, Gift, Tag, Info, Filter, Search } from "lucide-react";

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);
//   const [filteredRequests, setFilteredRequests] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     const fetchRequests = async () => {
//       const fetchedRequests = await getAllRequests();
//       setRequests(fetchedRequests);
//       setFilteredRequests(fetchedRequests);
//     };

//     fetchRequests();
//   }, []);

//   useEffect(() => {
//     let result = requests;

//     // Filter by category
//     if (selectedCategory !== "All") {
//       result = result.filter(
//         (request) => request.category === selectedCategory
//       );
//     }

//     // Filter by search term
//     if (searchTerm) {
//       result = result.filter(
//         (request) =>
//           request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           request.description
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           request.category.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredRequests(result);
//   }, [searchTerm, selectedCategory, requests]);

//   const handleFulfill = async (id) => {
//     try {
//       const response = await fulfillRequest(id);

//       if (response && !response.error) {
//         setRequests((prevRequests) =>
//           prevRequests.map((req) =>
//             req.id === id ? { ...req, status: "fulfilled" } : req
//           )
//         );
//       } else {
//         console.error("Failed to mark request as fulfilled");
//       }
//     } catch (error) {
//       console.error("Error fulfilling request:", error);
//     }
//   };

//   const getCategories = () => {
//     const categories = ["All", ...new Set(requests.map((req) => req.category))];
//     return categories;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
//       <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-orange-600 to-purple-600 p-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//               <Gift className="w-8 h-8" />
//               Resource Requests
//             </h2>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search requests..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="
//                     w-64 pl-10 pr-4 py-2
//                     bg-white/10 text-white
//                     rounded-full
//                     focus:outline-none
//                     focus:ring-2 focus:ring-white/30
//                   "
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters and Content */}
//         <div className="p-6">
//           {/* Category Filters */}
//           <div className="mb-6 flex items-center space-x-4">
//             <Filter className="text-white/70 w-6 h-6" />
//             <div className="flex space-x-2">
//               {getCategories().map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`
//                     px-4 py-2 rounded-full text-sm
//                     transition-all duration-300
//                     ${
//                       selectedCategory === category
//                         ? "bg-orange-600 text-white"
//                         : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                     }
//                   `}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Requests List */}
//           {filteredRequests.length === 0 ? (
//             <div className="text-center py-12 bg-gray-700 rounded-lg">
//               <Info className="w-12 h-12 mx-auto text-white/70 mb-4" />
//               <p className="text-white/70 text-xl">No requests found.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredRequests.map((request) => (
//                 <div
//                   key={request.id}
//                   className={`
//                     bg-gray-700 rounded-2xl overflow-hidden
//                     shadow-lg transform transition-all
//                     hover:scale-105 hover:shadow-2xl
//                     ${request.status === "fulfilled" ? "opacity-50" : ""}
//                   `}
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-bold text-white">
//                         {request.title}
//                       </h3>
//                       <span
//                         className={`
//                           px-3 py-1 rounded-full text-xs font-bold
//                           ${
//                             request.status === "fulfilled"
//                               ? "bg-green-500 text-white"
//                               : "bg-yellow-500 text-gray-900"
//                           }
//                         `}
//                       >
//                         {request.status}
//                       </span>
//                     </div>
//                     <div className="flex items-center mb-3">
//                       <Tag className="w-5 h-5 mr-2 text-white/70" />
//                       <p className="text-white/80">{request.category}</p>
//                     </div>
//                     <p className="text-white/70 mb-4 line-clamp-3">
//                       {request.description}
//                     </p>

//                     {request.status !== "fulfilled" && (
//                       <button
//                         onClick={() => handleFulfill(request.id)}
//                         className="
//                           w-full py-3
//                           bg-gradient-to-r from-orange-600 to-purple-600
//                           text-white
//                           rounded-lg
//                           font-semibold
//                           hover:from-blue-700 hover:to-purple-700
//                           transition duration-300
//                           flex items-center justify-center
//                           space-x-2
//                         "
//                       >
//                         <Check className="w-5 h-5" />
//                         <span>I Will Share</span>
//                       </button>
//                     )}
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

// export default RequestList;
import React, { useEffect, useState } from "react";
import { getAllRequests, fulfillRequest } from "../services/requestservice";
import {
  Check,
  Gift,
  Tag,
  Info,
  Filter,
  Search,
  User,
  Clock,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      try {
        const fetchedRequests = await getAllRequests();
        setRequests(fetchedRequests);
        setFilteredRequests(fetchedRequests);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    let result = requests;

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (request) => request.category === selectedCategory
      );
    }

    // Filter by status
    if (selectedStatus !== "All") {
      result = result.filter(
        (request) => request.status === selectedStatus.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (request) =>
          request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRequests(result);
  }, [searchTerm, selectedCategory, selectedStatus, requests]);

  const handleFulfill = async (id) => {
    try {
      const response = await fulfillRequest(id);

      if (response && !response.error) {
        setRequests((prevRequests) =>
          prevRequests.map((req) =>
            req.id === id ? { ...req, status: "fulfilled" } : req
          )
        );
      } else {
        console.error("Failed to mark request as fulfilled");
      }
    } catch (error) {
      console.error("Error fulfilling request:", error);
    }
  };

  const getCategories = () => {
    const categories = ["All", ...new Set(requests.map((req) => req.category))];
    return categories;
  };

  const getStatuses = () => {
    return ["All", "Pending", "Fulfilled"];
  };

  const getCategoryColor = (category) => {
    const colors = {
      Books: "bg-orange-500",
      Electronics: "bg-purple-500",
      Clothing: "bg-green-500",
      Furniture: "bg-yellow-500",
      Food: "bg-red-500",
      Other: "bg-gray-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-10 rounded-xl shadow-xl text-center mb-10 border-l-4 border-orange-500">
          <h1 className="text-5xl font-extrabold text-white mb-3">
            All Requests
          </h1>
          <p className="text-white text-lg">
            Maybe someone is at need! show your generosity and help them
          </p>
        </div>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Resource Requests
            </h1>
            <p className="text-gray-400">
              View, filter, and fulfill community resource requests
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all">
              <AlertCircle size={18} />
              <span>Create Request</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-xl p-5 mb-6 shadow-lg">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <label className="block text-gray-400 text-sm ">search</label>

              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={12}
              />
              <input
                type="text"
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {getCategories().map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {getStatuses().map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {selectedCategory !== "All" && (
            <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{selectedCategory}</span>
              <button
                onClick={() => setSelectedCategory("All")}
                className="ml-1 text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
          {selectedStatus !== "All" && (
            <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{selectedStatus}</span>
              <button
                onClick={() => setSelectedStatus("All")}
                className="ml-1 text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
          {searchTerm && (
            <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>"{searchTerm}"</span>
              <button
                onClick={() => setSearchTerm("")}
                className="ml-1 text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Request Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-12 text-center">
            <Info className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No requests found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedStatus("All");
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-all"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className={`
                  bg-gray-800 rounded-xl overflow-hidden 
                  shadow-lg transition-all hover:shadow-orange-900/20
                  ${request.status === "fulfilled" ? "opacity-75" : ""}
                `}
              >
                <div className="p-5">
                  {/* Status Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        request.status === "fulfilled"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${
                          request.status === "fulfilled"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      `}
                    >
                      {request.status}
                    </span>
                  </div>

                  {/* Title and Category */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {request.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${getCategoryColor(
                        request.category
                      )}`}
                    ></div>
                    <span className="text-gray-400 text-sm">
                      {request.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {request.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{request.requester || "Anonymous"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>
                        {request.date ? formatDate(request.date) : "Unknown"}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {request.status !== "fulfilled" ? (
                    <button
                      onClick={() => handleFulfill(request.id)}
                      className="
                        w-full py-3 
                        bg-orange-600
                        hover:bg-orange-700
                        text-white 
                        rounded-lg 
                        font-medium 
                        transition-all
                        flex items-center justify-center
                        gap-2
                      "
                    >
                      <Gift size={18} />
                      <span>Fulfill This Request</span>
                    </button>
                  ) : (
                    <button
                      className="
                        w-full py-3 
                        bg-gray-700
                        hover:bg-gray-600
                        text-white 
                        rounded-lg 
                        font-medium 
                        transition-all
                        flex items-center justify-center
                        gap-2
                      "
                    >
                      <MessageCircle size={18} />
                      <span>Contact Requester</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <span className="text-gray-400">
            Showing {filteredRequests.length} of {requests.length} requests
          </span>
          <div className="flex gap-2">
            <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md hover:bg-gray-700">
              Previous
            </button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
