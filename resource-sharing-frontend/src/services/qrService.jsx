const API_URL = "http://localhost:8080/api/qrs"; // Backend URL

// Function to fetch all QR codes
export const getAllQRCodes = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure authentication
      },
    });

    if (!response.ok) throw new Error("Failed to fetch QR codes");

    return await response.json();
  } catch (error) {
    console.error("Error fetching QR codes:", error);
    return [];
  }
};

// Function to add a new QR code
export const addQRCode = async (qrData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(qrData),
    });

    if (!response.ok) throw new Error("Failed to add QR code");

    return await response.json();
  } catch (error) {
    console.error("Error adding QR code:", error);
    return null;
  }
};

// Function to mark a QR as used
export const markQRAsUsed = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}/use`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) throw new Error("Failed to mark QR as used");
  } catch (error) {
    console.error("Error marking QR as used:", error);
  }
};
