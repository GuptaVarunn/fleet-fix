import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehicleData from "./data.json"; // Importing vehicle data

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filtering only 6-Wheeler & 8-Wheeler vehicles
  const filteredVehicles = vehicleData
    .filter((vehicle) => vehicle.vehicle_type.match(/^(6|8)-Wheeler/))
    .filter((vehicle) =>
      vehicle.vehicle_type.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">FleetFix</h1>
        </div>
        <div className="flex">
          <button
            onDoubleClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="bg-red-600 text-white p-2 items-center rounded-xl"
          >
            Logout
          </button>
          <img
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </nav>

      {/* Home Page Content */}
      <div className="container mx-auto mt-6 p-4">
        {/* Search & Add Vehicle */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="p-2 border rounded-md w-2/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/newvehicle")}
          >
            Add Vehicle
          </button>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={vehicle.image} // Ensure each vehicle object has an 'image' key with a valid URL
                alt="Truck"
                className="w-64 h-48 object-cover rounded-md mb-3"
              />

              <h2 className="text-xl font-semibold">{vehicle.vehicle_type}</h2>
              <p className="text-gray-600">
                <strong>Last Maintenance:</strong>{" "}
                {vehicle.last_maintenance_date}
              </p>
              <p className="text-gray-600">
                <strong>Fuel Level:</strong> {vehicle.fuel_level}%
              </p>
              <p className="text-gray-600">
                <strong>Running Distance:</strong> {vehicle.running_distance} km
              </p>
              <p className="text-gray-600">
                <strong>Tyre Pressure:</strong>{" "}
                {Object.values(vehicle.tyre_pressure).join(", ")} PSI
              </p>
            </div>
          ))}
        </div>

        {/* No Results Found */}
        {filteredVehicles.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No matching vehicles found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
