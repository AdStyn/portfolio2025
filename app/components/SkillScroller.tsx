"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { section } from "framer-motion/client";
import { useRef, useMemo } from "react";

interface Skill {
  name: string;
  src: string;
}

interface SkillScrollerProps {
  numCopies?: number; // Tambahkan prop numCopies
}

const skills: Skill[] = [
  { name: "HTML", src: "/assets/html.png" },
  { name: "CSS", src: "/assets/css.png" },
  { name: "JavaScript", src: "/assets/javascript.webp" },
  { name: "TypeScript", src: "/assets/typescript.png" },
  { name: "React", src: "/assets/react.png" },
  { name: "Nextjs", src: "/assets/nextjs.jpeg" },
  { name: "Tailwind", src: "/assets/tailwind.png" },
  { name: "Express", src: "/assets/express.png" },
  { name: "MySql", src: "/assets/sql.svg" },
  { name: "Nodejs", src: "/assets/nodejs.png" },
  { name: "Figma", src: "/assets/figma.png" },
  { name: "Canva", src: "/assets/canva.png" },
];

const SkillScroller: React.FC<SkillScrollerProps> = ({ numCopies = 4 }) => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  let currentX = 0;

  // Total pengulangan skill agar memenuhi layar
  const duplicatedSkills = useMemo(() => {
    return Array(numCopies).fill(skills).flat();
  }, [numCopies]);

  useAnimationFrame((t, delta) => {
    const speed = (delta / 1000) * 50;
    const containerWidth = containerRef.current?.scrollWidth || 1000;
    currentX = (currentX - speed) % containerWidth;
    x.set(currentX);
  });

  const scrollX = useTransform(x, (val) => `${val}px`);

  return (
    <section
      id="Keahlian"
      className="bg-black text-white mt-40 py-20 px-4 flex justify-center items-center flex-col"
    >
      {" "}
      <motion.h2
        className="text-4xl font-bold text-cyan-300 text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Keahlian Saya
      </motion.h2>
      <div className="overflow-hidden py-6 bg-black">
        <motion.div
          ref={containerRef}
          style={{ x: scrollX }}
          className="flex gap-8 w-max"
        >
          {duplicatedSkills.map((skill, i) => (
            <div
              key={i}
              className="w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300"
              title={skill.name}
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillScroller;
