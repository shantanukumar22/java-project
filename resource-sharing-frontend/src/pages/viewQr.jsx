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
import React, { useEffect, useState } from "react";
import { Check, X, RefreshCcw, QrCode } from "lucide-react";

function ViewQRs() {
  const [qrs, setQrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      fetchQRs(); // Refresh list
    } catch (err) {
      setError("Failed to update QR code status.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-8 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Available Shared Meals</h1>
          <p className="text-lg text-gray-200">
            These QR codes represent meals that can be claimed by our staff.
            Each code is a gesture of generosity that prevents food waste.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <QrCode className="text-blue-400 mr-2" size={24} />
            <h2 className="text-2xl font-bold">Shared QR Codes</h2>
          </div>

          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={fetchQRs}
          >
            <RefreshCcw className="mr-2" size={16} />
            Refresh List
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : qrs.length === 0 ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-gray-300 text-lg">
              No QR codes have been shared yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qrs.map((qr) => (
              <div
                key={qr.id}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 transition-transform hover:scale-105"
              >
                <div className="p-4 bg-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">QR Code #{qr.id}</span>
                    <span
                      className={`flex items-center px-3 py-1 rounded-full text-sm ${
                        qr.used
                          ? "bg-green-900 bg-opacity-30 text-green-200"
                          : "bg-blue-900 bg-opacity-30 text-blue-200"
                      }`}
                    >
                      {qr.used ? (
                        <>
                          <Check size={14} className="mr-1" />
                          Used
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

                <div className="p-4 flex justify-center bg-white">
                  <img
                    src={`data:image/png;base64,${qr.qrImage}`}
                    alt="QR Code"
                    className="h-48 object-contain"
                  />
                </div>

                <div className="p-4">
                  <p className="text-gray-300 mb-4">
                    This QR code represents a meal that can be claimed by staff.
                    Thank you for reducing food waste!
                  </p>

                  {!qr.used ? (
                    <button
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                      onClick={() => markAsUsed(qr.id)}
                    >
                      <Check className="mr-2" size={16} />
                      Mark as Claimed
                    </button>
                  ) : (
                    <div className="text-center text-gray-400 text-sm mt-2">
                      This meal has already been claimed and enjoyed.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4 text-center">
            About This Initiative
          </h3>
          <p className="text-gray-300 mb-4">
            Our shared meal program helps reduce food waste while ensuring staff
            members can enjoy free meals when they're available. Each QR code
            represents a meal that would otherwise go to waste.
          </p>
          <p className="text-gray-300">
            When you claim a meal, please mark it as used in the system so
            others know it's no longer available.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-6 text-center text-gray-500 text-sm">
        <p>
          Thank you for participating in our food waste reduction initiative.
        </p>
      </div>
    </div>
  );
}

export default ViewQRs;
