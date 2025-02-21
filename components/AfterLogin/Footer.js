"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Next.js Link
import Image from "next/image"; // Next.js Image optimization
import { motion } from "framer-motion"; // For animations

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="all-items">
        {/* Logo Section */}
        <div className="logo">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="My_Mathematics Logo"
            onClick={() => window.open("https://shreyandey.vercel.app")}
            style={{ cursor: "pointer" }}
          />
          <p>My_Mathematics</p>
        </div>

        {/* Links Section */}
        <div className="links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">All Courses</Link>
            </li>
            {/* <li>Tutorials</li>
            <li>Practice Tests</li> */}
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/questions-books">Questions & Books</Link>
            </li>
            <li>
              <Link href="/contact-with-us">Contact with Us</Link>
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div className="tools">
          <h1>Educational Tools</h1>
          <ul>
            <li>
              <Link href="/calculator">Calculator</Link>
            </li>
            <li>
              <Link href="/math-formulas-sheet">Math Formulas Sheet</Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
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

        {/* Social Media Section */}
        <div className="social">
          <h1>Social Media Links</h1>
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

      {/* Copyright Section */}
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
    </motion.footer>
  );
};

export default Footer;
