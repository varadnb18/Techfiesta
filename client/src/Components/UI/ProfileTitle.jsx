import React, { useState, useEffect } from "react";
import { ChevronDownIcon, Box } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import logo from "../../Images/logo.webp";

function ProfileTitle() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Resources", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  return (
    <div className="flex justify-evenly h-[4.7rem] items-center pt-7  w-full">
      <div>
        <img
          src={logo}
          alt="EliteFit Logo"
          className="max-h-[150px] aspect-[3/2] object-contain"
        />
      </div>

      <div className="ml-28 mr-28">
        <ul className="flex gap-9 font-medium">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="flex items-center gap-1">
                {name}
                <Box as="button" aria-label="Dropdown">
                  <ChevronDownIcon boxSize={5} />
                </Box>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {authToken ? (
        <ProfilePopup handleLogout={handleLogout} />
      ) : (
        <Link to="/Login-Page">
          <button className="px-[1.5rem] py-[0.6rem] text-base font-bold text-[#0d2436] border-[1px] border-[#6CB33F] rounded-full bg-white hover:bg-green-50 transition ml-40">
            Sign In
          </button>
        </Link>
      )}
    </div>
  );
}

export default ProfileTitle;
