"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import RotatingText from "./components/RotatingText/RotatingText";
import Lanyard from "./components/Lanyard/Lanyard";
import TextPressure from "./components/TextPressure/TextPressure";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import BlurText from "./components/BlurText/BlurText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import SkillScroller from "./components/SkillScroller";
import TentangSaya from "./components/Tentang";
import KontakSaya from "./components/Kontak";

const GooeyNav = dynamic(() => import("./components/GooeyNav/GooeyNav"), {
  ssr: false,
});

export default function Home() {
  const nav = [
    { label: "Beranda", href: "#Beranda" },
    { label: "Tentang", href: "#Tentang" },
    { label: "Keahlian", href: "#Keahlian" },
    { label: "Kontak", href: "#Kontak" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Navbar untuk Desktop */}
      <div className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 items-center justify-center h-[100px] w-full max-w-[90%] px-2">
        <GooeyNav
          items={nav}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Navbar untuk Mobile */}
      <div className="fixed top-4 left-4 z-[60] sm:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 rounded-md bg-black/80 text-white border border-white/10 shadow-lg"
        >
          {/* Icon Hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </div>
      {showMenu && (
        <div className="fixed top-16 left-4 z-50 flex flex-col bg-black/90 backdrop-blur-lg p-4 rounded-xl shadow-xl space-y-4 w-[200px] border border-white/10 sm:hidden animate-slide-in">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setShowMenu(false)} // Tutup setelah klik
              className="text-white text-base font-medium hover:text-cyan-300 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <div id="Beranda" className="container mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-between items-center h-full">
          <div className="md:col-span-7 order-2 md:order-1">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.5}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start text-center sm:text-start gap-6 mt-2 mb-4">
                <div className="w-full sm:w-[300px] md:w-[400px]">
                  <TextPressure
                    text=" ADSTYN"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={5}
                    className="text-xl"
                  />
                </div>
                <RotatingText
                  texts={[
                    "UI/UX Design",
                    "FrontEnd Development",
                    "Web Designer",
                    "Freelance Developer",
                  ]}
                  mainClassName="items-center text-cyan-300 py-2 rounded-lg text-xl sm:text-3xl md:text-4xl font-bold"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
              <div className="flex flex-col h-full text-center items-start px-4 sm:px-8">
                <BlurText
                  text="Saya adalah Maba Bisnis Digital"
                  delay={10}
                  animateBy="letters"
                  direction="top"
                  className="text-base sm:text-lg text-gray-400 hover:text-gray-200 transition-colors max-w-xl"
                />
                <BlurText
                  text="bekerja secara hybrid sebagai Frontend Developer dan UI/UX Designer,"
                  delay={20}
                  animateBy="letters"
                  direction="top"
                  className="text-base sm:text-lg text-gray-400 hover:text-gray-200 transition-colors max-w-xl"
                />
                <BlurText
                  text="dengan pengalaman lebih 3 tahun dalam membangun antarmuka web yang responsif dan user-friendly."
                  delay={30}
                  animateBy="letters"
                  direction="top"
                  className="text-base sm:text-lg text-gray-400 hover:text-gray-200 transition-colors max-w-xl"
                />
                <BlurText
                  text="Saya akan selalu Update Portfolio saya dengan trend terbaru dalam desain dan pengembangan web,"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  className="text-base sm:text-lg text-gray-400 hover:text-gray-200 transition-colors max-w-xl"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center sm:items-start justify-center sm:justify-start w-full px-4">
                <a
                  href="https://drive.google.com/file/d/17ms6mHNKZ5AnbdpEkEoVZKcht_pUY9O2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-300 text-black text-lg sm:text-xl px-6 py-2 rounded-lg font-semibold text-center w-full sm:w-auto"
                >
                  Unduh CV
                </a>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1cfUmDp-1TXFITd6n2uooq1jj4qANmLGC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black text-lg sm:text-xl px-6 py-2 rounded-lg font-semibold text-center w-full sm:w-auto"
                >
                  Sertifikat
                </a>
              </div>
            </AnimatedContent>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="flex items-center justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        <TentangSaya />
        <SkillScroller numCopies={48} />
        <KontakSaya />
      </div>

      <footer className="h-24 text-center mt-20">
        <ScrollVelocity
          texts={[
            "* Portfolio Adstyn *",
            "* Saya Akan Selalu Update Portfolio Saya ©2025 *",
          ]}
          className="text-center text-2xl justify-center"
          numCopies={24}
        />
      </footer>
    </div>
  );
}
