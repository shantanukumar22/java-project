// import { useState } from "react";
// import React from "react";
// function UploadQR() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("Please select a file!");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://localhost:8080/api/qr/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const text = await response.text();
//       setMessage(text);
//     } catch (error) {
//       console.error(error);
//       setMessage("Upload failed!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6 gap-4">
//       <h1 className="text-2xl font-bold">Upload QR Code</h1>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setFile(e.target.files[0])}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={handleUpload}
//       >
//         Upload
//       </button>
//       {message && <p className="mt-4">{message}</p>}
//     </div>
//   );
// }

// export default UploadQR;

import { useState } from "react";
import React from "react";
import { Upload, Heart } from "lucide-react";

function UploadQR() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file!");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/qr/upload", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-8 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Share Your Unused Meal</h1>
          <p className="text-lg text-gray-200">
            One upload can prevent waste and feed someone in need. Your small
            action makes a big difference.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto p-6">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mt-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-red-500 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-center">
              Upload Your QR Code
            </h2>
          </div>

          <p className="text-gray-300 mb-6 text-center">
            When you can't use your meal, sharing your QR code allows our staff
            to enjoy a free meal while reducing food waste.
          </p>

          <div
            className={`border-2 border-dashed p-8 rounded-lg mb-6 text-center cursor-pointer transition-colors ${
              isDragging
                ? "border-blue-400 bg-blue-900 bg-opacity-20"
                : "border-gray-600 hover:border-blue-500"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <Upload className="mx-auto text-blue-400 mb-2" size={32} />
            <p className="text-lg mb-2">
              Drag & drop your QR code image here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              {file ? `Selected: ${file.name}` : "Accepts: JPG, PNG, GIF"}
            </p>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
            onClick={handleUpload}
          >
            <Upload className="mr-2" size={18} />
            Share Your QR Code
          </button>

          {message && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                message.includes("failed")
                  ? "bg-red-900 bg-opacity-30 text-red-200"
                  : "bg-green-900 bg-opacity-30 text-green-200"
              }`}
            >
              <p className="text-center">{message}</p>
            </div>
          )}

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm text-center">
              Thank you for reducing food waste and supporting our community.
              Every shared meal makes a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-6 text-center text-gray-500 text-sm">
        <p>Together we can reduce food waste and build a stronger community.</p>
      </div>
    </div>
  );
}

export default UploadQR;
