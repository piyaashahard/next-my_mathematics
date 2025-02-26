"use client"; // Ensure it's client-side for localStorage access

import { useEffect, useState } from "react";
import NavbarAfterLogin from "./AfterLogin/Navbar";
import NavbarBeforeLogin from "./BeforeLogin/Navbar";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for "user" in localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Set to true if "user" exists, otherwise false
  }, []);

  return isLoggedIn ? <NavbarAfterLogin /> : <NavbarBeforeLogin />;
};

export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return <NavbarBeforeLogin />;
// };

// export default Navbar;
