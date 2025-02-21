import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/conditions.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My_Mathematics | Privacy & Policy",
};

export default function RootLayout({ children }) {
  return (
    <section
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </section>
  );
}
