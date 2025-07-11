"use client";
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

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center h-[100px] w-full max-w-[100%] sm:max-w-[100px] px-2">
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

      {/* Beranda */}
      <div id="Beranda" className="container mx-auto min-h-screen pt-28 px-4">
        <div className="grid grid-cols-12 gap-4 items-center h-full">
          {/* Lanyard tampil di atas saat mobile */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full h-full flex items-center justify-center">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>

          {/* Konten teks */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
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
              <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
                <div className="w-full sm:w-[300px] md:w-[400px] items-start justify-start text-start">
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
                  mainClassName="justfy-center text-center items-center px-2 sm:px-2 md:px-3 text-cyan-300 py-2 rounded-lg text-center text-xl sm:text-3xl md:text-4xl font-bold inline-flex"
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

              <div className="flex flex-col mt-6 space-y-2">
                <BlurText
                  text="Saya adalah Mahasiswa Bisnis Digital"
                  delay={10}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex mt-4 text-center text-gray-500 hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="bekerja secara hybrid sebagai Frontend Developer dan UI/UX Designer,"
                  delay={20}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="dengan pengalaman lebih 3 tahun dalam membangun antarmuka web yang responsif dan user-friendly."
                  delay={30}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="Saya akan selalu Update Portfolio saya dengan trend terbaru dalam desain dan pengembangan web,"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 hover:text-gray-300 transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 items-start sm:items-center">
                <a
                  href="https://drive.google.com/file/d/17ms6mHNKZ5AnbdpEkEoVZKcht_pUY9O2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-300 text-black text-xl px-4 py-2 rounded-lg font-semibold text-center"
                >
                  Unduh CV
                </a>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1cfUmDp-1TXFITd6n2uooq1jj4qANmLGC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black text-xl px-4 py-2 rounded-lg font-semibold text-center"
                >
                  Sertifikat
                </a>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <TentangSaya />
        <SkillScroller numCopies={48} />
        <KontakSaya />
      </div>

      {/* Footer */}
      <footer className="h-24 text-center justify-center mt-20">
        <ScrollVelocity
          texts={[
            "* Portfolio Adstyn *",
            "* Saya Akan Selalu Update Portfolio Saya ©2025 *",
          ]}
          className="text-center custom-scroll-text text-2xl justify-center"
          numCopies={24}
        />
      </footer>
    </div>
  );
}
