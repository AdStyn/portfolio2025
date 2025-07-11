"use client";
import RotatingText from "./components/RotatingText/RotatingText";
import Lanyard from "./components/Lanyard/Lanyard";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import TextPressure from "./components/TextPressure/TextPressure";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import BlurText from "./components/BlurText/BlurText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import SkillScroller from "./components/SkillScroller";
import TentangSaya from "./components/Tentang";
import KontakSaya from "./components/Kontak";

export default function Home() {
  const nav = [
    { label: "Beranda", href: "#Beranda" },
    { label: "Tentang", href: "#Tentang" },
    { label: "Keahlian", href: "#Keahlian" },
    { label: "Kontak", href: "#Kontak" },
  ];
  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      <div className=" fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center h-[100px]">
        <GooeyNav
          items={nav}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        ></GooeyNav>
      </div>

      {/* <SplashCursor /> */}

      {/* Main content with flex-grow */}

      <div id="Beranda" className="container mx-auto min-h-screen">
        <div className="grid grid-cols-12 gap-4 justify-between items-center h-full">
          <div className="col-span-7">
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
              <div className="flex flex-row gap-6 mt-2 mb-4-4">
                <div className="w-[400px] h-[120px]">
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
                  mainClassName="items-center px-2 sm:px-2 md:px-3 text-cyan-300 py-2 sm:py-1 md:py-2  rounded-lg text-center text-xl sm:text-3xl md:text-4xl font-bold inline-flex"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
              <div className="flex flex-col h-full">
                <BlurText
                  text="Saya adalah Maba Bisnis Digital"
                  delay={10}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex mt-4 text-center text-gray-500 h-full hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="bekerja secara hybrid sebagai Frontend Developer dan UI/UX Designer,"
                  delay={20}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 h-full hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="dengan pengalaman lebih 3 tahun dalam membangun antarmuka web yang responsif dan user-friendly."
                  delay={30}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 h-full hover:text-gray-300 transition-colors"
                />
                <BlurText
                  text="Saya akan selalu Update Portfolio saya dengan trend terbaru dalam desain dan pengembangan web,"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  className="text-lg flex text-center text-gray-500 h-full hover:text-gray-300 transition-colors"
                />
              </div>
              <div className="gap-4 mt-6 flex-row">
                <button className="bg-cyan-300 mr-6 text-black text-xl px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300">
                  <a
                    href="https://drive.google.com/file/d/17ms6mHNKZ5AnbdpEkEoVZKcht_pUY9O2/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unduh CV
                  </a>
                </button>
                <button className="bg-gray-300 gap-4 text-black text-xl px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300">
                  <a
                    href="https://drive.google.com/drive/u/0/folders/1cfUmDp-1TXFITd6n2uooq1jj4qANmLGC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sertifikat
                  </a>
                </button>
              </div>
            </AnimatedContent>
          </div>

          <div className="col-span-5">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full h-full flex items-center justify-center">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>

        <TentangSaya />
        <div id="Keahlian" className="mt-50">
          <BlurText
            text="Keahlian Saya"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-4xl mb-8 text-center justify-center text-cyan-300 font-bold"
          />
          <SkillScroller numCopies={48} />
        </div>
        <KontakSaya />
      </div>

      {/* Footer always at the bottom */}
      <footer className="h-24 text-center justify-center mt-50">
        <ScrollVelocity
          texts={[
            "* Portfolio Adstyn *",
            "* Saya Akan Selalu Update Portfolio Saya ©2025 *",
          ]}
          className="text-center custom-scroll-text text-2xl justify-center "
          numCopies={24}
        />
      </footer>
    </div>
  );
}
