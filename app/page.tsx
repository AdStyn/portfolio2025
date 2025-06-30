// "use client";
import RotatingText from "./components/RotatingText/RotatingText";
import Lanyard from "./components/Lanyard/Lanyard";
import SplashCursor from "./components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <SplashCursor />
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 gap-4 justify-between items-center h-full">
          <div className="col-span-6">
            <div className="flex flex-col h-full items-start justify-center">
              <h1 className="text-3xl font-bold">Hallo I'am</h1>
              <div className="flex flex-row items-center gap-4 mt-2 mb-4">
                <h1 className="text-5xl font-bold">Adstyn</h1>
                <RotatingText
                  texts={[
                    "FrontEnd Development",
                    "UI/UX Design",
                    "Web Designer",
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-[#191919] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-center text-2xl sm:text-3xl md:text-4xl font-bold inline-flex"
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
              <p className="text-lg text-gray-400">
                Vocational high school graduate majoring in Software Engineering
                who has a great interest in the field of programming and
                software development. Has experience in creating various web and
                mobile application projects. Ready to actively contribute in the
                world of work with adequate technical and soft skills.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full h-full flex items-center justify-center">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
