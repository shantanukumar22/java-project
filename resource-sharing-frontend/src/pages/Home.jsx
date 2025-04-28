import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-red-900 font-bold">
          Welcome to Resource Sharingds
        </h1>
        <p className="mt-4">Find and share learning materials easily.</p>
      </div>
    </>
  );
}

export default Home;
