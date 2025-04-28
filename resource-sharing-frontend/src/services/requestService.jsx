const API_URL = "http://localhost:8080/api/requests"; // Backend URL

// Function to create a new request
export const createRequest = async (requestData) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to create request");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating request:", error);
    return null;
  }
};

// fullfilled
// export const fulfillRequest = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}/${id}/fulfill`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fulfill request");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fulfilling request:", error);
//     return { error: "Failed to fulfill request" };
//   }
// };

export const fulfillRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}/fulfill`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is included
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fulfill request");
    }

    // Check if response is JSON, otherwise handle text response
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return { message: await response.text() }; // Handle non-JSON responses
    }
  } catch (error) {
    console.error("Error fulfilling request:", error);
    return { error: "Failed to fulfill request" };
  }
};
// Fetch all requests
export const getAllRequests = async () => {
  try {
    const response = await fetch(`${API_URL}/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure JWT is included
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch requests");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching requests:", error);
    return [];
  }
};
