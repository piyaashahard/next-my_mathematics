// "use client"; // Ensure it's client-side

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const NavbarAfterLogin = () => {
//   const [userInformation, setUserInformation] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         console.log("User data from localStorage:", parsedUser); // ✅ Debugging

//         if (parsedUser?._id) {
//           fetchUserData(parsedUser._id);
//         } else {
//           console.error("User ID missing in localStorage"); // ❌ Debugging
//           setLoading(false);
//         }
//       } else {
//         console.error("No user found in localStorage"); // ❌ Debugging
//         setLoading(false);
//       }
//     }
//   }, []);

//   const fetchUserData = async (userId) => {
//     try {
//       console.log(`Fetching user data for ID: ${userId}`); // ✅ Debugging

//       const response = await fetch(`/api/auth/user/${userId}`);

//       if (!response.ok) {
//         throw new Error("User not found");
//       }

//       const data = await response.json();
//       console.log("Fetched user data:", data); // ✅ Debugging
//       setUserInformation(data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <nav className="main-navbar">
//       <div className="row">
//         <h1>
//           <Image
//             src={"/logo.png"}
//             alt="My Mathematics Logo"
//             width={50}
//             height={50}
//           />
//           My_Mathematics
//         </h1>

//         <div className="links">
//           <Link href="/">Home</Link>
//           <Link href="/courses">All Courses</Link>

//           {userInformation ? (
//             <Link
//               href={`/user-profile?id=${userInformation._id}`}
//               className="profile"
//             >
//               {userInformation.image ? (
//                 <Image
//                   src={userInformation.image}
//                   alt="Profile"
//                   width={47}
//                   height={47}
//                   style={{ borderRadius: "50%" }}
//                 />
//               ) : (
//                 userInformation.name?.[0]?.toUpperCase()
//               )}
//             </Link>
//           ) : loading ? (
//             <p>Loading...</p>
//           ) : (
//             <Link href="/login">Login</Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarAfterLogin;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarAfterLogin = () => {
  return (
    <>
      <div className="Navbar fixed">
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
    </>
  );
};

export default NavbarAfterLogin;
