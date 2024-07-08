import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './OurBranches.css';
import L from 'leaflet';

// Fix default icon issue with Webpack
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const branches = [
  {
    city: 'Pune',
    address: '1st Floor,101, Police Wireless Colony, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune',
    position: [18.586392186498944, 73.78140166973165],
    mapLink: 'https://maps.app.goo.gl/ntqgJmX5nYwLmwbH6',
  },
  {
    city: 'Mumbai',
    address: 'Office No. 806, 8th Floor, Paradise Tower, next to MCDonalds, Naupada, Thane West, Mumbai, Thane, Maharashtra 400601',
    position: [19.1877496131839, 72.97525703071106],
    mapLink: 'https://maps.app.goo.gl/nDrfHe75HqZ4dKXU9',
  },
  {
    city: 'Raipur',
    address: 'G-54, New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001',
    position: [21.237314571201736, 81.6539475802003],
    mapLink: 'https://maps.app.goo.gl/vJucPySnJxGsMpe59',
  }
];

const Branches = () => {
  return (
    <div className="branches-section">
      <h2 className="branches-title">Our Branches</h2>
      <div className="branches-container">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <MapContainer center={branch.position} zoom={13} scrollWheelZoom={true} className="map-container">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={branch.position}>
                <Popup>
                  <b>{branch.city}</b><br />
                  <a href={branch.mapLink} target="_blank" rel="noopener noreferrer">
                    {branch.address}
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
            <h3>{branch.city}</h3>
            <a href={branch.mapLink} target="_blank" rel="noopener noreferrer">
              {branch.address}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
