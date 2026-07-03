import Image from "next/image";
import { Button } from "@heroui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/banner";
import SupportSecPage from "@/components/SupportSec";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>

      <Banner />
      <WhyChoose />
      <SupportSecPage />

    </div>
  );
}
