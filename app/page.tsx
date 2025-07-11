"use client";
import RotatingText from "./components/RotatingText/RotatingText";
import Lanyard from "./components/Lanyard/Lanyard";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import TextPressure from "./components/TextPressure/TextPressure";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import BlurText from "./components/BlurText/BlurText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import GooeyNav from "./components/GooeyNav/GooeyNav";

export default function Home() {
  const nav = [
    { label: "Beranda", href: "#" },
    { label: "Tentang", href: "#" },
    { label: "Kontak", href: "#" },
  ];

  return (
    <div className="flex flex-col bg-black overflow-x-hidden min-h-screen relative overflow-visible">
      {/* Navigasi */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center h-[100px]">
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

      <SplashCursor />

      {/* Konten Utama */}
      <div className="container mx-auto px-4 min-h-screen pt-24">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Kiri */}
          <div className="col-span-12 md:col-span-6">
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                HALLO I 'M
              </h1>

              <div className="flex flex-wrap items-center gap-6 mt-2 mb-4">
                <div className="w-[250px] h-[80px] md:w-[300px] md:h-[100px]">
                  <TextPressure
                    text="ADSTYN"
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
                    "IT Project Manager",
                  ]}
                  mainClassName="px-2 py-1 md:px-3 md:py-2 text-cyan-300 rounded-lg text-center text-xl sm:text-3xl md:text-4xl font-bold inline-flex"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>

              <BlurText
                text="Saya adalah Maba Bisnis Digital yang bekerja secara hybrid sebagai Frontend Developer dan UI/UX Designer, dengan pengalaman kurang lebih 3 tahun dalam membangun antarmuka web yang responsif dan user-friendly."
                delay={10}
                animateBy="letters"
                direction="top"
                className="text-base md:text-lg mt-4 text-center md:text-left text-gray-500 hover:text-gray-300 transition-colors"
              />

              <div className="flex gap-4 mt-6 flex-wrap">
                <a
                  href="https://drive.google.com/file/d/17ms6mHNKZ5AnbdpEkEoVZKcht_pUY9O2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-300 text-black text-lg px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-cyan-400"
                >
                  Download CV
                </a>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1cfUmDp-1TXFITd6n2uooq1jj4qANmLGC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black text-lg px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-gray-400"
                >
                  Certificates
                </a>
              </div>
            </AnimatedContent>
          </div>

          {/* Kanan */}
          <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
            <div className="w-full h-full flex items-center justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Section Tentang */}
        <BlurText
          text="Tentang Saya"
          delay={50}
          animateBy="words"
          direction="top"
          className="text-4xl mt-16 mb-8 text-center justify-center text-cyan-300 font-bold"
        />
      </div>

      {/* Footer Full Width */}
      <footer className="w-screen text-center justify-center mt-50 bg-black py-6 overflow-hidden relative z-50">
        <div className="w-full">
          <ScrollVelocity
            texts={["Portfolio Adstyn", "All rights reserved ©2025"]}
            velocity={60}
            numCopies={24}
            className="text-white text-center justify-center text-2xl whitespace-nowrap"
            scrollerClassName="flex whitespace-nowrap"
          />
        </div>
      </footer>
    </div>
  );
}
