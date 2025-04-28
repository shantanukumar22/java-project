// import React, { useEffect, useState } from "react";

// const ShowEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/events/all");
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-8 rounded-t-lg shadow-lg mb-10">
//         <h1 className="text-4xl font-semibold">Upcoming Events</h1>
//         <p className="text-xl mt-2">
//           Discover the latest events hosted by clubs and societies!
//         </p>
//       </div>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden"
//           >
//             {/* Event Banner */}
//             {event.eventBannerImage && (
//               <img
//                 src={`data:image/jpeg;base64,${event.eventBannerImage}`}
//                 alt="Event Banner"
//                 className="w-full h-64 object-cover"
//               />
//             )}

//             {/* Event Details */}
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2">{event.eventName}</h2>
//               <p className="text-gray-700 mb-4">{event.eventDetails}</p>
//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <span>
//                   Hosted by:{" "}
//                   <span className="font-semibold">{event.hostedByClub}</span>
//                 </span>
//                 <span>{new Date(event.eventDate).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowEvents;
import React, { useEffect, useState } from "react";
import { Calendar, Clock, Users, MapPin, Info } from "lucide-react";

const ShowEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/events/all");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Format date in a more readable way
  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format time from date string
  const formatTime = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-gray-900 text-center py-10 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3 text-white">
            Upcoming Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover exciting events hosted by campus clubs and societies
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="h-12 w-12 bg-orange-500 rounded-full"></div>
              <div className="space-y-4">
                <div className="h-4 w-36 bg-orange-500 rounded"></div>
                <div className="h-4 w-64 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-16">
            <Info size={48} className="mx-auto text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No Events Found</h3>
            <p className="text-gray-400">
              Check back later for upcoming events!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Event Banner with gradient overlay */}
                <div className="relative h-64">
                  {event.eventBannerImage ? (
                    <img
                      src={`data:image/jpeg;base64,${event.eventBannerImage}`}
                      alt={event.eventName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-900 to-gray-800 flex items-center justify-center">
                      <span className="text-3xl font-bold text-orange-500">
                        {event.eventName.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>

                  {/* Event date badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-gray-900 rounded-lg px-3 py-1 font-semibold text-sm shadow-md flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(event.eventDate).split(",")[0]}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-orange-400 line-clamp-2">
                    {event.eventName}
                  </h2>

                  <p className="text-gray-300 line-clamp-3">
                    {event.eventDetails}
                  </p>

                  <div className="space-y-3 text-sm">
                    {/* Date and time */}
                    <div className="flex items-start space-x-2">
                      <Calendar className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{formatDate(event.eventDate)}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-start space-x-2">
                      <Clock className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{formatTime(event.eventDate)}</span>
                    </div>

                    {/* Hosted by */}
                    <div className="flex items-start space-x-2">
                      <Users className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Hosted by{" "}
                        <span className="font-semibold text-white">
                          {event.hostedByClub}
                        </span>
                      </span>
                    </div>

                    {/* Location if available */}
                    {event.location && (
                      <div className="flex items-start space-x-2">
                        <MapPin className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white py-2 rounded-lg transition-colors duration-300 font-medium flex items-center justify-center space-x-2">
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowEvents;
