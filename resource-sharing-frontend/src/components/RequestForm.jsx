// import React, { useState } from "react";
// import { createRequest } from "../services/requestService";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import RequestList from "./RequestList";

// const RequestForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const navigate = useNavigate(); // Initialize navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requestData = { title, description, category };

//     const response = await createRequest(requestData); // Call the createRequest function

//     if (response) {
//       // Redirect to the dashboard (or any other page) upon successful request submission
//       navigate("/dashboard"); // Use navigate instead of useHistory
//     } else {
//       alert("Failed to create request");
//     }
//   };

//   return (
//     <div>
//       <h2>Create a New Request</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="Books">Books</option>
//             <option value="Notes">Notes</option>
//             <option value="Others">Others</option>
//           </select>
//         </div>

//         <button type="submit">Submit Request</button>
//       </form>
//       <RequestList />
//     </div>
//   );
// };

// export default RequestForm;

// import React, { useState } from "react";
// import { createRequest } from "../services/requestService";
// import { useNavigate } from "react-router-dom";
// import RequestList from "./RequestList";

// const RequestForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requestData = { title, description, category };

//     const response = await createRequest(requestData);

//     if (response) {
//       navigate("/request");
//     } else {
//       alert("Failed to create request");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
//         Create a New Request
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex flex-col">
//           <label className="text-lg font-medium text-gray-600 mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             placeholder="Enter request title"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-medium text-gray-600 mb-2">
//             Description
//           </label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             placeholder="Enter request description"
//             rows="4"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-medium text-gray-600 mb-2">
//             Category
//           </label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             required
//           >
//             <option value="Books">Books</option>
//             <option value="Notes">Notes</option>
//             <option value="Others">Others</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
//         >
//           Submit Request
//         </button>
//       </form>
//       {/* <RequestList /> */}
//     </div>
//   );
// };

// export default RequestForm;
// import React, { useState } from "react";
// import { createRequest } from "../services/requestService";
// import { useNavigate } from "react-router-dom";
// import { Gift, Type, FileText, Tag, Send, AlertTriangle } from "lucide-react";

// const RequestForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const categories = [
//     { value: "Books", icon: "📚" },
//     { value: "Notes", icon: "📝" },
//     { value: "Study Materials", icon: "📖" },
//     { value: "Electronics", icon: "💻" },
//     { value: "Others", icon: "🌟" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     // Basic validation
//     if (!title.trim()) {
//       setError("Title cannot be empty");
//       setIsLoading(false);
//       return;
//     }

//     if (!description.trim()) {
//       setError("Description cannot be empty");
//       setIsLoading(false);
//       return;
//     }

//     if (!category) {
//       setError("Please select a category");
//       setIsLoading(false);
//       return;
//     }

//     const requestData = { title, description, category };

//     try {
//       const response = await createRequest(requestData);

//       if (response) {
//         navigate("/request");
//       } else {
//         setError("Failed to create request. Please try again.");
//       }
//     } catch (err) {
//       setError("An unexpected error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center">
//       <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//           <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
//             <Gift className="w-8 h-8" />
//             Create a New Resource Request
//           </h2>
//         </div>

//         {/* Form Container */}
//         <form onSubmit={handleSubmit} className="p-8 space-y-6">
//           {/* Error Handling */}
//           {error && (
//             <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg flex items-center text-red-400">
//               <AlertTriangle className="mr-3 w-6 h-6" />
//               {error}
//             </div>
//           )}

//           {/* Title Input */}
//           <div className="space-y-2">
//             <label className="flex items-center text-white/80 font-medium">
//               <Type className="mr-2 w-5 h-5 text-blue-400" />
//               Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="
//                 w-full px-4 py-3
//                 bg-gray-700 text-white
//                 rounded-lg
//                 focus:outline-none
//                 focus:ring-2 focus:ring-blue-500/50
//                 transition duration-300
//               "
//               placeholder="What resource do you need?"
//               required
//             />
//           </div>

