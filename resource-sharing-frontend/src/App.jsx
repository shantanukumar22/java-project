// // import { Navigate, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import PrivateRoute from "./components/PrivateRoute";
// // import Dashboard from "./pages/dashBoard";
// // import { AuthProvider } from "./context/Authcontext";
// // import React from "react";
// // import Requests from "./pages/Requests";

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Routes>
// //         <Route path="/" element={<Navigate to="/login" />} />

// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/request" element={<Requests />} />
// //         <Route element={<PrivateRoute />}>
// //           <Route path="/dashboard" element={<Dashboard />} />
// //         </Route>
// //       </Routes>
// //     </AuthProvider>
// //   );
// // }

// // export default App;

// import { Navigate, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PrivateRoute from "./components/PrivateRoute";
// import Dashboard from "./pages/Dashboard";
// import { AuthProvider } from "./context/Authcontext";
// import React from "react";
// import Requests from "./pages/Requests";
// import Sidebar from "./components/Sidebar"; // Import Sidebar component
// import RequestList from "./components/RequestList";
// import RequestForm from "./components/RequestForm";
// import ResourceList from "./pages/ResourceList";
// import AddResource from "./components/AddResource";
// import QRList from "./components/QRList";
// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <AuthProvider>
//       <div className="flex min-h-screen full bg-gray-900">
//         {/* Sidebar will be shown on all routes except login/register */}
//         <Sidebar />
//         {/* Main content area, adjusted margin-left to avoid overlap */}
//         <div className="flex-1 ml-64 p-6">
//           {" "}
//           {/* Ensures space for sidebar */}
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/" element={<LandingPage/>}  />
//             {/* Private Route for Dashboard */}
//             <Route element={<PrivateRoute />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/request" element={<RequestList />} />
//               <Route path="/resource" element={<ResourceList />} />
//               <Route path="/resource/new" element={<AddResource />} />
//               <Route path="/request/new" element={<RequestForm />} />
//               <Route path="/qrlist" element={<QRList />} />
//             </Route>
//             {/* Requests page */}
//           </Routes>
//         </div>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;

import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/Authcontext";
import React from "react";
import Requests from "./pages/Requests";
import Sidebar from "./components/Sidebar"; // Import Sidebar component
import RequestList from "./components/RequestList";
import RequestForm from "./components/RequestForm";
import ResourceList from "./pages/ResourceList";
import AddResource from "./components/AddResource";
// import QRList from "./components/QRList";
import LandingPage from "./pages/LandingPage";
import AcademicResourcesPage from "./pages/AcademicResource";
import UploadQR from "./pages/UploadQR";
import ViewQRs from "./pages/viewQr";
import ResourceSearch from "./pages/Resource-search";
import UploadItem from "./components/UploadItem";
import ItemList from "./components/ItemList";
import UploadEvent from "./components/UploadEvent";
import ShowEvents from "./components/ShowEvents";
import Home from "./components/Home";

function App() {
  const location = useLocation();

  // Define public routes that shouldn't show sidebar
  const publicRoutes = ["/login", "/register", "/"];

  return (
    <AuthProvider>
      <div className="flex min-h-screen bg-gray-900">
        {/* Conditionally render Sidebar based on the current location */}
        {!publicRoutes.includes(location.pathname) && <Sidebar />}

        {/* Main content area */}
        <div
          className={`flex-1 ${
            publicRoutes.includes(location.pathname) ? "" : "ml-64"
          } p-6`}
        >
          {/* Ensures space for sidebar if it's shown */}
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/academic" element={<AcademicResourcesPage />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/request" element={<RequestList />} />
              <Route path="/resource" element={<ResourceList />} />
              <Route path="/resource/new" element={<AddResource />} />
              <Route path="/request/new" element={<RequestForm />} />
              {/* <Route path="/qrlist" element={<QRList />} /> */}
              <Route path="/share-qr" element={<UploadQR />} />
              <Route path="/view-qr" element={<ViewQRs />} />
              <Route path="/ask-us" element={<ResourceSearch />} />
              <Route path="/upload-items" element={<UploadItem />} />
              <Route path="/items-lists" element={<ItemList />} />
              <Route path="/upload-event" element={<UploadEvent />} />
              <Route path="/list-event" element={<ShowEvents />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
