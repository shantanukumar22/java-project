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

// import { useState } from "react";
// import React from "react";
// import { Upload, Heart } from "lucide-react";

// function UploadQR() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isDragging, setIsDragging] = useState(false);

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

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setFile(e.dataTransfer.files[0]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-8 px-6 shadow-lg">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-2">Share Your Unused Meal</h1>
//           <p className="text-lg text-gray-200">
//             One upload can prevent waste and feed someone in need. Your small
//             action makes a big difference.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-xl mx-auto p-6">
//         <div className="bg-gray-800 rounded-lg shadow-xl p-8 mt-8">
//           <div className="flex items-center justify-center mb-6">
//             <Heart className="text-red-500 mr-2" size={24} />
//             <h2 className="text-2xl font-bold text-center">
//               Upload Your QR Code
//             </h2>
//           </div>

//           <p className="text-gray-300 mb-6 text-center">
//             When you can't use your meal, sharing your QR code allows our staff
//             to enjoy a free meal while reducing food waste.
//           </p>

//           <div
//             className={`border-2 border-dashed p-8 rounded-lg mb-6 text-center cursor-pointer transition-colors ${
//               isDragging
//                 ? "border-blue-400 bg-blue-900 bg-opacity-20"
//                 : "border-gray-600 hover:border-blue-500"
//             }`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//             onClick={() => document.getElementById("fileInput").click()}
//           >
//             <Upload className="mx-auto text-blue-400 mb-2" size={32} />
//             <p className="text-lg mb-2">
//               Drag & drop your QR code image here or click to browse
//             </p>
//             <p className="text-sm text-gray-400">
//               {file ? `Selected: ${file.name}` : "Accepts: JPG, PNG, GIF"}
//             </p>
//             <input
//               id="fileInput"
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="hidden"
//             />
//           </div>

//           <button
//             className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
//             onClick={handleUpload}
//           >
//             <Upload className="mr-2" size={18} />
//             Share Your QR Code
//           </button>

//           {message && (
//             <div
//               className={`mt-6 p-4 rounded-lg ${
//                 message.includes("failed")
//                   ? "bg-red-900 bg-opacity-30 text-red-200"
//                   : "bg-green-900 bg-opacity-30 text-green-200"
//               }`}
//             >
//               <p className="text-center">{message}</p>
//             </div>
//           )}

//           <div className="mt-8 border-t border-gray-700 pt-6">
//             <p className="text-gray-400 text-sm text-center">
//               Thank you for reducing food waste and supporting our community.
//               Every shared meal makes a difference.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 p-6 text-center text-gray-500 text-sm">
//         <p>Together we can reduce food waste and build a stronger community.</p>
//       </div>
//     </div>
//   );
// }

// export default UploadQR;

import { useState } from "react";
import React from "react";
import {
  Upload,
  Heart,
  CheckCircle,
  XCircle,
  ArrowRight,
  Image,
} from "lucide-react";

function UploadQR() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/qr/upload", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      setMessage(text);

      if (response.ok) {
        setUploadedFiles([
          ...uploadedFiles,
          {
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type,
            success: true,
          },
        ]);
        setFile(null);
      }
    } catch (error) {
      console.error(error);
      setMessage("Upload failed!");
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
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
    <div className="min-h-screen bg-slate-900 text-gray-800">
      {/* App-like header */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-xl shadow-xl text-center mb-10 border-l-4 border-orange-500">
        <h1 className="text-5xl font-extrabold text-white mb-3">
          All Requests
        </h1>
        <p className="text-white text-lg">
          Maybe someone is at need! show your generosity and help them
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-xl mx-auto p-2">
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">UPLOAD QR CODE</h2>
            <p className="text-gray-500">
              When you can't use your meal, sharing your QR code allows staff to
              enjoy a free meal while reducing food waste.
            </p>
          </div>

          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-10 transition-all ${
              isDragging
                ? "border-orange-400 bg-orange-50"
                : "border-gray-200 hover:border-orange-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="bg-orange-50 p-4 rounded-full mb-4">
                <Image className="text-orange-500" size={32} />
              </div>
              <p className="text-lg font-medium mb-2">Drop your QR code here</p>
              <p className="text-sm text-gray-400 mb-3">or</p>
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("fileInput").click();
                }}
              >
                Browse
              </button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
              {file && (
                <div className="mt-4 text-sm text-gray-600">
                  Selected: {file.name}
                </div>
              )}
            </div>
          </div>

          {/* File List */}
          {(file || uploadedFiles.length > 0) && (
            <div className="mt-6 border border-gray-100 rounded-lg bg-gray-50">
              <div className="p-4 border-b border-gray-100 flex justify-between">
                <span className="font-medium">Files</span>
                <span className="text-sm text-gray-500">
                  {uploadedFiles.length + (file ? 1 : 0)} items
                </span>
              </div>

              {file && (
                <div className="p-4 flex items-center justify-between border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded mr-3">
                      <Image size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setFile(null)}
                  >
                    <XCircle size={18} />
                  </button>
                </div>
              )}

              {uploadedFiles.map((uploadedFile, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center justify-between border-b border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded mr-3">
                      <CheckCircle size={16} className="text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium">{uploadedFile.name}</div>
                      <div className="text-xs text-gray-500">
                        {uploadedFile.size}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <CheckCircle size={18} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload Button */}
          <button
            className={`mt-6 w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center ${
              !file ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleUpload}
            disabled={!file || isUploading}
          >
            {isUploading ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2" size={18} />
                Share Your QR Code
              </>
            )}
          </button>

          {/* Message */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                message.includes("failed")
                  ? "bg-red-50 text-red-600 border border-red-100"
                  : "bg-green-50 text-green-600 border border-green-100"
              }`}
            >
              <p className="text-center">{message}</p>
            </div>
          )}

          {/* Impact Message */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center mb-3">
              <Heart className="text-orange-500 mr-2" size={20} />
              <span className="font-medium">Make an Impact</span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              Thank you for reducing food waste and supporting our community.
              Every shared meal makes a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadQR;
