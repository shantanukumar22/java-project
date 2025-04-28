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

import React, { useState } from "react";

const UploadItem = () => {
  const [file, setFile] = useState(null);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [isLost, setIsLost] = useState(true); // Default to lost item
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !itemName || !description) {
      setMessage("Please fill out all fields and select a file!");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("itemName", itemName);
    formData.append("description", description);
    formData.append("isLost", isLost); // Correctly pass the isLost state

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
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-6 rounded-t-lg shadow-lg mb-8">
        <h1 className="text-4xl font-semibold">Lost and Found Item Upload</h1>
        <p className="text-xl mt-2">
          Upload an item you’ve lost or found to help others!
        </p>
      </div>

      {/* Upload Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload Item Information
        </h2>

        {/* Item Name Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Item Description Input */}
        <div className="mb-6">
          <textarea
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Lost / Found Toggle */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label className="text-lg font-medium">Item Status</label>
            <div>
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  checked={isLost}
                  onChange={() => setIsLost(true)} // Set as lost
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 text-lg">Lost</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!isLost}
                  onChange={() => setIsLost(false)} // Set as found
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 text-lg">Found</span>
              </label>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Upload Button */}
        <div className="mb-6">
          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Upload Item
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            className={`text-center font-semibold ${
              message.includes("failed") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadItem;
