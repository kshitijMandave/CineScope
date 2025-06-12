import React, { useEffect, useState } from "react";

function LocationModal({ isOpen, onClose, onSelectCity }) {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch Indian cities
  const fetchCities = async () => {
    try {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country: "India" }),
        }
      );

      const data = await res.json();
      if (data && data.data) {
        setCities(data.data);
      } else {
        setCities([]);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCities();
    }
  }, [isOpen]);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md max-h-[80%] overflow-y-auto p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select Your City</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Cities List */}
        <div className="space-y-2">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <div
                key={index}
                onClick={() => onSelectCity(city)}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded text-gray-800"
              >
                {city}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No cities found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
