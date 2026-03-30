import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

function Channel() {
  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-4">


        <Navbar />
        <div className="h-48 rounded-xl overflow-hidden mb-4">
          
        </div>

        <div className="flex items-center gap-4 mb-6">
        <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg bg-gray-800">
            
          </div>

    
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold">CHANNEL NAME</h1>
            <p className="text-gray-400">1,432 Subscribers</p>

            <button className="mt-2 bg-gray-200 text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300">
              Subscribe
            </button>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>

      </div>
    </div>
  );
}

export default Channel;