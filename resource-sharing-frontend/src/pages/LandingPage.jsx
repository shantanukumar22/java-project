// import React, { useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";
// import {
//   Gift,
//   Share2,
//   Users,
//   Book,
//   ArrowRight,
//   ShieldCheck,
// } from "lucide-react";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext); // Get user from AuthContext

//   useEffect(() => {
//     // Redirect to /request if user is logged in
//     if (user) {
//       navigate("/request");
//     }
//   }, [user, navigate]);

//   const features = [
//     {
//       icon: <Share2 className="w-10 h-10 text-blue-400" />,
//       title: "Share Resources",
//       description:
//         "Easily share and discover valuable resources with your community.",
//     },
//     {
//       icon: <Book className="w-10 h-10 text-purple-400" />,
//       title: "Collaborative Learning",
//       description:
//         "Connect with peers and expand your knowledge through shared resources.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-green-400" />,
//       title: "Community Driven",
//       description: "A platform built by learners, for learners.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//       {/* Hero Section */}
//       <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Content */}
//         <div className="lg:w-1/2 space-y-8">
//           <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 max-w-max">
//             <Gift className="w-6 h-6 text-blue-400" />
//             <span className="text-sm text-white/70">
//               Resource Sharing Platform
//             </span>
//           </div>
//           <h1 className="text-5xl font-bold leading-tight">
//             Empower Your Learning Journey
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
//               Resource Sharing Made Easy
//             </span>
//           </h1>
//           <p className="text-xl text-white/70 max-w-xl">
//             Connect, share, and grow with a community-driven platform that makes
//             resource discovery seamless and collaborative.
//           </p>

//           {/* Auth Buttons */}
//           <div className="flex space-x-4">
//             <Link
//               to="/login"
//               className="
//                 flex items-center space-x-2
//                 px-6 py-3
//                 bg-gradient-to-r from-blue-600 to-purple-600
//                 text-white
//                 rounded-lg
//                 font-semibold
//                 hover:from-blue-700 hover:to-purple-700
//                 transition duration-300
//               "
//             >
//               <ShieldCheck className="w-5 h-5" />
//               <span>Login</span>
//             </Link>
//             <Link
//               to="/register"
//               className="
//                 flex items-center space-x-2
//                 px-6 py-3
//                 border border-white/30
//                 text-white
//                 rounded-lg
//                 font-semibold
//                 hover:bg-white/10
//                 transition duration-300
//               "
//             >
//               <Users className="w-5 h-5" />
//               <span>Register</span>
//             </Link>
//           </div>
//         </div>

