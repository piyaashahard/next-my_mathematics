"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import

import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { zoomIn } from "../../components/varients";
import Error from "../../components/Error"; // Error component for unauthorized access

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(null); // Indicates loading state
  const router = useRouter();

  // Base URL based on environment
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.BASE_URL || "http://localhost:3000";

  // Check for existing user in localStorage to avoid redundant login
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthorized(!!user); // Set authorization based on presence of "user"
  }, []);

  const handleLogin = async () => {
    try {
      // Make a POST request to the API (no need to include "/route" in the URL)
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email,
        password,
      });

      // Store user and token in localStorage upon successful login
      setSuccessful(true);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/"); // Redirect to the homepage using new useRouter
      }, 2000);

      // Clear email and password fields after successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  if (isAuthorized === null) return null; // Wait for authorization check to complete

  if (isAuthorized) {
    return <Error message="You are already logged in." />;
  }

  return (
    <>
      <div className="Login">
        <div className="login-form">
          <h1>Log in to My_Mathematics</h1>
          <div className="form-input">
            <IoIosMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Enter your email"
            />
            <label htmlFor="email">Email:</label>
          </div>

          <div className="form-input">
            <RiLockPasswordFill />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
          </div>

          <button onClick={handleLogin}>Login</button>

          <p>
            Don't have an account on My_Mathematics? <br />
            <Link href="/signup">Sign up</Link> now to create a new account and
            become a part of the My_Mathematics community!
          </p>
        </div>
      </div>

      {successful && (
        <motion.div
          variants={zoomIn(0, 0.5)}
          initial="hidden"
          animate="show"
          className="successful"
        >
          <div className="successful-div">
            <h1>You have successfully logged in!</h1>
            <p>Please wait while we redirect you...</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Login;
