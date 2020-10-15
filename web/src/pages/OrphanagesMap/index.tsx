import React from 'react';

import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import mapMarkerImg from '../../assets/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import '../../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconAnchor: [58 / 2, 68],
  iconSize: [58, 68],

  popupAnchor: [170, 2]
});

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Choose an orphanage on the map</h2>
          <p>Many children are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>Spot of Spotz</strong>
          <span>Streetz of the nightz</span>
        </footer>
      </aside>

      <Map
        center={[41.0056545, -8.6421842]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker position={[41.0056545, -8.6421842]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Orphanage
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
