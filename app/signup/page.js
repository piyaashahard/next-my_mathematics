"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Updated import

import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import Error from "../../components/Error"; // Assuming you have an Error component

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(null); // Authorization check
  const router = useRouter();

  useEffect(() => {
    // Check if user already exists in localStorage
    const user = localStorage.getItem("user");
    setIsAuthorized(user ? true : false);
  }, []);

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      alert(response.data.message);

      // Redirect to login page after successful signup
      router.push("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  if (isAuthorized === null) return null; // Wait for authorization check to complete

  if (isAuthorized) {
    return <Error />; // Show Error page if already logged in
  }

  return (
    <>
      <div className="Signup">
        <div className="login-form">
          <h1>Sign Up for My_Mathematics</h1>
          <div className="form-input">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <label htmlFor="input">Name:</label>
          </div>

          <div className="form-input">
            <IoIosMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <label htmlFor="input">Email:</label>
          </div>

          <div className="form-input">
            <RiLockPasswordFill />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <label htmlFor="input">Password:</label>
          </div>

          <button onClick={handleSignup}>Signup</button>

          <p>
            Already have an account in My_Mathematics?{" "}
            <Link href="/login">Log In</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
