// import React, { useEffect, useState } from "react";

// function ViewQRs() {
//   const [qrs, setQrs] = useState([]);

//   useEffect(() => {
//     fetchQRs();
//   }, []);

//   const fetchQRs = async () => {
//     const res = await fetch("http://localhost:8080/api/qr/all");
//     const data = await res.json();
//     setQrs(data);
//   };

//   const markAsUsed = async (id) => {
//     await fetch(`/api/qr/mark-used/${id}`, { method: "PUT" });
//     fetchQRs(); // Refresh list
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Uploaded QR Codes</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {qrs.map((qr) => (
//           <div key={qr.id} className="border p-4 rounded shadow">
//             <img
//               src={`data:image/png;base64,${btoa(
//                 String.fromCharCode(...new Uint8Array(qr.qrImage))
//               )}`}
//               alt="QR Code"
//               className="w-full h-40 object-contain mb-2"
//             />
//             <p>Status: {qr.used ? "✅ Used" : "❌ Not Used"}</p>
//             {!qr.used && (
//               <button
//                 className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                 onClick={() => markAsUsed(qr.id)}
//               >
//                 Mark as Used
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ViewQRs;
// import React, { useEffect, useState } from "react";
// import { Check, X, RefreshCcw, QrCode } from "lucide-react";

// function ViewQRs() {
//   const [qrs, setQrs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchQRs();
//   }, []);

//   const fetchQRs = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:8080/api/qr/all");
//       const data = await res.json();
//       setQrs(data);
//       setError(null);
//     } catch (err) {
//       setError("Failed to load QR codes. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsUsed = async (id) => {
//     try {
//       await fetch(`http://localhost:8080/api/qr/mark-used/${id}`, {
//         method: "PUT",
//       });
//       fetchQRs(); // Refresh list
//     } catch (err) {
//       setError("Failed to update QR code status.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-8 px-6 shadow-lg">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-2">Available Shared Meals</h1>
//           <p className="text-lg text-gray-200">
//             These QR codes represent meals that can be claimed by our staff.
//             Each code is a gesture of generosity that prevents food waste.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <QrCode className="text-blue-400 mr-2" size={24} />
//             <h2 className="text-2xl font-bold">Shared QR Codes</h2>
//           </div>

//           <button
//             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             onClick={fetchQRs}
//           >
//             <RefreshCcw className="mr-2" size={16} />
//             Refresh List
//           </button>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : error ? (
//           <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg text-center">
//             {error}
//           </div>
//         ) : qrs.length === 0 ? (
//           <div className="bg-gray-800 p-8 rounded-lg text-center">
//             <p className="text-gray-300 text-lg">
//               No QR codes have been shared yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {qrs.map((qr) => (
//               <div
//                 key={qr.id}
//                 className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 transition-transform hover:scale-105"
//               >
//                 <div className="p-4 bg-gray-700">
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">QR Code #{qr.id}</span>
//                     <span
//                       className={`flex items-center px-3 py-1 rounded-full text-sm ${
//                         qr.used
//                           ? "bg-green-900 bg-opacity-30 text-green-200"
//                           : "bg-blue-900 bg-opacity-30 text-blue-200"
//                       }`}
//                     >
//                       {qr.used ? (
//                         <>
//                           <Check size={14} className="mr-1" />
//                           Used
//                         </>
//                       ) : (
//                         <>
//                           <X size={14} className="mr-1" />
//                           Available
//                         </>
//                       )}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-4 flex justify-center bg-white">
//                   <img
//                     src={`data:image/png;base64,${qr.qrImage}`}
//                     alt="QR Code"
//                     className="h-48 object-contain"
//                   />
//                 </div>

//                 <div className="p-4">
//                   <p className="text-gray-300 mb-4">
//                     This QR code represents a meal that can be claimed by staff.
//                     Thank you for reducing food waste!
//                   </p>

//                   {!qr.used ? (
//                     <button
//                       className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
//                       onClick={() => markAsUsed(qr.id)}
//                     >
//                       <Check className="mr-2" size={16} />
//                       Mark as Claimed
//                     </button>
//                   ) : (
//                     <div className="text-center text-gray-400 text-sm mt-2">
//                       This meal has already been claimed and enjoyed.
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-8 bg-gray-800 p-6 rounded-lg">
//           <h3 className="text-xl font-medium mb-4 text-center">
//             About This Initiative
//           </h3>
//           <p className="text-gray-300 mb-4">
//             Our shared meal program helps reduce food waste while ensuring staff
//             members can enjoy free meals when they're available. Each QR code
//             represents a meal that would otherwise go to waste.
//           </p>
//           <p className="text-gray-300">
//             When you claim a meal, please mark it as used in the system so
//             others know it's no longer available.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 p-6 text-center text-gray-500 text-sm">
//         <p>
//           Thank you for participating in our food waste reduction initiative.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ViewQRs;

import React, { useEffect, useState } from "react";
import { Check, X, RefreshCcw, QrCode, Info, Filter } from "lucide-react";

function ViewQRs() {
  const [qrs, setQrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // all | claimed | unclaimed

  useEffect(() => {
    fetchQRs();
  }, []);

  const fetchQRs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/qr/all");
      const data = await res.json();
      setQrs(data);
      setError(null);
    } catch (err) {
      setError("Failed to load QR codes. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const markAsUsed = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/qr/mark-used/${id}`, {
        method: "PUT",
      });
      fetchQRs();
    } catch (err) {
      setError("Failed to update QR code status.");
      console.error(err);
    }
  };

  const filteredQrs = qrs.filter((qr) => {
    if (filter === "claimed") return qr.used;
    if (filter === "unclaimed") return !qr.used;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 py-8 px-6 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <QrCode className="mr-3" size={28} />
            Shared Meal QR Codes
          </h1>
          <div className="mt-12 bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center">
              <Info className="mr-2" size={20} />
              About This Initiative
            </h3>
            <p className="text-gray-300 mb-4">
              Our meal-sharing initiative prevents food wastage and supports
              community welfare. Every QR code represents a meal that would
              otherwise be wasted.
            </p>
            <p className="text-gray-300">
              Please mark the meal as claimed after using the QR, so others can
              see availability in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-orange-400 flex items-center">
            <QrCode className="mr-2" size={24} />
            QR Codes
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-orange-400" />
              <select
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="unclaimed">Available</option>
                <option value="claimed">Claimed</option>
              </select>
            </div>

            <button
              onClick={fetchQRs}
              className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg"
            >
              <RefreshCcw className="mr-2" size={18} />
              Refresh
            </button>
          </div>
        </div>

        {/* QR List */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg text-center border border-red-700">
            {error}
          </div>
        ) : filteredQrs.length === 0 ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
            <p className="text-gray-400 text-lg">
              No QR codes found for this filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQrs.map((qr) => (
              <div
                key={qr.id}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all"
              >
                {/* Top Info */}
                <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-orange-300">
                      ID #{qr.id}
                    </span>
                    <span
                      className={`flex items-center px-3 py-1 rounded-full text-sm ${
                        qr.used
                          ? "bg-green-900 bg-opacity-40 text-green-300 border border-green-600"
                          : "bg-orange-900 bg-opacity-40 text-orange-300 border border-orange-500"
                      }`}
                    >
                      {qr.used ? (
                        <>
                          <Check size={14} className="mr-1" />
                          Claimed
                        </>
                      ) : (
                        <>
                          <X size={14} className="mr-1" />
                          Available
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* QR Image */}
                <div className="p-6 bg-white flex justify-center items-center">
                  <img
                    src={`data:image/png;base64,${qr.qrImage}`}
                    alt="QR Code"
                    className="h-48 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-5">
                  <p className="text-gray-300 mb-5 text-sm">
                    Scan this QR to claim a meal. Help prevent food waste!
                  </p>

                  {!qr.used ? (
                    <button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-colors shadow-lg flex justify-center items-center"
                      onClick={() => markAsUsed(qr.id)}
                    >
                      <Check className="mr-2" size={16} />
                      Mark as Claimed
                    </button>
                  ) : (
                    <div className="text-center text-gray-400 text-sm p-2 bg-gray-900 rounded-lg border border-gray-700">
                      Already Claimed
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* About Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500 shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center">
            <Info className="mr-2" size={20} />
            About This Initiative
          </h3>
          <p className="text-gray-300 mb-4">
            Our meal-sharing initiative prevents food wastage and supports
            community welfare. Every QR code represents a meal that would
            otherwise be wasted.
          </p>
          <p className="text-gray-300">
            Please mark the meal as claimed after using the QR, so others can
            see availability in real-time.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 p-6 text-center text-gray-500 text-sm border-t border-gray-800">
        Thank you for helping us reduce food waste.
      </div>
    </div>
  );
}

export default ViewQRs;
