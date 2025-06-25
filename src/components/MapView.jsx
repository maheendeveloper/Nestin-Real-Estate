import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import listings from "../Data/listings";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 39.8283,
  lng: -98.5795, 
};

const MapView = ({ selectedListing }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selected, setSelected] = useState(selectedListing);
  const mapRef = useRef(null);

  useEffect(() => {
    setSelected(selectedListing);
    if (selectedListing && mapRef.current) {
      mapRef.current.panTo({
        lat: selectedListing.lat,
        lng: selectedListing.lng,
      });
      mapRef.current.setZoom(13);
    }
  }, [selectedListing]);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    listings.forEach((listing) =>
      bounds.extend({ lat: listing.lat, lng: listing.lng })
    );
    map.fitBounds(bounds);
  }, []);

  if (!isLoaded)
    return <div className="text-center p-10">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      defaultCenter={defaultCenter}
      defaultZoom={4}
    >
      {listings.map((item) => (
        <MarkerF
          key={item.id}
          position={{ lat: item.lat, lng: item.lng }}
          onClick={() => setSelected(item)}
        />
      ))}

      {selected && (
        <InfoWindowF
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div className="p-2 max-w-[250px]">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-24 object-cover mb-2 rounded"
            />
            <h2 className="font-bold text-sm">{selected.title}</h2>
            <p className="text-gray-500 text-xs">{selected.address}</p>
            <p className="text-blue-600 font-semibold text-sm">
              ${selected.price.toLocaleString()}
            </p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapView;
