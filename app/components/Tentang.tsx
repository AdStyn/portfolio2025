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
      <p>
        Halo! Saya{" "}
        <span className="text-cyan-300 font-semibold">Ady Setiyawan</span>,
        seorang mahasiswa <span className="text-cyan-300">Bisnis Digital</span>{" "}
        yang memiliki ketertarikan tinggi pada{" "}
        <span className="text-white">teknologi web</span> dan{" "}
        <span className="text-white">desain antarmuka pengguna</span>. Saya
        sangat menikmati proses menciptakan antarmuka yang sederhana, intuitif,
        dan fungsional untuk pengguna.
      </p>
    </>,
    <>
      <p>
        Saat ini, saya sedang fokus mengembangkan keterampilan sebagai{" "}
        <span className="text-cyan-300">Frontend Developer</span> sekaligus{" "}
        <span className="text-cyan-300">UI/UX Designer</span>. Saya aktif
        membangun berbagai project mandiri menggunakan{" "}
        <span className="text-white">React.js</span>,{" "}
        <span className="text-white">Next.js</span>, dan{" "}
        <span className="text-white">Tailwind CSS</span>. Untuk desain, saya
        menggunakan <span className="text-white">Figma</span> sebagai alat
        utama.
      </p>
    </>,
    <>
      <p>
        Saya aktif mengembangkan kemampuan melalui berbagai project mandiri,
        portofolio pribadi, serta membantu teman-teman UMKM membangun tampilan
        digital mereka. Selain frontend, saya juga memiliki dasar dalam{" "}
        <span className="text-cyan-300">Backend Developer</span> menggunakan{" "}
        <span className="text-white">Express.js</span> dan{" "}
        <span className="text-white">MySQL</span>.
      </p>
    </>,
    <>
      <p>
        Saya terus belajar dan berkembang melalui dokumentasi, tutorial, dan
        komunitas teknologi. Dalam setiap project, saya berusaha menjaga standar
        desain yang konsisten, memperhatikan detail, dan memastikan pengalaman
        pengguna yang baik.
      </p>
    </>,
    <>
      <p>
        Dikenal sebagai pribadi yang{" "}
        <span className="text-white">
          tekun, terbuka terhadap masukan, dan selalu ingin belajar
        </span>
        , saya percaya bahwa proses dan semangat kolaborasi jauh lebih penting
        daripada sekadar hasil akhir.
      </p>
    </>,
    <>
      <p>
        <span className="font-semibold text-white">
          Mari terhubung atau berkolaborasi!
        </span>{" "}
        Saya terbuka untuk belajar bersama, berdiskusi, atau terlibat dalam
        project freelance dan magang. Silakan hubungi saya melalui{" "}
        <span className="text-cyan-300">Kontak Saya</span>.
      </p>
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
