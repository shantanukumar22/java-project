// import React, { useState } from "react";

// const UploadItem = () => {
//   const [file, setFile] = useState(null);
//   const [itemName, setItemName] = useState("");
//   const [description, setDescription] = useState("");
//   const [isLost, setIsLost] = useState(true); // Default to lost item
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file || !itemName || !description) {
//       setMessage("Please fill out all fields and select a file!");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("itemName", itemName);
//     formData.append("description", description);
//     formData.append("isLost", isLost);

//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/lost-found/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const text = await response.text();
//       setMessage(text);
//     } catch (error) {
//       console.error(error);
//       setMessage("Upload failed!");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-6 rounded-t-lg shadow-lg mb-8">
//         <h1 className="text-4xl font-semibold">Lost and Found Item Upload</h1>
//         <p className="text-xl mt-2">
//           Upload an item you’ve lost or found to help others!
//         </p>
//       </div>

//       {/* Upload Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Upload Item Information
//         </h2>

//         {/* Item Name Input */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Item Description Input */}
//         <div className="mb-6">
//           <textarea
//             placeholder="Item Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Lost / Found Toggle */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between">
//             <label className="text-lg font-medium">Item Status</label>
//             <div>
//               <label className="inline-flex items-center mr-6">
//                 <input
//                   type="radio"
//                   checked={isLost}
//                   onChange={() => setIsLost(true)}
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2 text-lg">Lost</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   checked={!isLost}
//                   onChange={() => setIsLost(false)}
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2 text-lg">Found</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* File Upload */}
//         <div className="mb-6">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Upload Button */}
//         <div className="mb-6">
//           <button
//             onClick={handleUpload}
//             className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//           >
//             Upload Item
//           </button>
//         </div>

//         {/* Message */}
//         {message && (
//           <p
//             className={`text-center font-semibold ${
//               message.includes("failed") ? "text-red-600" : "text-green-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadItem;
// src/components/UploadItem.js

// import React, { useState } from "react";

// const UploadItem = () => {
//   const [file, setFile] = useState(null);
//   const [itemName, setItemName] = useState("");
//   const [description, setDescription] = useState("");
//   const [isLost, setIsLost] = useState(true); // Default to lost item
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file || !itemName || !description) {
//       setMessage("Please fill out all fields and select a file!");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("itemName", itemName);
//     formData.append("description", description);
//     formData.append("isLost", isLost); // Correctly pass the isLost state

//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/lost-found/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const text = await response.text();
//       setMessage(text);
//     } catch (error) {
//       console.error(error);
//       setMessage("Upload failed!");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-6 rounded-t-lg shadow-lg mb-8">
//         <h1 className="text-4xl font-semibold">Lost and Found Item Upload</h1>
//         <p className="text-xl mt-2">
//           Upload an item you’ve lost or found to help others!
//         </p>
//       </div>

//       {/* Upload Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Upload Item Information
//         </h2>

//         {/* Item Name Input */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Item Description Input */}
//         <div className="mb-6">
//           <textarea
//             placeholder="Item Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Lost / Found Toggle */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between">
//             <label className="text-lg font-medium">Item Status</label>
//             <div>
//               <label className="inline-flex items-center mr-6">
//                 <input
//                   type="radio"
//                   checked={isLost}
//                   onChange={() => setIsLost(true)} // Set as lost
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2 text-lg">Lost</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   checked={!isLost}
//                   onChange={() => setIsLost(false)} // Set as found
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2 text-lg">Found</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* File Upload */}
//         <div className="mb-6">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>

//         {/* Upload Button */}
//         <div className="mb-6">
//           <button
//             onClick={handleUpload}
//             className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//           >
//             Upload Item
//           </button>
//         </div>

//         {/* Message */}
//         {message && (
//           <p
//             className={`text-center font-semibold ${
//               message.includes("failed") ? "text-red-600" : "text-green-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadItem;

import React, { useState } from "react";
import {
  FileText,
  Image,
  Tag,
  Upload,
  Check,
  AlertTriangle,
} from "lucide-react";

const UploadItem = () => {
  const [file, setFile] = useState(null);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [isLost, setIsLost] = useState(true); // Default to lost item
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || !itemName || !description) {
      setMessage("Please fill out all fields and select a file!");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("itemName", itemName);
    formData.append("description", description);
    formData.append("isLost", isLost);

    try {
      const response = await fetch(
        "http://localhost:8080/api/lost-found/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed!");
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
              <Image className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="z-10">
            <h3 className="text-white text-xl font-light">Hi Welcome!!</h3>
            <h2 className="text-white text-4xl font-bold mb-4">Lost & Found</h2>
            <p className="text-white/80">
              Upload an item you've lost or found to help others! Share details
              to increase chances of recovery.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative w-64 h-64 mx-auto mt-6">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Background circle */}
              <circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.1)" />

              {/* Magnifying glass */}
              <circle
                cx="85"
                cy="85"
                r="30"
                fill="rgba(255,255,255,0.2)"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="105"
                y1="105"
                x2="130"
                y2="130"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Lost item - backpack */}
              <rect
                x="65"
                y="130"
                width="30"
                height="40"
                rx="5"
                fill="#ffcba4"
              />
              <rect
                x="75"
                y="125"
                width="10"
                height="5"
                rx="2"
                fill="#d18e54"
              />
              <rect
                x="70"
                y="140"
                width="20"
                height="10"
                rx="2"
                fill="#ffe0c0"
              />

              {/* Keys */}
              <circle cx="120" cy="145" r="5" fill="white" />
              <rect x="125" y="145" width="15" height="3" rx="1" fill="white" />
              <rect x="132" y="148" width="3" height="5" rx="1" fill="white" />
              <rect x="127" y="148" width="3" height="5" rx="1" fill="white" />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-32 h-20 bg-white/5 rounded-tl-full"></div>
          <div className="absolute top-20 right-8 w-20 h-20 bg-white/5 rounded-full"></div>
        </div>

        {/* Right Section with Form */}
        <div className="w-3/5 p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Upload Item</h2>
            <p className="text-gray-500">
              Fill in the details about your lost or found item
            </p>
          </div>

          <div className="space-y-6">
            {/* Message */}
            {message && (
              <div
                className={`p-4 rounded-lg flex items-center ${
                  message.includes("failed")
                    ? "bg-red-50 border border-red-200 text-red-600"
                    : "bg-green-50 border border-green-200 text-green-600"
                }`}
              >
                {message.includes("failed") ? (
                  <AlertTriangle className="mr-3 w-5 h-5" />
                ) : (
                  <Check className="mr-3 w-5 h-5" />
                )}
                {message}
              </div>
            )}

            {/* Item Name Input */}
            <div className="space-y-2 relative">
              <label className="text-gray-600 font-medium">
                Your Item Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="
                    w-full px-4 py-3 
                    bg-gray-100 text-gray-800 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 focus:ring-orange-500
                    transition duration-300
                  "
                />
                {itemName && (
                  <div className="absolute right-3 top-3 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* Item Description Input */}
            <div className="space-y-2 relative">
              <label className="text-gray-600 font-medium">
                Item Description
              </label>
              <div className="relative">
                <textarea
                  placeholder="Item Description"
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
                />
                {description && (
                  <div className="absolute right-3 top-3 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* Lost / Found Toggle */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Item Status</label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`
                    p-3 rounded-lg cursor-pointer 
                    flex items-center justify-center 
                    text-center transition-all duration-300
                    ${
                      isLost
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    checked={isLost}
                    onChange={() => setIsLost(true)}
                    className="hidden"
                  />
                  <span>Lost</span>
                </label>
                <label
                  className={`
                    p-3 rounded-lg cursor-pointer 
                    flex items-center justify-center 
                    text-center transition-all duration-300
                    ${
                      !isLost
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    checked={!isLost}
                    onChange={() => setIsLost(false)}
                    className="hidden"
                  />
                  <span>Found</span>
                </label>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Upload Image</label>
              <div className="relative">
                <div
                  className="
                  w-full px-4 py-3 
                  bg-gray-100 text-gray-800 
                  rounded-lg 
                  focus:outline-none 
                  focus:ring-2 focus:ring-orange-500
                  transition duration-300
                  border-2 border-dashed border-gray-300
                  flex items-center justify-center
                "
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center py-2">
                    <Upload className="h-6 w-6 text-orange-500 mb-2" />
                    <p className="text-sm text-gray-500">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </p>
                  </div>
                </div>
                {file && (
                  <div className="absolute right-3 top-3 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
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
                  Uploading...
                </>
              ) : (
                <>
                  <span>UPLOAD ITEM</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
