import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#151515] text-white py-4 text-center">
      <div className="flex justify-center flex-col space-y-4">
        <div className="flex justify-center space-x-8">
          <FaInstagram size={24} className="cursor-pointer" />
          <FaFacebook size={24} className="cursor-pointer" />
          <FaTwitter size={24} className="cursor-pointer" />
        </div>
        <p>&copy; 2023 Gym Genesis | All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
