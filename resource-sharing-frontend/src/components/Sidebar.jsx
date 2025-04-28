// // components/Sidebar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5 flex flex-col">
//       <h2 className="text-2xl mb-8">Resource App</h2>
//       <nav>
//         <ul className="space-y-4">
//           <li>
//             <Link
//               to="/login"
//               className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/register"
//               className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//             >
//               Register
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/requests"
//               className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//             >
//               All Requests
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/request/new"
//               className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//             >
//               Request Resource
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { isAuthenticated } from "../services/authService"; // Import isAuthenticated to check if logged in

// const Sidebar = () => {
//   const isUserAuthenticated = isAuthenticated();

//   return (
//     <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5">
//       <h2 className="text-2xl mb-8">Resource App</h2>
//       <nav>
//         <ul className="space-y-4">
//           {/* Show Login/Register only if the user is not authenticated */}
//           {!isUserAuthenticated && (
//             <>
//               <li>
//                 <Link
//                   to="/login"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/register"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}

//           {/* Show these options if the user is authenticated */}
//           {isUserAuthenticated && (
//             <>
//               <li>
//                 <Link
//                   to="/request"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   All Requests
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resource"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   All resurce
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/request/new"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Request Resource
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resource/new"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   new Resource
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { isAuthenticated } from "../services/authService"; // Import isAuthenticated to check if logged in

