import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-black">
          Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none text-white bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;