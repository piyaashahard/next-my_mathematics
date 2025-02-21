// "use client"; // Ensure it's client-side for hooks and localStorage

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarAfterLogin = () => {
  // const [userInformation, setUserInformation] = useState(null);
  // const [loading, setLoading] = useState(true);

  // const userId =
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("user"))?._id
  //     : null; // Fetch user ID from localStorage
  // const userInformationLocalHost =
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("user"))
  //     : null;

  // useEffect(() => {
  //   if (userId) {
  //     setLoading(true); // Set loading to true when fetching data
  //     fetch(`http://localhost:3000/api/auth/user/${userId}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("User not found");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setUserInformation(data);
  //         setLoading(false); // Set loading to false once data is fetched
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user:", error);
  //         setLoading(false); // Set loading to false even if there's an error
  //       });
  //   } else {
  //     setLoading(false); // If no userId, stop loading
  //   }
  // }, [userId]);

  // const firstLetter =
  //   userInformation?.name?.[0]?.toUpperCase() ||
  //   userInformationLocalHost?.name?.[0]?.toUpperCase(); // Default to the first letter of the name

  return (
    <nav className="main-navbar">
      <div className="row">
        <h1>
          <Image
            src={"/logo.png"}
            alt="My Mathematics Logo"
            width={50}
            height={50}
          />
          My_Mathematics
        </h1>

        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/courses">All Courses</Link>

          {/* {userInformation?.image ? (
            <Link
              href={`/user-profile?id=${userId}`}
              className={`profile letter-${firstLetter}`}
            >
              <Image
                src={`http://localhost:3000/api/auth/user/image/${userId}`}
                alt="Profile"
                width={47}
                height={47}
                style={{ borderRadius: "50%" }}
              />
            </Link>
          ) : (
            <Link
              href={`/user-profile?id=${userId}`}
              className={`profile letter-${firstLetter}`}
            >
              {firstLetter}
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
