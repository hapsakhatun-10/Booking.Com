import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const joshefin = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "BookingZone | Discover Your Next Adventure",
  description: "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${joshefin.className} h-full`}
    >
      <body className="min-h-full flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Toaster position="top-right" toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            padding: "16px",
          },
        }} />
        <Footer />
      </body>
    </html>
  );
}
