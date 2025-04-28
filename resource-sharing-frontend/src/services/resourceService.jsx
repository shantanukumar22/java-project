const API_URL = "http://localhost:8080/api/resources"; // Backend URL

// Add a new resource
export const addResource = async (resourceData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Authentication token is missing");

    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Adding token in the headers
      },
      body: JSON.stringify(resourceData),
    });

    if (!response.ok) throw new Error("Failed to add resource");

    return response.json();
  } catch (error) {
    console.error("Error during resource addition:", error);
    return { error: "Failed to add resource" };
  }
};

// Get all resources
export const getAllResources = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Authentication token is missing");

    const response = await fetch("http://localhost:8080/api/resources/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Sending token for authentication
      },
    });

    if (!response.ok) throw new Error("Failed to fetch resources");

    return response.json();
  } catch (error) {
    console.error("Error fetching resources:", error);
    return { error: "Failed to fetch resources" };
  }
};

// Get resources by category
export const getResourcesByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/category/${category}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching resources by category:", error);
    return [];
  }
};
