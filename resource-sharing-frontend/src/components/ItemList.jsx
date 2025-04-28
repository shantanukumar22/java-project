import React, { useEffect, useState } from "react";
import {
  Search,
  AlertCircle,
  CheckCircle,
  Trash2,
  Camera,
  MapPin,
  Calendar,
  User,
} from "lucide-react";

const API_URL = "http://localhost:8080/api/lost-found/all";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
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
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
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

      setItems(
        items.map((item) =>
          item.id === id ? { ...item, found: true, isLost: false } : item
        )
      );

      showToast("Success", text);
    } catch (error) {
      showToast("Error", "Error marking item as found: " + error.message);
      console.error("Error marking item as found:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
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
      showToast("Success", "Item deleted successfully");
    } catch (error) {
      showToast("Error", "Error deleting item: " + error.message);
      console.error("Error deleting item:", error);
    }
  };

  const showToast = (type, message) => {
    console.log(`${type}: ${message}`);
    alert(message);
  };

  const convertBase64Image = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === "all") return matchesSearch;
    if (filter === "lost") return matchesSearch && !item.found;
    if (filter === "found") return matchesSearch && item.found;

    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Lost and Found Items
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Box */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 text-white rounded-xl focus:outline-none 
                             focus:ring-2 focus:ring-orange-300/50 placeholder-gray-300 border border-white/10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-200" />
              </div>

              {/* Filter Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 font-medium
                    ${
                      filter === "all"
                        ? "bg-white text-orange-600 shadow-lg"
                        : "bg-black/30 text-white hover:bg-black/40 border border-white/10"
                    }`}
                >
                  All Items
                </button>
                <button
                  onClick={() => setFilter("lost")}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 font-medium
                    ${
                      filter === "lost"
                        ? "bg-white text-orange-600 shadow-lg"
                        : "bg-black/30 text-white hover:bg-black/40 border border-white/10"
                    }`}
                >
                  Lost
                </button>
                <button
                  onClick={() => setFilter("found")}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 font-medium
                    ${
                      filter === "found"
                        ? "bg-white text-orange-600 shadow-lg"
                        : "bg-black/30 text-white hover:bg-black/40 border border-white/10"
                    }`}
                >
                  Found
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center">
              <AlertCircle className="text-red-500 mr-3" />
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
              <Camera className="w-16 h-16 mx-auto text-orange-400/70 mb-4" />
              <p className="text-gray-300 text-xl">No items found</p>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700
                          shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Image with Status Badge */}
                <div className="relative">
                  <img
                    src={convertBase64Image(item.itemImage)}
                    alt={item.itemName}
                    className="w-full h-48 object-cover transition-all hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-bold 
                                  ${
                                    item.found
                                      ? "bg-green-500"
                                      : "bg-orange-500"
                                  } text-white`}
                  >
                    {item.found ? "Found" : "Lost"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.itemName}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Item Details */}
                  <div className="space-y-2 mb-4">
                    {item.location && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                        <span>{item.location || "Location unknown"}</span>
                      </div>
                    )}

                    {item.date && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    )}

                    {item.reportedBy && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-2 text-orange-400" />
                        <span>Reported by {item.reportedBy}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex mt-4 justify-between gap-2">
                    {!item.found ? (
                      <button
                        onClick={() => handleMarkAsFound(item.id)}
                        className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md 
                                  hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Mark as Found</span>
                      </button>
                    ) : (
                      <div
                        className="flex-1 bg-green-500/20 text-green-400 py-2 px-4 rounded-lg 
                                    flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Found</span>
                      </div>
                    )}

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md 
                                hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