// const Sidebar = () => {
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(
//     isAuthenticated()
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsUserAuthenticated(isAuthenticated());
//     }, 1000); // Check every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5">
//       <h2 className="text-2xl mb-8">Resource App</h2>
//       <nav>
//         <ul className="space-y-4">
//           {!isUserAuthenticated && (
//             <>
//               <li>
//                 <Link
//                   to="/login"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/register"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}

//           {isUserAuthenticated && (
//             <>
//               <li>
//                 <Link
//                   to="/request"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   All Requests
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resource"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   All Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/request/new"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   Request Resource
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resource/new"
//                   className="text-lg hover:bg-gray-700 px-3 py-2 rounded"
//                 >
//                   New Resource
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { isAuthenticated } from "../services/authService";
// import {
//   Home,
//   LogIn,
//   UserPlus,
//   List,
//   PlusCircle,
//   Box,
//   LogOut,
// } from "lucide-react";

// const Sidebar = () => {
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(
//     isAuthenticated()
//   );
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsUserAuthenticated(isAuthenticated());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const MenuItem = ({ to, icon: Icon, children, isActive }) => (
//     <li>
//       <Link
//         to={to}
//         className={`
//           flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
//           ${
//             isActive
//               ? "bg-blue-600 text-white"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white"
//           }
//         `}
//       >
//         <Icon className="w-5 h-5" />
//         {isExpanded && <span className="text-sm">{children}</span>}
//       </Link>
//     </li>
//   );

//   const handleLogout = () => {
//     // Implement logout logic
//     // For example: authService.logout()
//     // This is a placeholder
//     console.log("Logout");
//   };

//   return (
//     <div
//       className={`
//         fixed top-0 left-0 h-full bg-gray-900 text-white
//         transition-all duration-300 ease-in-out shadow-2xl
//         ${isExpanded ? "w-64" : "w-64"}
//         flex flex-col
//       `}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(true)}
//     >
//       <div className="p-5 flex items-center justify-center">
//         <h2
//           className={`
//           text-2xl font-bold transition-opacity duration-300
//           ${isExpanded ? "opacity-100" : "opacity-0"}
//         `}
//         >
//           Resource App
//         </h2>
//       </div>

//       <nav className="flex-grow px-2 py-4">
//         <ul className="space-y-2">
//           {!isUserAuthenticated && (
//             <>
//               <MenuItem
//                 to="/login"
//                 icon={LogIn}
//                 isActive={location.pathname === "/login"}
//               >
//                 Login
//               </MenuItem>
//               <MenuItem
//                 to="/register"
//                 icon={UserPlus}
//                 isActive={location.pathname === "/register"}
//               >
//                 Register
//               </MenuItem>
//             </>
//           )}

//           {isUserAuthenticated && (
//             <>
//               <MenuItem
//                 to="/request"
//                 icon={List}
//                 isActive={location.pathname === "/request"}
//               >
//                 All Requests
//               </MenuItem>
//               <MenuItem
//                 to="/resource"
//                 icon={Box}
//                 isActive={location.pathname === "/resource"}
//               >
//                 All Resources
//               </MenuItem>
//               <MenuItem
//                 to="/request/new"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/request/new"}
//               >
//                 Request Resource
//               </MenuItem>
//               <MenuItem
//                 to="/resource/new"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/resource/new"}
//               >
//                 New Resource
//               </MenuItem>
//               <li className="border-t border-gray-700 mt-4 pt-4">
//                 <button
//                   onClick={handleLogout}
//                   className={`
//                     flex items-center space-x-3 px-4 py-3 w-full
//                     text-red-400 hover:bg-red-500 hover:text-white
//                     rounded-lg transition-all duration-300
//                   `}
//                 >
//                   <LogOut className="w-5 h-5" />
//                   {isExpanded && <span className="text-sm">Logout</span>}
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { isAuthenticated, logoutUser } from "../services/authService"; // Assuming you have a logout function in your auth service
// import {
//   Home,
//   LogIn,
//   UserPlus,
//   List,
//   PlusCircle,
//   Box,
//   LogOut,
// } from "lucide-react";

// const Sidebar = () => {
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(
//     isAuthenticated()
//   );
//   const [isExpanded, setIsExpanded] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate(); // To redirect after logout

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsUserAuthenticated(isAuthenticated());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const MenuItem = ({ to, icon: Icon, children, isActive }) => (
//     <li>
//       <Link
//         to={to}
//         className={`
//           flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
//           ${
//             isActive
//               ? "bg-blue-600 text-white"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white"
//           }
//         `}
//       >
//         <Icon className="w-5 h-5" />
//         {isExpanded && <span className="text-sm">{children}</span>}
//       </Link>
//     </li>
//   );

//   const handleLogout = () => {
//     // Clear the authentication details
//     logoutUser(); // Implement logout in your authService, remove token from localStorage

//     // Redirect user to login page
//     navigate("/");
//   };

//   return (
//     <div
//       className={`
//         fixed top-0 left-0 h-full bg-gray-900 text-white
//         transition-all duration-300 ease-in-out shadow-2xl
//        w-64
//         flex flex-col
//       `}
//       // onMouseEnter={() => setIsExpanded(true)}
//       // onMouseLeave={() => setIsExpanded(true)}
//     >
//       <div className="p-5 flex items-center justify-center">
//         <h2
//           className={`
//           text-2xl font-bold transition-opacity duration-300
//           ${isExpanded ? "opacity-100" : "opacity-0"}
//         `}
//         >
//           Resource App
//         </h2>
//       </div>

//       <nav className="flex-grow px-2 py-4">
//         <ul className="space-y-2">
//           {!isUserAuthenticated && (
//             <>
//               <MenuItem
//                 to="/login"
//                 icon={LogIn}
//                 isActive={location.pathname === "/login"}
//               >
//                 Login
//               </MenuItem>
//               <MenuItem
//                 to="/register"
//                 icon={UserPlus}
//                 isActive={location.pathname === "/register"}
//               >
//                 Register
//               </MenuItem>
//             </>
//           )}

//           {isUserAuthenticated && (
//             <>
//               <MenuItem
//                 to="/home"
//                 icon={List}
//                 isActive={location.pathname === "/home"}
//               >
//                 Home
//               </MenuItem>
//               <MenuItem
//                 to="/request"
//                 icon={List}
//                 isActive={location.pathname === "/request"}
//               >
//                 All Requests
//               </MenuItem>

//               <MenuItem
//                 to="/share-qr"
//                 icon={List}
//                 isActive={location.pathname === "/share-qr"}
//               >
//                 Share-Qr
//               </MenuItem>
//               <MenuItem
//                 to="/view-qr"
//                 icon={List}
//                 isActive={location.pathname === "/view-qr"}
//               >
//                 view-Qr
//               </MenuItem>
//               <MenuItem
//                 to="/resource"
//                 icon={Box}
//                 isActive={location.pathname === "/resource"}
//               >
//                 All Resources
//               </MenuItem>
//               <MenuItem
//                 to="/request/new"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/request/new"}
//               >
//                 Request Resource
//               </MenuItem>
//               <MenuItem
//                 to="/academic"
//                 icon={List}
//                 isActive={location.pathname === "/academic"}
//               >
//                 Academic Resources
//               </MenuItem>
//               <MenuItem
//                 to="/upload-items"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/upload-items"}
//               >
//                 upload Items
//               </MenuItem>

//               <MenuItem
//                 to="/items-lists"
//                 icon={List}
//                 isActive={location.pathname === "/items-lists"}
//               >
//                 Lost and Found
//               </MenuItem>
//               <MenuItem
//                 to="/upload-event"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/upload-event"}
//               >
//                 Add Event
//               </MenuItem>
//               <MenuItem
//                 to="/list-event"
//                 icon={List}
//                 isActive={location.pathname === "/list-event"}
//               >
//                 Events
//               </MenuItem>
//               <MenuItem
//                 to="/resource/new"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/resource/new"}
//               >
//                 New Resource
//               </MenuItem>
//               <MenuItem
//                 to="/ask-us"
//                 icon={PlusCircle}
//                 isActive={location.pathname === "/ask-us"}
//               >
//                 ASk AI
//               </MenuItem>
//               <li className="border-t border-gray-700 mt-4 pt-4">
//                 <button
//                   onClick={handleLogout}
//                   className={`
//                     flex items-center space-x-3 px-4 py-3 w-full
//                     text-red-400 hover:bg-red-500 hover:text-white
//                     rounded-lg transition-all duration-300
//                   `}
//                 >
//                   <LogOut className="w-5 h-5" />
//                   {isExpanded && <span className="text-sm">Logout</span>}
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutUser } from "../services/authService";
import {
  Home,
  LogIn,
  UserPlus,
  FileText,
  PlusCircle,
  Box,
  LogOut,
  BookOpen,
  Upload,
  Search,
  QrCode,
  Calendar,
  CalendarPlus,
  Package,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Menu,
  X,
  Layers,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    isAuthenticated()
  );
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({
    resources: true,
    events: true,
    lostFound: true,
    qrCode: true,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUserAuthenticated(isAuthenticated());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuItem = ({ to, icon: Icon, children, isActive }) => (
    <li>
      <Link
        to={to}
        className={`
          flex items-center space-x-5 px-4 py-3 rounded-lg transition-all duration-300
          ${
            isActive
              ? "bg-orange-600 text-white shadow-lg shadow-orange-900/30"
              : "text-gray-300 hover:bg-gray-800 hover:text-orange-400"
          }
        `}
      >
        <Icon
          className={`w-5 h-5 ${isActive ? "text-white" : "text-orange-500"}`}
        />
        {isExpanded && <span className="text-sm font-medium">{children}</span>}
      </Link>
    </li>
  );

  const CategoryHeader = ({ title, icon: Icon, isOpen, category }) => (
    <div
      className="flex items-center justify-between px-4 py-2 text-orange-400 font-medium cursor-pointer mb-1 hover:bg-gray-800 rounded-lg"
      onClick={() => toggleCategory(category)}
    >
      <div className="flex items-center space-x-2">
        <Icon className="w-4 h-4" />
        {isExpanded && (
          <span className="text-sm uppercase tracking-wider">{title}</span>
        )}
      </div>
      {isExpanded &&
        (isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        ))}
    </div>
  );

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded-lg text-orange-500 border border-gray-700"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div
        className={`
          fixed top-0 left-0 h-full bg-gray-900 text-white 
          transition-all duration-300 ease-in-out shadow-xl border-r border-gray-800
          ${isExpanded ? "w-64" : "w-20"} 
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          z-40 flex flex-col
        `}
      >
        {/* Logo and brand */}
        <div className="p-5 flex items-center space-x-3 border-b border-gray-800">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-2 rounded-lg shadow-lg">
            <Layers className="w-6 h-6 text-white" />
          </div>
          {isExpanded && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              BER3SOURCE
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="ml-auto text-gray-400 hover:text-white md:block hidden"
          >
            {isExpanded ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow px-2 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
          <ul className="space-y-1">
            {!isUserAuthenticated ? (
              <>
                <MenuItem
                  to="/login"
                  icon={LogIn}
                  isActive={location.pathname === "/login"}
                >
                  Login
                </MenuItem>
                <MenuItem
                  to="/register"
                  icon={UserPlus}
                  isActive={location.pathname === "/register"}
                >
                  Register
                </MenuItem>
              </>
            ) : (
              <>
                {/* Home section */}
                <MenuItem
                  to="/home"
                  icon={Home}
                  isActive={location.pathname === "/home"}
                >
                  Dashboard
                </MenuItem>

                <div className="mt-6 mb-2">
                  <CategoryHeader
                    title="Resources"
                    icon={Box}
                    isOpen={expandedCategories.resources}
                    category="resources"
                  />
                  {expandedCategories.resources && (
                    <ul className="ml-2 space-y-1 border-l-2 border-gray-800 pl-2">
                      <MenuItem
                        to="/resource"
                        icon={Box}
                        isActive={location.pathname === "/resource"}
                      >
                        All Resources
                      </MenuItem>
                      <MenuItem
                        to="/request"
                        icon={FileText}
                        isActive={location.pathname === "/request"}
                      >
                        All Requests
                      </MenuItem>
                      <MenuItem
                        to="/resource/new"
                        icon={PlusCircle}
                        isActive={location.pathname === "/resource/new"}
                      >
                        New Resource
                      </MenuItem>
                      <MenuItem
                        to="/request/new"
                        icon={FileText}
                        isActive={location.pathname === "/request/new"}
                      >
                        Request Resource
                      </MenuItem>
                      <MenuItem
                        to="/academic"
                        icon={BookOpen}
                        isActive={location.pathname === "/academic"}
                      >
                        Academic Resources
                      </MenuItem>
                    </ul>
                  )}
                </div>

                <div className="mt-4 mb-2">
                  <CategoryHeader
                    title="QR Codes"
                    icon={QrCode}
                    isOpen={expandedCategories.qrCode}
                    category="qrCode"
                  />
                  {expandedCategories.qrCode && (
                    <ul className="ml-2 space-y-1 border-l-2 border-gray-800 pl-2">
                      <MenuItem
                        to="/share-qr"
                        icon={QrCode}
                        isActive={location.pathname === "/share-qr"}
                      >
                        Share QR
                      </MenuItem>
                      <MenuItem
                        to="/view-qr"
                        icon={Search}
                        isActive={location.pathname === "/view-qr"}
                      >
                        View QR
                      </MenuItem>
                    </ul>
                  )}
                </div>

                <div className="mt-4 mb-2">
                  <CategoryHeader
                    title="Lost & Found"
                    icon={Search}
                    isOpen={expandedCategories.lostFound}
                    category="lostFound"
                  />
                  {expandedCategories.lostFound && (
                    <ul className="ml-2 space-y-1 border-l-2 border-gray-800 pl-2">
                      <MenuItem
                        to="/items-lists"
                        icon={Package}
                        isActive={location.pathname === "/items-lists"}
                      >
                        Found Items
                      </MenuItem>
                      <MenuItem
                        to="/upload-items"
                        icon={Upload}
                        isActive={location.pathname === "/upload-items"}
                      >
                        Report Found Item
                      </MenuItem>
                    </ul>
                  )}
                </div>

                <div className="mt-4 mb-2">
                  <CategoryHeader
                    title="Events"
                    icon={Calendar}
                    isOpen={expandedCategories.events}
                    category="events"
                  />
                  {expandedCategories.events && (
                    <ul className="ml-2 space-y-1 border-l-2 border-gray-800 pl-2">
                      <MenuItem
                        to="/list-event"
                        icon={Calendar}
                        isActive={location.pathname === "/list-event"}
                      >
                        Browse Events
                      </MenuItem>
                      <MenuItem
                        to="/upload-event"
                        icon={CalendarPlus}
                        isActive={location.pathname === "/upload-event"}
                      >
                        Add New Event
                      </MenuItem>
                    </ul>
                  )}
                </div>

                {/* Standalone items */}
                <div className="mt-6">
                  <MenuItem
                    to="/ask-us"
                    icon={HelpCircle}
                    isActive={location.pathname === "/ask-us"}
                  >
                    Ask AI Assistant
                  </MenuItem>
                </div>
              </>
            )}
          </ul>
        </nav>

        {/* Footer with logout */}
        {isUserAuthenticated && (
          <div className="mt-auto border-t border-gray-800 p-4">
            <button
              onClick={handleLogout}
              className={`
                flex items-center space-x-3 px-4 py-3 w-full 
                text-red-400 hover:bg-red-500/20 hover:text-red-300
                rounded-lg transition-all duration-300
              `}
            >
              <LogOut className="w-5 h-5" />
              {isExpanded && (
                <span className="text-sm font-medium">Logout</span>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
