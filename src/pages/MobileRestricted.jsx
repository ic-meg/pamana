import React from "react";

const MobileRestricted = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-[#5c4033]">Sorry!</h1>
      <p className="text-lg text-[#3a2a1a]">
        This interactive experience is only available on web browsers. <br />
        Please visit us from a desktop or laptop.
      </p>
    </div>
  );
};

export default MobileRestricted;
