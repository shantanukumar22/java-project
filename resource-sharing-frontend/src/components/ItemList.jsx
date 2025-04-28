import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/lost-found/all";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized access or failed request.");
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [token]);

  const handleMarkAsFound = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/lost-found/mark-found/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to mark item as found.");
      }

      const text = await response.text();
      alert(text);

      // Update the item found status correctly
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, found: true, isLost: false } : item
        )
      );
    } catch (error) {
      alert("Error marking item as found: " + error.message);
      console.error("Error marking item as found:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/lost-found/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item.");
      }

      setItems(items.filter((item) => item.id !== id));
      alert("Item deleted successfully");
    } catch (error) {
      alert("Error deleting item: " + error.message);
      console.error("Error deleting item:", error);
    }
  };

  const convertBase64Image = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Lost and Found Items
      </h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <img
              src={convertBase64Image(item.itemImage)}
              alt={item.itemName}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all hover:opacity-90"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {item.itemName}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>

            <div
              className={`mt-2 font-medium ${
                item.found ? "text-green-500" : "text-red-500"
              }`}
            >
              {/* {item.found ? "Found" : "Lost"} */}
              Lost and Found
            </div>

            <div className="flex mt-4 justify-between">
              {!item.found && (
                <button
                  onClick={() => handleMarkAsFound(item.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-all"
                >
                  Mark as Found
                </button>
              )}
              {item.found && (
                <p className="text-green-600 font-medium">
                  Item Marked as Found
                </p>
              )}

              <button
                onClick={() => handleDeleteItem(item.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
