import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Channel from "./Pages/Channel";

const App = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Sidebar />
      <Channel />   {/* ✅ THIS MUST BE HERE */}
    </div>
  );
};

export default App;