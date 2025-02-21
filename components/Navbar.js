"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

// import "../styles/login.signup.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.scrollY >= 400) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    // Ensure window is available (client-side only)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarBackground);
      return () => {
        window.removeEventListener("scroll", changeNavbarBackground);
      };
    }
  }, []);

  return (
    <>
      <div className={`Navbar`}>
        <div className="logo">
          <Image
            src="/logo.png"
            alt="logo"
            width={50} // Set appropriate width
            height={50} // Set appropriate height
            onClick={() => (window.location.href = "/")}
            style={{ cursor: "pointer" }}
          />
          My_Mathematics
        </div>

        <div className="buttons">
          <Link href="/login">Log In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>

      <motion.nav
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView={"show"}
        className={`main-navbar ${navbar && "active"}`}
      >
        <div className="row">
          <h1>
            <Image
              src={"/logo.png"}
              onClick={() => (window.location.href = "/")}
              alt="logo"
              width={50}
              height={50}
            />
            My_Mathematics
          </h1>

          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/all-courses">All Courses</Link>
            <Link href="/contact-with-us">Contact us</Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
