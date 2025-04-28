// import React, { useState } from "react";
// import { addResource } from "../services/resourceService"; // Import the addResource service

// const AddResource = () => {
//   const [resource, setResource] = useState({
//     title: "",
//     description: "",
//     url: "",
//     category: "",
//   });

//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResource((prevResource) => ({
//       ...prevResource,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await addResource(resource);
//     if (result.error) {
//       setError(result.error);
//     } else {
//       setSuccessMessage("Resource added successfully!");
//       setResource({
//         title: "",
//         description: "",
//         url: "",
//         category: "",
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Add Resource</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && <p className="text-red-500">{error}</p>}
//         {successMessage && <p className="text-green-500">{successMessage}</p>}

//         <div>
//           <label className="block">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={resource.title}
//             onChange={handleChange}
//             className="input"
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Description</label>
//           <textarea
//             name="description"
//             value={resource.description}
//             onChange={handleChange}
//             className="input"
//             required
//           />
//         </div>

//         <div>
//           <label className="block">URL</label>
//           <input
//             type="url"
//             name="url"
//             value={resource.url}
//             onChange={handleChange}
//             className="input"
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={resource.category}
//             onChange={handleChange}
//             className="input"
//             required
//           />
//         </div>

//         <button type="submit" className="btn mt-4">
//           Add Resource
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddResource;

// import React, { useState } from "react";
// import { addResource } from "../services/resourceService";

// const AddResource = () => {
//   const [resource, setResource] = useState({
//     title: "",
//     description: "",
//     url: "",
//     category: "",
//   });
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResource((prevResource) => ({
//       ...prevResource,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await addResource(resource);
//     if (result.error) {
//       setError(result.error);
//     } else {
//       setSuccessMessage("Resource added successfully!");
//       setResource({ title: "", description: "", url: "", category: "" });
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//         Add a New Resource
//       </h2>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       {successMessage && (
//         <p className="text-green-500 text-center">{successMessage}</p>
//       )}
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-gray-600 font-medium">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={resource.title}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-600 font-medium">Description</label>
//           <textarea
//             name="description"
//             value={resource.description}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-600 font-medium">URL</label>
//           <input
//             type="url"
//             name="url"
//             value={resource.url}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-600 font-medium">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={resource.category}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
//         >
//           Add Resource
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddResource;

import React, { useState } from "react";
import { addResource } from "../services/resourceService";
import {
  Book,
  Link as LinkIcon,
  Type,
  FileText,
  Tag,
  Send,
  Check,
  AlertTriangle,
} from "lucide-react";

const AddResource = () => {
  const [resource, setResource] = useState({
    title: "",
    description: "",
    url: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: "Books", icon: "📚" },
    { value: "Online Courses", icon: "🖥️" },
    { value: "Tutorials", icon: "📹" },
    { value: "Research Papers", icon: "📄" },
    { value: "Others", icon: "🌟" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResource((prevResource) => ({
      ...prevResource,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    // Validate URL
    try {
      new URL(resource.url);
    } catch {
      setError("Please enter a valid URL");
      setIsLoading(false);
      return;
    }

    try {
      const result = await addResource(resource);

      if (result.error) {
        setError(result.error);
      } else {
        setSuccessMessage("Resource added successfully!");
        setResource({ title: "", description: "", url: "", category: "" });
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <Book className="w-8 h-8" />
            Add a New Resource
          </h2>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Error Handling */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg flex items-center text-red-400">
              <AlertTriangle className="mr-3 w-6 h-6" />
              {error}
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg flex items-center text-green-400">
              <Check className="mr-3 w-6 h-6" />
              {successMessage}
            </div>
          )}

          {/* Title Input */}
          <div className="space-y-2">
            <label className="flex items-center text-white/80 font-medium">
              <Type className="mr-2 w-5 h-5 text-blue-400" />
              Title
            </label>
            <input
              type="text"
              name="title"
              value={resource.title}
              onChange={handleChange}
              className="
                w-full px-4 py-3 
                bg-gray-700 text-white 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 focus:ring-blue-500/50
                transition duration-300
              "
              placeholder="Enter resource title"
              required
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="flex items-center text-white/80 font-medium">
              <FileText className="mr-2 w-5 h-5 text-blue-400" />
              Description
            </label>
            <textarea
              name="description"
              value={resource.description}
              onChange={handleChange}
              className="
                w-full px-4 py-3 
                bg-gray-700 text-white 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 focus:ring-blue-500/50
                transition duration-300
                min-h-[120px]
              "
              placeholder="Describe the resource and its key features"
              required
            />
          </div>

          {/* URL Input */}
          <div className="space-y-2">
            <label className="flex items-center text-white/80 font-medium">
              <LinkIcon className="mr-2 w-5 h-5 text-blue-400" />
              URL
            </label>
            <input
              type="url"
              name="url"
              value={resource.url}
              onChange={handleChange}
              className="
                w-full px-4 py-3 
                bg-gray-700 text-white 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 focus:ring-blue-500/50
                transition duration-300
              "
              placeholder="https://example.com/resource"
              required
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <label className="flex items-center text-white/80 font-medium">
              <Tag className="mr-2 w-5 h-5 text-blue-400" />
              Category
            </label>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((cat) => (
                <label
                  key={cat.value}
                  className={`
                    p-4 rounded-lg cursor-pointer 
                    flex items-center justify-center 
                    text-center space-x-2
                    transition-all duration-300
                    ${
                      resource.category === cat.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-white/70 hover:bg-gray-600"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={resource.category === cat.value}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="text-2xl mr-2">{cat.icon}</span>
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
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white 
              rounded-lg 
              font-semibold 
              hover:from-blue-700 hover:to-purple-700
              transition duration-300
              flex items-center justify-center
              space-x-2
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
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
                Adding Resource...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Add Resource</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResource;
