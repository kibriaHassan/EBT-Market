import React from "react";

const Loader = () => {
  return (
    <div className="min-h-50 w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="relative h-14 w-14">
          {/* Base ring (gray) */}
          <div className="absolute inset-0 rounded-full border-[6px] border-gray-200"></div>

          {/* Active ring (indigo) */}
          <div className="absolute inset-0 rounded-full border-[6px] border-indigo-600 border-t-transparent animate-spin"></div>

          {/* Inner soft dot */}
          <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-indigo-600 shadow"></div>
        </div>

        {/* Text */}
        <div className="text-sm font-medium text-gray-600">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
