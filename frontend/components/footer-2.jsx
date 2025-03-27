import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-800 md:h-[25vh] px-6 bg-gray-500 bg-opacity-50 flex flex-col w-full z-50">
      {/* Top Section */}
      <div className="hidden md:flex justify-center items-center  py-4 space-x-10 ">
        <a
          href="#"
          className="hover:underline bg-[#e8f7f7] bg-opacity-50 p-4 px-10"
        >
          Blog
        </a>
        <a
          href="#"
          className="hover:underline bg-[#e8f7f7] bg-opacity-50 py-4 px-10"
        >
          Client List
        </a>
        <a
          href="#"
          className="hover:underline bg-[#e8f7f7] bg-opacity-50 py-4 px-10"
        >
          In The Press
        </a>
      </div>

      {/* Middle Section */}
      <div className="bg-[#e8f7f7] bg-opacity-50 p-2 mt-6 md:mt-0 text-center text-sm flex items-center justify-center grow">
        <div className="text-sm flex flex-col items-center justify-center gap-2">
          <p>ELITE BRAINS CONSULTING</p>

          <div className="hidden md:flex justify-center items-center space-x-4 w-full">
            <p>elitebrainsconsulting@gmail.com</p>
            <p>30367-00100 NAIROBI, KENYA</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hidden md:block bg-[#e8f7f7] bg-opacity-50 py-2 mb-6 text-center text-xs  ">
        <p className="flex gap-4 justify-center items-center">
          <span>Copyright © 2025 EBC.™ All rights reserved.</span>•
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          •{" "}
          <a href="#" className="hover:underline">
            Data Security Policy
          </a>{" "}
          •{" "}
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
