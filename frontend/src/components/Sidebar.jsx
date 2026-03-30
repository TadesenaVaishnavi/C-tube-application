function Sidebar() {
  return (
    <div className="w-64 bg-[#0f0f0f] p-4 text-white">

      <div className="space-y-2">
        <button className="w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
          Home
        </button>
        <button className="w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
          Subscriptions
        </button>
        <button className="w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
          History
        </button>
        <button className="w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
          Watch later
        </button>
        <button className="w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
          Liked videos
        </button>
      </div>

    
      <hr className="border-gray-700 my-4" />

    
      <div>
        <h3 className="text-gray-400 mb-2">Subscriptions</h3>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <span className="text-sm">Channel Name</span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 w-full text-left bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
        Show More →
      </button>

    </div>
  );
}

export default Sidebar;