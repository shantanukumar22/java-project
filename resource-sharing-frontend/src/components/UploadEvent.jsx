// import React, { useState } from "react";

// const UploadEvent = () => {
//   const [file, setFile] = useState(null);
//   const [eventName, setEventName] = useState("");
//   const [eventDetails, setEventDetails] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [hostedByClub, setHostedByClub] = useState("");
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file || !eventName || !eventDetails || !eventDate || !hostedByClub) {
//       setMessage("Please fill out all fields and select a banner image!");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("eventName", eventName);
//     formData.append("eventDetails", eventDetails);
//     formData.append("eventDate", eventDate);
//     formData.append("hostedByClub", hostedByClub);

//     try {
//       const response = await fetch("http://localhost:8080/api/events/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const text = await response.text();
//       setMessage(text);
//     } catch (error) {
//       console.error(error);
//       setMessage("Upload failed!");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-6 rounded-t-lg shadow-lg mb-8">
//         <h1 className="text-4xl font-semibold">Upload New Event</h1>
//         <p className="text-xl mt-2">
//           Post upcoming events hosted by clubs or societies!
//         </p>
//       </div>

//       {/* Upload Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Event Information
//         </h2>

//         {/* Event Name */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Event Name"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//           />
//         </div>

//         {/* Event Details */}
//         <div className="mb-6">
//           <textarea
//             placeholder="Event Details"
//             value={eventDetails}
//             onChange={(e) => setEventDetails(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//           />
//         </div>

//         {/* Event Date */}
//         <div className="mb-6">
//           <input
//             type="date"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//           />
//         </div>

//         {/* Hosted By Club */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Hosted By (Club Name)"
//             value={hostedByClub}
//             onChange={(e) => setHostedByClub(e.target.value)}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//           />
//         </div>

//         {/* Banner Upload */}
//         <div className="mb-6">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//           />
//         </div>

//         {/* Upload Button */}
//         <div className="mb-6">
//           <button
//             onClick={handleUpload}
//             className="w-full bg-purple-600 text-white p-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
//           >
//             Upload Event
//           </button>
//         </div>

//         {/* Message */}
//         {message && (
//           <p
//             className={`text-center font-semibold ${
//               message.includes("failed") ? "text-red-600" : "text-green-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadEvent;
// import React, { useState } from "react";

// const UploadEvent = () => {
//   const [file, setFile] = useState(null);
//   const [eventName, setEventName] = useState("");
//   const [eventDetails, setEventDetails] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [hostedByClub, setHostedByClub] = useState("");
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file || !eventName || !eventDetails || !eventDate || !hostedByClub) {
//       setMessage("Please fill out all fields and select a banner image!");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("eventName", eventName);
//     formData.append("eventDetails", eventDetails);
//     formData.append("eventDate", eventDate);
//     formData.append("hostedByClub", hostedByClub);

//     try {
//       const response = await fetch("http://localhost:8080/api/events/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const text = await response.text();
//       setMessage(text);
//     } catch (error) {
//       console.error(error);
//       setMessage("Upload failed!");
//     }
//   };

//   return (
//     <div className="bg-slate-900 min-h-screen flex items-center justify-center p-6">
//       <div className="w-full bg-orange-300 rounded-2xl overflow-hidden shadow-2xl">
//         {/* Left side decorative area - similar to the image inspiration */}
//         <div className="flex flex-col md:flex-row">
//           <div className="bg-orange-700 text-center p-8 md:w-1/2 flex flex-col justify-center items-center">
//             <h1 className="text-white text-5xl font-bold tracking-wider mb-4">
//               Drop the Event !!
//             </h1>
//             <p className="text-gray-300 text-xl mb-4">
//               Share your upcoming events with the community
//             </p>
//             <div className="mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/18/d6/aa/18d6aa208569efc10b5cc57bd68a1887.jpg"
//                 alt="Event illustration"
//                 className=" rounded-lg opacity-100"
//               />
//             </div>
//           </div>

//           {/* Form section */}
//           <div className="bg-orange-300 p-8 md:w-2/3">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-slate-900 mb-2">
//                 Upload New Event
//               </h2>
//               <p className="text-slate-900">
//                 Fill out the details below to post your event
//               </p>
//             </div>

//             {/* Event Name */}
//             <div className="mb-4">
//               <label className="block text-slate-900 mb-2 text-sm font-medium">
//                 Event Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter event name"
//                 value={eventName}
//                 onChange={(e) => setEventName(e.target.value)}
//                 className="w-full p-3 bg-orange-50 border border-gray-600 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
//               />
//             </div>

//             {/* Event Details */}
//             <div className="mb-4">
//               <label className="block text-slate-900 mb-2 text-sm font-medium">
//                 Event Details
//               </label>
//               <textarea
//                 placeholder="Describe your event"
//                 value={eventDetails}
//                 onChange={(e) => setEventDetails(e.target.value)}
//                 rows={4}
//                 className="w-full p-3 bg-orange-50 border border-gray-600 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
//               />
//             </div>

//             {/* Event Date */}
//             <div className="mb-4">
//               <label className="block text-slate-900 mb-2 text-sm font-medium">
//                 Event Date
//               </label>
//               <input
//                 type="date"
//                 value={eventDate}
//                 onChange={(e) => setEventDate(e.target.value)}
//                 className="w-full p-3 bg-orange-50 border border-gray-600 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
//               />
//             </div>

//             {/* Hosted By Club */}
//             <div className="mb-4">
//               <label className="block text-slate-900 mb-2 text-sm font-medium">
//                 Hosted By
//               </label>
//               <input
//                 type="text"
//                 placeholder="Club or society name"
//                 value={hostedByClub}
//                 onChange={(e) => setHostedByClub(e.target.value)}
//                 className="w-full p-3 bg-orange-50 border border-gray-600 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
//               />
//             </div>

//             {/* Banner Upload */}
//             <div className="mb-6">
//               <label className="block text-slate-900 mb-2 text-sm font-medium">
//                 Event Banner
//               </label>
//               <div className="relative border border-dashed border-gray-500 rounded-lg p-4 bg-orange-50 hover:bg-gray-600 transition duration-300">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   className="w-full text-gray-300 cursor-pointer"
//                 />
//                 <p className="text-sm text-gray-400 mt-2">
//                   Upload a banner image for your event
//                 </p>
//               </div>
//             </div>

//             {/* Upload Button */}
//             <div className="mb-4">
//               <button
//                 onClick={handleUpload}
//                 className="w-full bg-orange-600 text-slate-900 p-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
//               >
//                 Upload Event
//               </button>
//             </div>

//             {/* Message */}
//             {message && (
//               <p
//                 className={`text-center font-semibold ${
//                   message.includes("failed") ? "text-red-500" : "text-green-500"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadEvent;
import React, { useState } from "react";

const UploadEvent = () => {
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [hostedByClub, setHostedByClub] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !eventName || !eventDetails || !eventDate || !hostedByClub) {
      setMessage("Please fill out all fields and select a banner image!");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("eventName", eventName);
    formData.append("eventDetails", eventDetails);
    formData.append("eventDate", eventDate);
    formData.append("hostedByClub", hostedByClub);

    try {
      const response = await fetch("http://localhost:8080/api/events/upload", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed!");
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left side with full image */}
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <img
            src="https://i.pinimg.com/736x/b8/d9/42/b8d942b049a02a1511a5e25afdb31887.jpg"
            alt="Event illustration"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-white text-4xl font-bold mb-2">
              Drop the Event !!
            </h1>
            <p className="text-gray-200 text-lg">
              Share your upcoming events with the community
            </p>
          </div> */}
        </div>

        {/* Form side */}
        <div className="w-full md:w-1/2 p-8 bg-orange-50">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Upload New Event
            </h2>
            <p className="text-slate-700">
              Fill out the details below to post your event
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Event Name */}
            <div>
              <label className="block text-slate-700 mb-1 text-sm font-medium">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Event Details */}
            <div>
              <label className="block text-slate-700 mb-1 text-sm font-medium">
                Event Details
              </label>
              <textarea
                placeholder="Describe your event"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
                rows={4}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-slate-700 mb-1 text-sm font-medium">
                Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Hosted By Club */}
            <div>
              <label className="block text-slate-700 mb-1 text-sm font-medium">
                Hosted By
              </label>
              <input
                type="text"
                placeholder="Club or society name"
                value={hostedByClub}
                onChange={(e) => setHostedByClub(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Banner Upload */}
            <div>
              <label className="block text-slate-700 mb-1 text-sm font-medium">
                Event Banner
              </label>
              <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-4 bg-white hover:bg-orange-100 transition duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full text-gray-600 cursor-pointer"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Upload a banner image for your event
                </p>
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <div className="mt-6">
            <button
              onClick={handleUpload}
              className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
            >
              Upload Event
            </button>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`mt-4 text-center font-semibold ${
                message.includes("failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadEvent;