//         {/* Right Content - Decorative Illustration */}
//         <div className="lg:w-1/2 hidden lg:flex justify-center relative">
//           <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full absolute blur-3xl"></div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 200 200"
//             className="relative z-10"
//           >
//             <defs>
//               <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop
//                   offset="0%"
//                   style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
//                 />
//                 <stop
//                   offset="100%"
//                   style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
//                 />
//               </linearGradient>
//             </defs>
//             <path
//               fill="url(#grad)"
//               d="M50.7,-69.1C64.5,-59.5,73.1,-41.7,77.5,-23.3C81.8,-4.9,81.9,13.2,75.1,28.4C68.3,43.6,54.6,56,39.4,67.1C24.2,78.2,7.5,88,-6.9,84.4C-21.3,80.8,-33.4,63.8,-45.1,51.1C-56.8,38.4,-68.1,29.1,-74.1,16.5C-80.1,3.9,-80.9,-11.9,-73.9,-24.1C-66.9,-36.3,-52.2,-44.9,-38.4,-54.5C-24.6,-64.1,-12.3,-74.6,3.6,-79.6C19.5,-84.6,39,-83.1,50.7,-69.1Z"
//               transform="translate(100 100)"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
//           <p className="text-xl text-white/70 max-w-2xl mx-auto">
//             We're building a collaborative ecosystem that empowers learners to
//             share, discover, and grow together.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="
//                 bg-gray-800
//                 p-8 rounded-2xl
//                 border border-white/10
//                 hover:border-blue-500/30
//                 hover:bg-gray-700/50
//                 transition duration-300
//                 transform hover:-translate-y-2
//                 shadow-2xl
//               "
//             >
//               <div className="mb-6">{feature.icon}</div>
//               <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//               <p className="text-white/70">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="container mx-auto px-6 py-16 text-center">
//         <div
//           className="
//             bg-gradient-to-r from-blue-600 to-purple-600
//             rounded-3xl
//             p-12
//             relative
//             overflow-hidden
//           "
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
//           <h2 className="text-4xl font-bold mb-6 relative z-10">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto relative z-10">
//             Join our community and start sharing resources today. Collaboration
//             is just a click away.
//           </p>
//           <Link
//             to="/login"
//             className="
//               inline-flex items-center space-x-3
//               px-8 py-4
//               bg-white
//               text-black
//               rounded-full
//               font-semibold
//               hover:bg-gray-100
//               transition duration-300
//               relative z-10
//             "
//           >
//             <span>Get Started</span>
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useEffect, useContext, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import {
  Gift,
  Share2,
  Users,
  Book,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// Memoized feature card to prevent unnecessary re-renders
const FeatureCard = memo(({ icon, title, description }) => (
  <div
    className="
      bg-gray-800 
      p-8 rounded-2xl 
      border border-white/10
      hover:border-blue-500/30
      hover:bg-gray-700/50
      transition duration-300
      transform hover:-translate-y-4
      shadow-2xl
      group
      relative
      overflow-hidden
    "
  >
    <div
      className="
        absolute 
        -top-10 
        -right-10 
        w-24 
        h-24 
        bg-white/5 
        rounded-full 
        group-hover:scale-150 
        transition-transform 
        duration-500
      "
    ></div>
    <div className="mb-6 relative z-10 transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 relative z-10 transition-colors group-hover:text-blue-400">
      {title}
    </h3>
    <p className="text-white/70 relative z-10">{description}</p>
  </div>
));

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const features = [
    {
      icon: <Share2 className="w-10 h-10 text-blue-400" />,
      title: "Share Resources",
      description:
        "Seamlessly share and discover valuable resources within your community network.",
    },
    {
      icon: <Book className="w-10 h-10 text-purple-400" />,
      title: "Collaborative Learning",
      description:
        "Create meaningful connections and amplify your learning through shared knowledge.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-400" />,
      title: "Community Driven",
      description:
        "An inclusive platform crafted by passionate learners, for learners worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 max-w-max animate-pulse">
            <Gift className="w-6 h-6 text-blue-400" />
            <span className="text-sm text-white/70">
              Resource Sharing Platform
            </span>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Empower Your Learning Journey
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Resource Sharing Made Easy
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-xl">
            Connect, share, and grow with a community-driven platform that makes
            resource discovery seamless and collaborative.
          </p>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="
                flex items-center space-x-2
                px-6 py-3 
                bg-gradient-to-r from-blue-600 to-purple-600 
                text-white 
                rounded-lg 
                font-semibold 
                hover:from-blue-700 hover:to-purple-700
                transition duration-300
                hover:scale-105
                active:scale-95
                shadow-lg
                hover:shadow-blue-500/50
                relative
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity"></div>
              <ShieldCheck className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="
                flex items-center space-x-2
                px-6 py-3 
                border border-white/30
                text-white 
                rounded-lg 
                font-semibold 
                hover:bg-white/10
                transition duration-300
                hover:scale-105
                active:scale-95
                shadow-md
                relative
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity"></div>
              <Users className="w-5 h-5" />
              <span>Register</span>
            </Link>
          </div>
        </div>

        {/* Right Content - Decorative Illustration */}
        <div className="lg:w-1/2 hidden lg:flex justify-center relative">
          <div
            className="
              w-[500px] 
              h-[500px] 
              bg-gradient-to-br 
              from-blue-500/20 
              via-purple-500/20 
              to-pink-500/20 
              rounded-full 
              absolute 
              blur-3xl 
              animate-pulse
            "
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="
              relative 
              z-10 
              transition-transform 
              duration-500 
              hover:scale-105
            "
            style={{
              animation: "float 3s ease-in-out infinite",
              transformOrigin: "center",
            }}
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad)"
              d="M50.7,-69.1C64.5,-59.5,73.1,-41.7,77.5,-23.3C81.8,-4.9,81.9,13.2,75.1,28.4C68.3,43.6,54.6,56,39.4,67.1C24.2,78.2,7.5,88,-6.9,84.4C-21.3,80.8,-33.4,63.8,-45.1,51.1C-56.8,38.4,-68.1,29.1,-74.1,16.5C-80.1,3.9,-80.9,-11.9,-73.9,-24.1C-66.9,-36.3,-52.2,-44.9,-38.4,-54.5C-24.6,-64.1,-12.3,-74.6,3.6,-79.6C19.5,-84.6,39,-83.1,50.7,-69.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-blue-400 
            to-purple-400
          "
          >
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We're building a collaborative ecosystem that empowers learners to
            share, discover, and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div
          className="
            bg-gradient-to-r from-blue-600 to-purple-600 
            rounded-3xl 
            p-12 
            relative 
            overflow-hidden
            group
            hover:scale-[1.02]
            transition-transform
            duration-300
            shadow-2xl
          "
        >
          <div
            className="
              absolute 
              inset-0 
              bg-gradient-to-r 
              from-blue-600 
              to-purple-600 
              opacity-10 
              group-hover:opacity-20 
              transition-opacity
            "
          ></div>
          <h2
            className="text-4xl font-bold mb-6 relative z-10 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-white 
            to-white/70
          "
          >
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto relative z-10">
            Join our community and start sharing resources today. Collaboration
            is just a click away.
          </p>
          <Link
            to="/login"
            className="
              inline-flex items-center space-x-3
              px-8 py-4 
              bg-white 
              text-black 
              rounded-full 
              font-semibold 
              hover:bg-gray-100
              transition duration-300
              relative z-10
              hover:scale-105
              active:scale-95
              shadow-lg
              group
            "
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
