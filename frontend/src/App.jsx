import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Channel from "./Pages/Channel";

const App = () => {
// Pages
// recommendation-system
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

// Layout

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Profile from "./pages/Profile/Profile"; 

// main
function Layout() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Sidebar />
      <Channel />  
    </div>
  );
};
      <div className="main-content">
// recommendation-system
        <Home /> {/* Direct render for now */}
        <Outlet />
// main
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Layout />} />

        {/* Auth routes */}
        {/* WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* WITH Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;