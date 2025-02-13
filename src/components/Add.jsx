import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    vehicle_type: "6-Wheeler Truck",
    last_maintenance_date: "",
    fuel_level: "",
    running_distance: "",
    tyre_pressure: {},
  });

  // Function to update vehicle details
  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  // Function to update tyre pressure
  const handleTyrePressureChange = (e) => {
    setVehicle({
      ...vehicle,
      tyre_pressure: {
        ...vehicle.tyre_pressure,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Function to get tyre structure based on type
  const getTyreInputs = () => {
    return vehicle.vehicle_type.startsWith("6")
      ? [
          "front_left",
          "front_right",
          "middle_left",
          "middle_right",
          "rear_left",
          "rear_right",
        ]
      : [
          "front_left",
          "front_right",
          "middle_left_1",
          "middle_right_1",
          "middle_left_2",
          "middle_right_2",
          "rear_left",
          "rear_right",
        ];
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Vehicle:", vehicle);
    alert("Vehicle added successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Add New Truck
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Type */}
          <div>
            <label className="block font-medium">Vehicle Type</label>
            <select
              name="vehicle_type"
              value={vehicle.vehicle_type}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option>6-Wheeler Truck</option>
              <option>8-Wheeler Truck</option>
            </select>
          </div>

          {/* Last Maintenance Date */}
          <div>
            <label className="block font-medium">Last Maintenance Date</label>
            <input
              type="date"
              name="last_maintenance_date"
              value={vehicle.last_maintenance_date}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Fuel Level */}
          <div>
            <label className="block font-medium">Fuel Level (%)</label>
            <input
              type="number"
              name="fuel_level"
              value={vehicle.fuel_level}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              min="0"
              max="100"
              required
            />
          </div>

          {/* Running Distance */}
          <div>
            <label className="block font-medium">Running Distance (km)</label>
            <input
              type="number"
              name="running_distance"
              value={vehicle.running_distance}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              min="0"
              required
            />
          </div>

          {/* Tyre Pressure */}
          <div>
            <label className="block font-medium">Tyre Pressure (PSI)</label>
            <div className="grid grid-cols-2 gap-2">
              {getTyreInputs().map((tyre) => (
                <input
                  key={tyre}
                  type="number"
                  name={tyre}
                  value={vehicle.tyre_pressure[tyre] || ""}
                  onChange={handleTyrePressureChange}
                  placeholder={tyre.replace("_", " ").toUpperCase()}
                  className="p-2 border rounded-md"
                  min="30"
                  max="50"
                  required
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
