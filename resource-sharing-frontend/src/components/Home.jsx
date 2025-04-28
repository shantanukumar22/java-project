import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImpactDashboard from "./Imapats";

function Home() {
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

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="px-6 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-10 rounded-xl shadow-xl text-center mb-10 border-l-4 border-orange-500">
          <h1 className="text-5xl font-extrabold mb-3">RESOURCE HUB</h1>
          <p className="text-gray-300 text-lg">
            Your one-stop platform for sharing, discovering, and collaborating.
          </p>
        </div>

        {/* Resource Flow - Top Section */}
        <ImpactDashboard />

        {/* Top Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Details Section */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-6">DETAILS</h2>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">SpringBoot</span>
                <div className="flex items-center">
                  <span className="font-bold mr-3">React</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">MySql</span>
                <div className="flex items-center">
                  <span className="font-bold mr-3">Tailwind</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 12h-4V8"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">JWT</span>
                <div className="flex items-center">
                  <span className="font-bold mr-3">RESTAPI</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Display Section - Using your actual QR data */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">QR MODE</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                15
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">RECENT-QR</h2>

            {qrs.length > 0 ? (
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 bg-white rounded-lg p-2">
                  <img
                    src={`data:image/png;base64,${qrs[0]?.qrImage}`}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-40 bg-gray-700 rounded-lg mb-4">
                <span className="text-gray-400">No QR Codes Available</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="font-bold">{qrs[0]?.title || "QR Code"}</span>
              <div className="flex items-center">
                <span className="mr-2">ON</span>
                <div className="w-12 h-6 bg-orange-500 rounded-full relative p-1 flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Voltage Display - Repurposed for Requests */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex flex-col items-center justify-center h-40 mb-4">
              <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-700 w-32 text-center">
                <div className="text-3xl font-bold text-orange-500">
                  {requests.length}
                </div>
                <div className="text-sm text-gray-400 mt-1">REQUESTS</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                AC {requests.length} / DC {resources.length}
              </span>
              <Link to="/request" className="flex items-center text-orange-500">
                <span>Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-3xl font-bold mb-6">QUICK ACTIONS</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📚", label: "Upload Resource", link: "/resource/new" },
              { icon: "🆘", label: "Post Request", link: "/request/new" },
              { icon: "📎", label: "Share QR", link: "/share-qr" },
              { icon: "🎉", label: "Create Event", link: "/upload-event" },
            ].map((action) => (
              <Link
                key={action.label}
                to={action.link}
                className="bg-gray-700 hover:bg-gray-600 p-6 rounded-xl flex flex-col items-center justify-center transition duration-300"
              >
                <span className="text-4xl mb-2">{action.icon}</span>
                <span className="text-lg font-semibold text-center">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Resources */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">LATEST RESOURCES</h2>
            <Link to="/resource" className="text-orange-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource._id}
                className="bg-gray-700 rounded-xl p-5 hover:bg-gray-600 transition duration-300"
              >
                <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm">
                  {resource.description?.slice(0, 70) ||
                    "No description available..."}
                  ...
                </p>
                <div className="mt-3 flex justify-end">
                  <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Requests */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">LATEST REQUESTS</h2>
            <Link to="/request" className="text-orange-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requests.map((request) => (
              <div
                key={request._id}
                className="bg-gray-700 rounded-xl p-5 hover:bg-gray-600 transition duration-300"
              >
                <h3 className="font-bold text-xl mb-2">{request.title}</h3>
                <p className="text-gray-400 text-sm">
                  {request.description?.slice(0, 70) ||
                    "No description available..."}
                  ...
                </p>
                <div className="mt-3 flex justify-end">
                  <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Shared QRs */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">LATEST SHARED QRs</h2>
            <Link to="/view-qr" className="text-orange-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qrs.map((qr) => (
              <div
                key={qr._id}
                className="bg-gray-700 rounded-xl p-5 hover:bg-gray-600 transition duration-300 flex flex-col items-center"
              >
                <div className="w-32 h-32 bg-white p-2 rounded-lg mb-3">
                  <img
                    src={`data:image/png;base64,${qr.qrImage}`}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg">{qr.title || "QR Shared"}</h3>
                <p className="text-gray-400 text-center text-sm mt-1">
                  {qr.note?.slice(0, 50) || "No extra details"}...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">UPCOMING EVENTS</h2>
            <Link to="/list-event" className="text-orange-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-gray-700 rounded-xl p-5 hover:bg-gray-600 transition duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">{event.eventName}</h3>
                  <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  {new Date(event.eventDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
