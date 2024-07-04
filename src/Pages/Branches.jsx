import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon setup (optional)
const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -38]
});

const branches = [
  {
    name: "PUNE",
    address: "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    position: [18.563, 73.807], // Latitude and Longitude for Pune
  },
  {
    name: "MUMBAI",
    address: "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    position: [19.076, 72.8777], // Latitude and Longitude for Mumbai
  },
  {
    name: "RAIPUR",
    address: "1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune",
    position: [21.2514, 81.6296], // Latitude and Longitude for Raipur
  },
];

const cardClasses = "bg-card p-6 rounded-xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-[90%] hover:scale-105 transform transition-all duration-300 ease-in-out";
const textClasses = "text-2xl font-bold text-white mb-2";
const textMutedClasses = "text-lg text-gray-200";

const Branches = () => {
  const handleMapClick = (position) => {
    const [lat, lng] = position;
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center py-12 w-[90%] mx-auto">
      <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-12">
        OUR BRANCHES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {branches.map((branch) => (
          <div key={branch.name} className={cardClasses}>
            <MapContainer
              center={branch.position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "200px", width: "100%", borderRadius: "12px", marginBottom: "16px" }}
              onClick={() => handleMapClick(branch.position)}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={branch.position} icon={customIcon}>
                <Popup>
                  <b>{branch.name}</b><br/>{branch.address}
                </Popup>
              </Marker>
            </MapContainer>
            <h3 className={textClasses}>{branch.name}</h3>
            <p className={textMutedClasses}>{branch.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
