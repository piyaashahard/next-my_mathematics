// import { motion } from "framer-motion";
// import Link from "next/link"; // Use Next.js Link component for routing
// import { FaArrowLeft } from "react-icons/fa";

// const Error = () => {
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: 50 }}
//         transition={{ duration: 0.5 }}
//         className="Error"
//       >
//         <h1
//           style={{
//             // backgroundImage: `url('https://img.pikbest.com/wp/202343/nasa-stunning-space-background-texture-elements-captured-by-in-high-quality-photograph_9988933.jpg')`,
//             // backgroundSize: "cover",
//             // backgroundClip: "text",
//             // WebkitBackgroundClip: "text", // For WebKit browsers
//             // WebkitTextFillColor: "transparent",
//             fontSize: "10vw", // You can adjust this to suit your design
//             textAlign: "center", // Optional: center the text
//           }}
//         >
//           Oops!
//         </h1>
//         <h2>404 Error | Page Not Found</h2>

//         <p>
//           The page you’re trying to access may no longer exist, might have been
//           renamed, or is currently unavailable. Please check the URL or try
//           again later.
//         </p>

//         <Link href="/">
//           <span>
//             <FaArrowLeft />
//           </span>{" "}
//           Back to Home
//         </Link>
//       </motion.div>
//     </>
//   );
// };

// export default Error;

// components/Error.js (or similar)
export default function Error({ error }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
    </div>
  );
}

//{_id: "67b0c5013a7b4f4e89784293", name: "Muntasia Taspia Mim", email: "mimapu@gmail.com"}
// email
// :
// "mimapu@gmail.com"
// name
// :
// "Muntasia Taspia Mim"
// _id
// :
// "67b0c5013a7b4f4e89784293"
