// import React, { useState } from "react";
// import { registerUser } from "../services/authService";
// import { useNavigate } from "react-router-dom";
// const Register = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await registerUser(userData);

//     if (response.message === "User registered successfully") {
//       navigate("/login");
//     } else {
//       alert(response.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) =>
//             setUserData({ ...userData, password: e.target.value })
//           }
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { Users, ShieldCheck, Mail, User } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await registerUser(userData);

      if (response.message === "User registered successfully") {
        navigate("/login");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl border border-white/10">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-10 h-10 text-green-400" />
              <h2 className="text-3xl font-bold">Create Your Account</h2>
            </div>
            <p className="text-white/70">
              Join our community and start sharing resources
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 p-3 rounded-lg text-red-400 text-center">
                {error}
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Name"
                required
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="
                  w-full 
                  pl-10 
                  pr-4 
                  py-3 
                  bg-gray-700 
                  border 
                  border-white/10 
                  rounded-lg 
                  focus:outline-none 
                  focus:border-blue-500
                  text-white
                  placeholder-white/50
                "
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="
                  w-full 
                  pl-10 
                  pr-4 
                  py-3 
                  bg-gray-700 
                  border 
                  border-white/10 
                  rounded-lg 
                  focus:outline-none 
                  focus:border-blue-500
                  text-white
                  placeholder-white/50
                "
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ShieldCheck className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="password"
                placeholder="Password"
                required
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                className="
                  w-full 
                  pl-10 
                  pr-4 
                  py-3 
                  bg-gray-700 
                  border 
                  border-white/10 
                  rounded-lg 
                  focus:outline-none 
                  focus:border-blue-500
                  text-white
                  placeholder-white/50
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full 
                py-3 
                bg-gradient-to-r 
                from-blue-600 
                to-purple-600 
                text-white 
                rounded-lg 
                font-semibold 
                hover:from-blue-700 
                hover:to-purple-700
                transition 
                duration-300
                hover:scale-105
                active:scale-95
              "
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-white/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  text-blue-400 
                  hover:text-blue-300 
                  transition 
                  duration-300
                "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
