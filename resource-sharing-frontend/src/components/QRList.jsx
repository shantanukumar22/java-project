import React, { useEffect, useState } from "react";
import { getAllQRCodes, markQRAsUsed } from "../services/qrService";

const QRList = () => {
  const [qrs, setQrs] = useState([]);

  useEffect(() => {
    const fetchQRCodes = async () => {
      const data = await getAllQRCodes();
      setQrs(data);
    };
    fetchQRCodes();
  }, []);

  const handleUseQR = async (id) => {
    await markQRAsUsed(id);
    setQrs((prevQrs) =>
      prevQrs.map((qr) => (qr.id === id ? { ...qr, used: true } : qr))
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        QR Code Sharing
      </h2>
      <div>
        {qrs.length === 0 ? (
          <p className="text-center text-gray-500">No QR codes shared.</p>
        ) : (
          <ul className="space-y-6">
            {qrs.map((qr) => (
              <li
                key={qr.id}
                className={`p-4 border rounded-md shadow-md ${
                  qr.used ? "bg-green-300" : "bg-white"
                }`}
              >
                <p className="text-gray-800 text-lg font-semibold">
                  QR Code: {qr.qrCode}
                </p>
                {qr.used ? (
                  <p className="text-green-700 font-bold">✅ Already Used</p>
                ) : (
                  <button
                    onClick={() => handleUseQR(qr.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Use QR
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QRList;
