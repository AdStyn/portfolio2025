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
        Hai! Saya{" "}
        <span className="text-cyan-300 font-semibold">Ady Setiyawan</span>,
        mahasiswa
        <span className="text-cyan-300"> Bisnis Digital</span> yang memiliki
        ketertarikan besar pada dunia{" "}
        <span className="text-white">teknologi</span> dan{" "}
        <span className="text-white">desain antarmuka</span>. Saya senang
        menggabungkan kreativitas dengan logika untuk menciptakan solusi digital
        yang fungsional dan menarik.
      </p>
    </>,
    <>
      <p>
        Saat ini, saya bekerja secara{" "}
        <span className="text-cyan-300">hybrid</span> sebagai
        <span className="text-cyan-300"> Frontend Developer</span> dan
        <span className="text-cyan-300"> UI/UX Designer</span>. Keahlian utama
        saya mencakup pengembangan antarmuka web menggunakan{" "}
        <span className="text-white">React.js</span>,
        <span className="text-white"> Next.js</span>, dan desain dengan
        <span className="text-white"> Figma</span> serta{" "}
        <span className="text-white">Tailwind CSS</span>.
      </p>
    </>,
    <>
      <p>
        Saya juga berpengalaman sebagai{" "}
        <span className="text-white">Backend Developer</span>
        menggunakan <span className="text-white">Express.js</span>,{" "}
        <span className="text-white">MySQL</span>, serta tools seperti{" "}
        <span className="text-white">Postman</span> dan{" "}
        <span className="text-white">Laragon</span>. Dengan pengalaman lebih
        dari 3 tahun, saya telah menyelesaikan lebih dari
        <span className="text-white"> 20 proyek freelance</span> untuk UMKM dan
        personal brand.
      </p>
    </>,
    <>
      <p>
        Beberapa pencapaian saya meliputi:
        <ul className="list-disc list-inside mt-2 text-white text-left sm:text-center">
          <li>Mengembangkan dashboard admin dan sistem kasir custom</li>
          <li>Menjadi mentor UI/UX bagi pemula di komunitas lokal</li>
          <li>Memenangkan lomba UI/UX tingkat kampus</li>
        </ul>
      </p>
    </>,
    <>
      <p>
        Saya dikenal sebagai pribadi yang{" "}
        <span className="text-white">
          adaptif, komunikatif, dan haus belajar
        </span>
        . Saya percaya bahwa kolaborasi dan feedback adalah kunci untuk
        pertumbuhan yang konsisten, baik dalam karier maupun dalam setiap proyek
        yang saya kerjakan.
      </p>
    </>,
    <>
      <p>
        <span className="font-semibold text-white">
          Ayo kolaborasi atau ngobrol bareng!
        </span>
        Saya terbuka untuk kesempatan magang, freelance, atau proyek kolaboratif
        lainnya. Hubungi saya melalui{" "}
        <span className="text-cyan-300">LinkedIn</span> atau kirim pesan
        langsung melalui <span className="text-cyan-300">Instagram</span> saya!
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
 