//           {/* Description Input */}
//           <div className="space-y-2">
//             <label className="flex items-center text-white/80 font-medium">
//               <FileText className="mr-2 w-5 h-5 text-blue-400" />
//               Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="
//                 w-full px-4 py-3
//                 bg-gray-700 text-white
//                 rounded-lg
//                 focus:outline-none
//                 focus:ring-2 focus:ring-blue-500/50
//                 transition duration-300
//                 min-h-[120px]
//               "
//               placeholder="Provide more details about the resource you're looking for"
//               required
//             />
//           </div>

//           {/* Category Selection */}
//           <div className="space-y-2">
//             <label className="flex items-center text-white/80 font-medium">
//               <Tag className="mr-2 w-5 h-5 text-blue-400" />
//               Category
//             </label>
//             <div className="grid grid-cols-3 gap-4">
//               {categories.map((cat) => (
//                 <label
//                   key={cat.value}
//                   className={`
//                     p-4 rounded-lg cursor-pointer
//                     flex items-center justify-center
//                     text-center space-x-2
//                     transition-all duration-300
//                     ${
//                       category === cat.value
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-700 text-white/70 hover:bg-gray-600"
//                     }
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     value={cat.value}
//                     checked={category === cat.value}
//                     onChange={() => setCategory(cat.value)}
//                     className="hidden"
//                   />
//                   <span className="text-2xl mr-2">{cat.icon}</span>
//                   <span>{cat.value}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="
//               w-full py-3
//               bg-gradient-to-r from-blue-600 to-purple-600
//               text-white
//               rounded-lg
//               font-semibold
//               hover:from-blue-700 hover:to-purple-700
//               transition duration-300
//               flex items-center justify-center
//               space-x-2
//               disabled:opacity-50
//               disabled:cursor-not-allowed
//             "
//           >
//             {isLoading ? (
//               <>
//                 <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Submitting...
//               </>
//             ) : (
//               <>
//                 <Send className="w-5 h-5" />
//                 <span>Submit Request</span>
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RequestForm;

import React, { useState } from "react";
import { createRequest } from "../services/requestService";
import { useNavigate } from "react-router-dom";
import {
  Gift,
  Type,
  FileText,
  Tag,
  Send,
  AlertTriangle,
  Check,
} from "lucide-react";

const RequestForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { value: "Books", icon: "📚" },
    { value: "Notes", icon: "📝" },
    { value: "Study Materials", icon: "📖" },
    { value: "Electronics", icon: "💻" },
    { value: "Others", icon: "🌟" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (!title.trim()) {
      setError("Title cannot be empty");
      setIsLoading(false);
      return;
    }

    if (!description.trim()) {
      setError("Description cannot be empty");
      setIsLoading(false);
      return;
    }

    if (!category) {
      setError("Please select a category");
      setIsLoading(false);
      return;
    }

    const requestData = { title, description, category };

    try {
      const response = await createRequest(requestData);

      if (response) {
        navigate("/request");
      } else {
        setError("Failed to create request. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-orange-300 rounded-3xl shadow-lg overflow-hidden flex">
        {/* Left Section with Illustration */}
        <div className="w-2/5 bg-gradient-to-br from-orange-600 to-orange-800 p-8 relative flex flex-col justify-between">
          <div className="mb-6">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="z-10">
            <h3 className="text-white text-xl font-light">Hi Welcome!!</h3>
            <h2 className="text-white text-4xl font-bold mb-4">
              Let's Get Started
            </h2>
            <p className="text-white/80">
              Tell us what resources you need. Our community will help you find
              what you're looking for.
            </p>
          </div>

          {/* Actual illustration */}
          <div className="relative w-64 h-64 mx-auto mt-6">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Chair */}
              <rect
                x="60"
                y="120"
                width="80"
                height="10"
                fill="#ffcba4"
                rx="2"
              />
              <rect
                x="65"
                y="130"
                width="70"
                height="40"
                fill="#ffcba4"
                rx="4"
              />
              <rect x="65" y="170" width="10" height="20" fill="#d18e54" />
              <rect x="125" y="170" width="10" height="20" fill="#d18e54" />
              {/* Person */}
              <circle cx="100" cy="90" r="20" fill="#ffdfc4" /> {/* Head */}
              <rect
                x="90"
                y="110"
                width="20"
                height="40"
                fill="#ffc87c"
                rx="5"
              />{" "}
              {/* Body */}
              <rect
                x="80"
                y="120"
                width="12"
                height="30"
                fill="#ffac4d"
                rx="4"
              />{" "}
              {/* Left arm */}
              <rect
                x="108"
                y="120"
                width="12"
                height="30"
                fill="#ffac4d"
                rx="4"
              />{" "}
              {/* Right arm */}
              <rect
                x="90"
                y="150"
                width="8"
                height="20"
                fill="#ffac4d"
                rx="3"
              />{" "}
              {/* Left leg */}
              <rect
                x="102"
                y="150"
                width="8"
                height="20"
                fill="#ffac4d"
                rx="3"
              />{" "}
              {/* Right leg */}
              {/* Laptop */}
              <rect
                x="85"
                y="125"
                width="30"
                height="20"
                fill="#e0e0e0"
                rx="2"
              />
              <rect
                x="85"
                y="122"
                width="30"
                height="3"
                fill="#c0c0c0"
                rx="1"
              />
              {/* Hair */}
              <path d="M80,85 Q100,65 120,85" fill="#ff8c42" />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-32 h-20 bg-white/5 rounded-tl-full"></div>
          <div className="absolute top-20 right-8 w-20 h-20 bg-white/5 rounded-full"></div>
        </div>

        {/* Right Section with Form */}
        <div className="w-3/5 p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Create a Request
            </h2>
            <p className="text-gray-500">
              Tell us what resources you're looking for
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Handling */}
            {error && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center text-red-600">
                <AlertTriangle className="mr-3 w-5 h-5" />
                {error}
              </div>
            )}

            {/* Title Input */}
            <div className="space-y-2 relative">
              <label className="text-gray-600 font-medium">Your Title</label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="
                    w-full px-4 py-3 
                    bg-gray-100 text-gray-800 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 focus:ring-orange-500
                    transition duration-300
                  "
                  placeholder="What resource do you need?"
                  required
                />
                {title && (
                  <div className="absolute right-3 top-3 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* Description Input */}
            <div className="space-y-2 relative">
              <label className="text-gray-600 font-medium">
                Your Description
              </label>
              <div className="relative">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="
                    w-full px-4 py-3 
                    bg-gray-100 text-gray-800 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 focus:ring-orange-500
                    transition duration-300
                    min-h-[100px]
                  "
                  placeholder="Provide more details about the resource you're looking for"
                  required
                />
                {description && (
                  <div className="absolute right-3 top-3 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Category</label>
              <div className="grid grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <label
                    key={cat.value}
                    className={`
                      p-3 rounded-lg cursor-pointer 
                      flex items-center justify-center 
                      text-center 
                      transition-all duration-300
                      ${
                        category === cat.value
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      value={cat.value}
                      checked={category === cat.value}
                      onChange={() => setCategory(cat.value)}
                      className="hidden"
                    />
                    <span className="text-xl mr-2">{cat.icon}</span>
                    <span>{cat.value}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                w-full py-3 
                bg-orange-600
                text-white 
                rounded-lg 
                font-semibold 
                hover:bg-orange-700
                transition duration-300
                flex items-center justify-center
                space-x-2
                disabled:opacity-50
                disabled:cursor-not-allowed
                mt-6
              "
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <span>CREATE REQUEST</span>
                </>
              )}
            </button>
          </form>

          {/* Alternative Options */}
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              Already submitted a request?{" "}
              <a href="/request" className="text-orange-600 font-medium">
                Check status here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
