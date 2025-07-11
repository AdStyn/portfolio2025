"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
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
  { name: "Tailwind", src: "/assets/tailwind.png" },
  { name: "Express", src: "/assets/express.png" },
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
  );
};

export default SkillScroller;
