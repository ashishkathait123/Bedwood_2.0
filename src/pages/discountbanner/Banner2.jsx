import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center md:h-40 h-20 w-full">
        <img
          src="/Home/ch2.png"
          alt="Banner"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default TopBanner;
