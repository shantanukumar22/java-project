import React from "react";
import { getEmailFromToken } from "../services/authService";

const Dashboard = () => {
  let email = getEmailFromToken(); // ✅ Extract Email
  let displayName = email ? email.replace("@gmail.com", "") : "Guest"; // ✅ Trim "@gmail.com"

  return (
    <div>
      <h1>Welcome, {displayName}! 🎉</h1>
    </div>
  );
};

export default Dashboard;
