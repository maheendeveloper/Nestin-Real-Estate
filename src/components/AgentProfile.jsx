import React from "react";
import { useParams } from "react-router-dom";
import agentsData from "./agentsData";

const AgentProfile = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const agent = agentsData.find(
    (a) => a.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!agent) {
    return <div className="text-center mt-10 text-xl">Agent not found</div>;
  }

  const averagePrice = agent.recentSales.reduce((sum, p) => {
    const num = Number(p.price.replace(/\$|,/g, ""));
    return sum + num;
  }, 0) / agent.recentSales.length;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{agent.name}</h1>
          <p className="text-blue-600 font-semibold uppercase text-sm mt-1">Premier Agent</p>
          <p className="text-gray-700">{agent.company}</p>
          <p className="text-sm text-gray-600">Lead of team</p>
          <p className="text-sm mt-1 text-gray-700">
            <span className="font-semibold text-blue-600">{agent.rating}★</span> •{" "}
            {agent.reviews} team reviews
          </p>
        </div>
      </div>

      
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recent Sales</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 ">
          {agent.recentSales.map((sale, idx) => (
            <div
              key={idx}
              className="min-w-[280px] bg-white shadow rounded-lg overflow-hidden "
            >
              <img src={sale.image} alt={sale.address} className="w-full h-40 object-cover" />
              <div className="p-3">
                <p className="font-bold text-lg">{sale.price}</p>
                <p className="text-sm text-gray-600">
                  {sale.beds} bd | {sale.baths} ba | {sale.sqft.toLocaleString()} sqft
                </p>
                <p className="text-sm text-gray-700 mt-1">{sale.address}</p>
                <p className="text-xs text-orange-600 mt-1">Sold recently</p>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        <div>
          <p className="text-xl font-bold">{agent.lastYearSales}</p>
          <p className="text-sm text-gray-600">Sales last 12 months</p>
        </div>
        <div>
          <p className="text-xl font-bold">{agent.totalSales}</p>
          <p className="text-sm text-gray-600">Total sales</p>
        </div>
        <div>
          <p className="text-xl font-bold">{agent.priceRange}</p>
          <p className="text-sm text-gray-600">Price range</p>
        </div>
        <div>
          <p className="text-xl font-bold">${Math.round(averagePrice).toLocaleString()}</p>
          <p className="text-sm text-gray-600">Average price</p>
        </div>
      </div>

      
     <div className="mt-10">
  {agent.videoUrl ? (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={agent.videoUrl}
        title={`${agent.name} video`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
      No video available
    </div>
  )}
</div>

      
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Contact the Team</h3>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="tel" placeholder="Phone" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded sm:col-span-2" />
          <textarea
            rows="4"
            placeholder="Message"
            className="p-2 border rounded sm:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 sm:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentProfile;
