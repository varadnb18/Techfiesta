import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-50 px-4 py-2 w-full max-w-[600px] border-2 border-transparent hover:border-[#d6e5e3] rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 50 50"
        className="text-gray-500 mr-3"
        style={{ fill: "#08656e" }}
      >
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="flex-grow bg-transparent outline-none text-gray-700 text-lg bg-gray-100 max-w-full placeholder:text-sm"
      />
      <button className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
