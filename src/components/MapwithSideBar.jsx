import React, { useState } from "react";
import listingsData from "../Data/listings";
import MapView from "./MapView";
import FilterBar from "./FilterBar";

const MapWithSidebar = () => {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [bathsFilter, setBathsFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(20);

  const handleCardClick = (listing) => {
    setSelected(listing);
  };

  const filteredListings = listingsData
    .filter((listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((listing) => {
      if (priceFilter === "low") return listing.price < 2000;
      if (priceFilter === "mid") return listing.price >= 2000 && listing.price <= 4000;
      if (priceFilter === "high") return listing.price > 4000;
      return true;
    })
    .filter((listing) => {
      if (bedsFilter === "1") return listing.beds === 1;
      if (bedsFilter === "2") return listing.beds === 2;
      if (bedsFilter === "3") return listing.beds === 3;
      if (bedsFilter === "4+") return listing.beds >= 4;
      return true;
    })
    .filter((listing) => {
      if (bathsFilter === "1") return listing.baths === 1;
      if (bathsFilter === "2") return listing.baths === 2;
      if (bathsFilter === "3+") return listing.baths >= 3;
      return true;
    });

  const visibleListings = filteredListings.slice(0, visibleCount);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* --- Large Screens Sidebar --- */}
      <div className="hidden lg:flex flex-col w-[450px] h-screen overflow-y-auto border-r">
        <div className="sticky top-0 bg-white z-20 border-b border-blue-600">
          <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="sticky top-[72px] z-10 bg-white p-3 shadow border-b">
          <div className="flex flex-wrap gap-2">
            <select
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Prices</option>
              <option value="low">Below $2000</option>
              <option value="mid">$2000 - $4000</option>
              <option value="high">Over $4000</option>
            </select>

            <select
              value={bedsFilter}
              onChange={(e) => {
                setBedsFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4+">4+ Beds</option>
            </select>

            <select
              value={bathsFilter}
              onChange={(e) => {
                setBathsFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Baths</option>
              <option value="1">1 Bath</option>
              <option value="2">2 Baths</option>
              <option value="3+">3+ Baths</option>
            </select>
          </div>
        </div>

        <div className="p-3">
          <div className="grid grid-cols-1 gap-3">
            {visibleListings.map((listing) => (
              <div
                key={listing.id}
                onClick={() => handleCardClick(listing)}
                className={`bg-white rounded shadow cursor-pointer hover:shadow-md transition overflow-hidden ${
                  selected?.id === listing.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h2 className="font-semibold text-sm">{listing.title}</h2>
                  <p className="text-gray-500 text-xs">{listing.address}</p>
                  <p className="text-blue-600 font-bold text-sm">
                    ${listing.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More */}
          {visibleCount < filteredListings.length && (
            <div className="text-center py-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                onClick={() => setVisibleCount((prev) => prev + 20)}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- Mobile/Tablet Full Width Cards --- */}
      <div className="block lg:hidden w-full px-4">
        <div className="py-4 border-b border-blue-600">
          <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* 🔄 Sticky Filters for small screens */}
        <div className="sticky top-0 z-10 bg-white py-3 px-2 shadow">
          <div className="flex flex-wrap gap-2">
            <select
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Prices</option>
              <option value="low">Below $2000</option>
              <option value="mid">$2000 - $4000</option>
              <option value="high">Over $4000</option>
            </select>

            <select
              value={bedsFilter}
              onChange={(e) => {
                setBedsFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4+">4+ Beds</option>
            </select>

            <select
              value={bathsFilter}
              onChange={(e) => {
                setBathsFilter(e.target.value);
                setVisibleCount(20);
              }}
              className="border text-blue-600 border-blue-600 p-1 rounded text-sm"
            >
              <option value="all">All Baths</option>
              <option value="1">1 Bath</option>
              <option value="2">2 Baths</option>
              <option value="3+">3+ Baths</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          {visibleListings.map((listing) => (
            <div
              key={listing.id}
              onClick={() => handleCardClick(listing)}
              className={`bg-white rounded shadow cursor-pointer hover:shadow-md transition overflow-hidden ${
                selected?.id === listing.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h2 className="font-semibold text-sm">{listing.title}</h2>
                <p className="text-gray-500 text-xs">{listing.address}</p>
                <p className="text-blue-600 font-bold text-sm">
                  ${listing.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {visibleCount < filteredListings.length && (
          <div className="text-center py-6">
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              onClick={() => setVisibleCount((prev) => prev + 20)}
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Map View on Large Screens */}
      <div className="hidden lg:block flex-1 h-screen sticky top-0">
        <MapView selectedListing={selected} />
      </div>
    </div>
  );
};

export default MapWithSidebar;
