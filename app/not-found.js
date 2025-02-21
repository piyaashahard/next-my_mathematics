"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Use Next.js Link component for routing
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="Error"
    >
      <h1
        style={{
          // backgroundImage: `url('https://img.pikbest.com/wp/202343/nasa-stunning-space-background-texture-elements-captured-by-in-high-quality-photograph_9988933.jpg')`,
          // backgroundSize: "cover",
          // backgroundClip: "text",
          // WebkitBackgroundClip: "text", // For WebKit browsers
          // WebkitTextFillColor: "transparent",
          fontSize: "10vw", // You can adjust this to suit your design
          textAlign: "center", // Optional: center the text
        }}
      >
        Oops!
      </h1>
      <h2>404 Error | Page Not Found</h2>

      <p>
        The page you’re trying to access may no longer exist, might have been
        renamed, or is currently unavailable. Please check the URL or try again
        later.
      </p>

      <Link href="/">
        <span>
          <FaArrowLeft />
        </span>{" "}
        Back to Home
      </Link>
    </motion.div>
  );
};

export default Error;
