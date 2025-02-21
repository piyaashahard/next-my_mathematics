import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/animation.css";
import "../styles/error.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My_Mathematics",
  description:
    "A website for the students who are preparing for Math Olympiad.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
