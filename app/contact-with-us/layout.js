import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/contact.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My_Mathematics | Contact with us ",
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
