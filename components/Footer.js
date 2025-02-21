"use client"; // Ensure it's client-side for localStorage access

import { useEffect, useState } from "react";
import FooterBeforeLogin from "./BeforeLogin/Footer";
import FooterAfterLogin from "./AfterLogin/Footer";

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for "user" in localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Set to true if "user" exists, otherwise false
  }, []);

  return isLoggedIn ? <FooterAfterLogin /> : <FooterBeforeLogin />;
};

export default Footer;
