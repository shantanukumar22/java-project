// import React, { useState, useContext } from "react";
// import { loginUser } from "../services/authService";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await loginUser({ email, password });

//     if (response.token) {
//       login(response.token);
//       navigate("/dashboard"); // Redirect after login
//     } else {
//       alert(response.error || "Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useContext } from "react";
// import { loginUser } from "../services/authService";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await loginUser({ email, password });

//     if (response.token) {
//       login(response.token);
//       navigate("/request"); // Redirect after login
//     } else {
//       alert(response.error || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
//       <div className="w-96 p-6 bg-gray-800 shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold text-white text-center mb-4">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext, useRef, useEffect } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import { LogIn, Mail, Lock, AlertTriangle } from "lucide-react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    // Automatically focus on email input when component mounts
    emailInputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await loginUser({ email, password });

      if (response.token) {
        login(response.token);
        navigate("/home");
      } else {
        setError(response.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Decorative Gradient Border */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                <LogIn className="w-8 h-8 text-blue-500" />
                Resource App Login
              </h2>
              <p className="text-gray-400 mt-2">
                Welcome back! Please enter your credentials.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg flex items-center text-red-400">
                <AlertTriangle className="mr-3 w-6 h-6" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  ref={emailInputRef}
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full pl-10 pr-4 py-3 
                    bg-gray-700 text-white 
                    rounded-lg 
                    border border-transparent
                    focus:outline-none 
                    focus:ring-2 focus:ring-blue-500/50
                    transition duration-300
                  "
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full pl-10 pr-4 py-3 
                    bg-gray-700 text-white 
                    rounded-lg 
                    border border-transparent
                    focus:outline-none 
                    focus:ring-2 focus:ring-blue-500/50
                    transition duration-300
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full py-3 
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white 
                  rounded-lg 
                  font-semibold 
                  hover:from-blue-700 hover:to-purple-700
                  transition duration-300
                  flex items-center justify-center
                  space-x-2
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Login</span>
                  </>
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Background Decorative Elements */}
        <div
          className="
          absolute top-0 left-0 
          w-full h-full 
          pointer-events-none 
          opacity-10 
          bg-gradient-to-br 
          from-blue-500 
          via-purple-500 
          to-pink-500 
          -z-10
        "
        ></div>
      </div>
    </div>
  );
};

export default Login;
