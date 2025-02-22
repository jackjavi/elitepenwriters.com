import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white h-[25vh] bg-gray-900 bg-opacity-20 flex flex-col fixed bottom-0 left-0 w-full z-50">
      {/* Top Section */}
      <div className="flex justify-center items-center  py-4 space-x-10 ">
        <a href="#" className="hover:underline bg-gray-800 p-4 px-10">
          Blog
        </a>
        <a href="#" className="hover:underline bg-gray-800 py-4 px-10">
          Client List
        </a>
        <a href="#" className="hover:underline bg-gray-800 py-4 px-10">
          In The Press
        </a>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-800 py-2 text-center text-sm flex items-center justify-center grow">
        <div className="text-sm flex flex-col items-center justify-center gap-2">
          <p>ELITE PEN CONSULTANCY</p>

          <div className="flex justify-center items-center space-x-4 w-full">
            <p>EMAIL: elitepenconsultancy@gmail.com</p>
            <p>PHONE: (254) 708 313 804</p>
            <p>30367-00100 NAIROBI, KENYA</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-2 text-center text-xs  ">
        <p className="flex gap-4 justify-center items-center">
          <span>
            Copyright © 2025 Elite Pen Consultancy.™ All rights reserved.
          </span>
          •
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
