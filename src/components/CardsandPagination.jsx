import React, { useState } from "react";
import { Link } from "react-router-dom";
import agentsData from "./agentsData";

const CardsandPagination = ({ activeTab, searchInput }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const cardsPerPage = 6;


  const filteredAgents = agentsData.filter((agent) => {
    const term = searchInput.toLowerCase();
    if (activeTab === "location") {
      return agent.location.toLowerCase().includes(term);
    } else {
      return agent.name.toLowerCase().includes(term);
    }
  });

  const totalPages = Math.ceil(filteredAgents.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;

  const visibleAgents = showAll
    ? filteredAgents
    : filteredAgents.slice(startIndex, startIndex + cardsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 py-10">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleAgents.map((agent, index) => (
          <Link
          to={`/agent/${encodeURIComponent(agent.name)}`}
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden flex h-48 sm:h-56 hover:shadow-2xl transition"
          >
           
            <img
              src={agent.image}
              alt={agent.name}
              className="w-40 sm:w-52 h-full rounded-l-2xl object-cover "
            />

            
            <div className="p-5 flex flex-col justify-center flex-1">
              <h2 className="text-2xl font-bold mb-3">{agent.name}</h2>
              <p className="text-gray-500 text-base font-semibold">{agent.company}</p>
              <p className="text-gray-600 text-sm font-semibold">{agent.location}</p>
              <div className="text-sm text-gray-600 mt-2 leading-snug">
                {agent.rating}★ ({agent.reviews} reviews) <br />
                {agent.lastYearSales} sales last year • {agent.totalSales} total
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && filteredAgents.length > cardsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>

          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Show All
          </button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              setShowAll(false);
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Back to Pagination
          </button>
        </div>
      )}
    </div>
    </div>
  );
};


export default CardsandPagination;
