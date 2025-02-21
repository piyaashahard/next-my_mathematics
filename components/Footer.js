"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure window is available (client-side only)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="all-items">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50} // Set appropriate width
            height={50} // Set appropriate height
            onClick={() => window.open("https://shreyandey.vercel.app")}
            style={{ cursor: "pointer" }}
          />
          <p>My_Mathematics</p>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/all-courses">All Courses</Link>
            </li>
            <li>
              <Link href="/contact-with-us">Contact With Us</Link>
            </li>
          </ul>
        </div>

        <div className="legal">
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="social">
          <h1>Social Media links</h1>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/shreyan1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shreyan1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ShreyanDey1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Shreyan1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shreyan-dey-72968b342/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:shreyandeyrudra@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+8801818927655"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy">
        All Rights Reserved by{" "}
        <span
          onClick={() => window.open("https://shreyandey.vercel.app")}
          style={{ cursor: "pointer" }}
        >
          Shreyan Dey.
        </span>
        <br />© {currentYear} My_Mathematics.
        {isMobile ? <br /> : " "}
        Designed by Emam Hossain Miraj.
      </div>
    </footer>
  );
};

export default Footer;
