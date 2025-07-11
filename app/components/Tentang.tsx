"use client";

import { motion, easeOut } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const TentangSaya = () => {
  const paragraphs = [
    <>
      Hai, saya adalah mahasiswa{" "}
      <span className="font-semibold text-cyan-300">Bisnis Digital</span> yang
      memiliki ketertarikan tinggi di dunia{" "}
      <span className="text-white">teknologi dan desain</span>. Saat ini saya
      bekerja secara hybrid sebagai seorang{" "}
      <span className="text-cyan-300">Frontend Developer</span> dan{" "}
      <span className="text-cyan-300">UI/UX Designer</span>.
    </>,
    <>
      Dengan pengalaman lebih dari 3 tahun, saya telah membangun berbagai proyek
      web yang <span className="text-white">responsif</span>,{" "}
      <span className="text-white">interaktif</span>, dan berfokus pada{" "}
      <span className="text-white">pengalaman pengguna</span>.
    </>,
    <>
      Selain itu, saya aktif mengembangkan portofolio pribadi, mengikuti
      pelatihan, serta terlibat dalam kolaborasi freelance project untuk
      memperluas jaringan dan{" "}
      <span className="text-white">meningkatkan skill</span>.
    </>,
  ];

  return (
    <section
      id="Tentang"
      className="px-4 py-20 bg-black text-white flex justify-center items-center flex-col"
    >
      <h2 className="text-4xl mb-10 font-bold text-cyan-300 text-center">
        Tentang Saya
      </h2>
      <div className="max-w-3xl text-lg text-gray-300 leading-relaxed space-y-6 text-center">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default TentangSaya;
