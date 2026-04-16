import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ChannelPage from "./ChannelPage";
import VideoPage from "./VideoPage";
// import VideoCard from "./components/VideoCard";
// import WatchParty from "./components/WatchParty";
import WatchPage from "./Pages/WatchPage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/channelpage" element={<ChannelPage />} />

          {/* <Route path="/videoply" element={<VideoPly />} /> */}
          {/* <Route path="/videocard" element={<VideoCard />} /> */}
          {/* <Route path="/watchparty" element={<WatchParty />} /> */}
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/watch" element={<WatchPage />} />

        </Routes>
      </Router>
    </div>
  );
}