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
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutUser } from "../services/authService"; // Assuming you have a logout function in your auth service
import {
  Home,
  LogIn,
  UserPlus,
  List,
  PlusCircle,
  Box,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    isAuthenticated()
  );
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); // To redirect after logout

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUserAuthenticated(isAuthenticated());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const MenuItem = ({ to, icon: Icon, children, isActive }) => (
    <li>
      <Link
        to={to}
        className={`
          flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
          ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        `}
      >
        <Icon className="w-5 h-5" />
        {isExpanded && <span className="text-sm">{children}</span>}
      </Link>
    </li>
  );

  const handleLogout = () => {
    // Clear the authentication details
    logoutUser(); // Implement logout in your authService, remove token from localStorage

    // Redirect user to login page
    navigate("/");
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white 
        transition-all duration-300 ease-in-out shadow-2xl
       w-64
        flex flex-col
      `}
      // onMouseEnter={() => setIsExpanded(true)}
      // onMouseLeave={() => setIsExpanded(true)}
    >
      <div className="p-5 flex items-center justify-center">
        <h2
          className={`
          text-2xl font-bold transition-opacity duration-300
          ${isExpanded ? "opacity-100" : "opacity-0"}
        `}
        >
          Resource App
        </h2>
      </div>

      <nav className="flex-grow px-2 py-4">
        <ul className="space-y-2">
          {!isUserAuthenticated && (
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
          )}

          {isUserAuthenticated && (
            <>
              <MenuItem
                to="/request"
                icon={List}
                isActive={location.pathname === "/request"}
              >
                All Requests
              </MenuItem>
              <MenuItem
                to="/share-qr"
                icon={List}
                isActive={location.pathname === "/share-qr"}
              >
                Share-Qr
              </MenuItem>
              <MenuItem
                to="/view-qr"
                icon={List}
                isActive={location.pathname === "/view-qr"}
              >
                view-Qr
              </MenuItem>
              <MenuItem
                to="/resource"
                icon={Box}
                isActive={location.pathname === "/resource"}
              >
                All Resources
              </MenuItem>
              <MenuItem
                to="/request/new"
                icon={PlusCircle}
                isActive={location.pathname === "/request/new"}
              >
                Request Resource
              </MenuItem>
              <MenuItem
                to="/academic"
                icon={List}
                isActive={location.pathname === "/academic"}
              >
                Academic Resources
              </MenuItem>
              <MenuItem
                to="/upload-items"
                icon={PlusCircle}
                isActive={location.pathname === "/upload-items"}
              >
                upload Items
              </MenuItem>
              <MenuItem
                to="/items-lists"
                icon={List}
                isActive={location.pathname === "/items-lists"}
              >
                Lost and Found
              </MenuItem>
              <MenuItem
                to="/resource/new"
                icon={PlusCircle}
                isActive={location.pathname === "/resource/new"}
              >
                New Resource
              </MenuItem>
              <MenuItem
                to="/ask-us"
                icon={PlusCircle}
                isActive={location.pathname === "/ask-us"}
              >
                ASk AI
              </MenuItem>
              <li className="border-t border-gray-700 mt-4 pt-4">
                <button
                  onClick={handleLogout}
                  className={`
                    flex items-center space-x-3 px-4 py-3 w-full 
                    text-red-400 hover:bg-red-500 hover:text-white 
                    rounded-lg transition-all duration-300
                  `}
                >
                  <LogOut className="w-5 h-5" />
                  {isExpanded && <span className="text-sm">Logout</span>}
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
