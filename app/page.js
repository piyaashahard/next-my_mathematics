"use client";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for "user" in localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Set to true if "user" exists, otherwise false
  }, []);

  return (
    <div className={`${isLoggedIn && "margin-top"}`}>
      Hello I am Shreyan Dey
    </div>
  );
};

export default Home;
