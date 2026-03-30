import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Channel from "./Pages/Channel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Channel />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Channel */}
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;