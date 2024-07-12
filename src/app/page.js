"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
 

  return (
    <main className="min-w-screen min-h-screen ">
       <Header />
       <Hero />
       <Section1 />
       <Section2 />
       <Section3 />
       <Footer />
    </main>
  );
}
