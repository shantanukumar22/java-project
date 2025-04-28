import React, { useState, useEffect } from "react";

export default function Home() {
  const [resources, setResources] = useState([]);
  const [requests, setRequests] = useState([]);
  const [qrs, setQrs] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRes = await fetch("http://localhost:8080/api/resources/all");
        const resReq = await fetch("http://localhost:8080/api/requests/all");
        const resQrs = await fetch("http://localhost:8080/api/qr/all");
        const resEvents = await fetch("http://localhost:8080/api/events/all");

        const resourcesData = await resRes.json();
        const requestsData = await resReq.json();
        const qrsData = await resQrs.json();
        const eventsData = await resEvents.json();

        setResources(resourcesData.slice(0, 30));
        setRequests(requestsData.slice(0, 30));
        setQrs(qrsData.slice(0, 30));
        setEvents(eventsData.slice(0, 30));
      } catch (error) {
        console.error("Error loading homepage data:", error);
      }
    };

    fetchData();
  }, []);

  // Dashboard component with fetched data
  const totalItems =
    resources.length + requests.length + qrs.length + events.length;
  const completionPercentage = Math.min(
    100,
    Math.round((totalItems / 200) * 100)
  );

  return (
    <div className="bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden">
      {/* Impact Header with Stats */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <div className="text-4xl font-bold flex items-baseline">
            24<span className="text-lg font-normal ml-1">HR</span>
            <span className="text-orange-500 text-xl ml-2">Impact</span>
          </div>
          <div className="text-sm text-gray-400">Creating change together</div>
        </div>

        <div className="flex flex-col items-end">
          <div className="mb-2 text-right">
            <span className="text-gray-400 text-sm">Impact Progress</span>
            <div className="flex items-center">
              <span className="mr-2 font-bold">{completionPercentage}%</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-gray-400 text-sm">Total Contributions</span>
            <div className="text-2xl font-bold">
              {totalItems}{" "}
              <span className="text-orange-500">Lives Touched</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      </div>

      {/* Impact Categories */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-4 transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Resources</h3>
              <p className="text-sm text-orange-100">Knowledge shared</p>
            </div>
            <div className="bg-orange-700 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="font-bold text-xl">{resources.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-4 transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Requests</h3>
              <p className="text-sm text-orange-100">Needs fulfilled</p>
            </div>
            <div className="bg-orange-600 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="font-bold text-xl">{requests.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-4 transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Stomachs fulfilled</h3>
              <p className="text-sm text-orange-100">Shared the meals</p>
            </div>
            <div className="bg-orange-600 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="font-bold text-xl">{qrs.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-4 transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Events</h3>
              <p className="text-sm text-orange-100">Communities built</p>
            </div>
            <div className="bg-orange-700 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="font-bold text-xl">{events.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Quote */}
      <div className="mt-6 text-center relative z-10">
        <div className="italic text-gray-400">
          "Small acts, when multiplied by millions of people, can transform your
          college expereince."
        </div>
      </div>
    </div>
  );
}
