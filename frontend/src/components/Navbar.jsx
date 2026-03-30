function Navbar() {
  return (
    <div className="flex items-center justify-between mb-4">

      <input
        type="text"
        placeholder="Search..."
        className="bg-[#121212] px-4 py-2 rounded-full w-1/2 text-white outline-none border border-gray-700"
      />

      <div className="flex gap-3">
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
      </div>

    </div>
  );
}

export default Navbar;