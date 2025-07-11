"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const KontakSaya = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const nama = data.get("nama")?.toString().trim();
    const telpon = data.get("telpon")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const pesan = data.get("pesan")?.toString().trim();

    if (!nama || !telpon || !email || !pesan) {
      alert("Semua input harus diisi!");
      return;
    }

    const response = await fetch("https://formspree.io/f/mblynqka", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      alert("Pesan berhasil dikirim!");
    } else {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <section
      id="Kontak"
      className="bg-black text-white mt-40 py-20 px-4 flex justify-center items-center flex-col"
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-300 text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Kontak Saya
      </motion.h2>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        {[...Array(3)].map((_, i) => {
          const fieldData = [
            {
              label: "Nama",
              name: "nama",
              type: "text",
              placeholder: "Masukkan nama Anda",
            },
            {
              label: "No Telepon",
              name: "telpon",
              type: "text",
              placeholder: "Masukkan nomor telepon Anda",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Masukkan email Anda",
            },
          ][i];
          return (
            <motion.div
              key={fieldData.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label
                htmlFor={fieldData.name}
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                {fieldData.label}
              </label>
              <input
                type={fieldData.type}
                name={fieldData.name}
                id={fieldData.name}
                placeholder={fieldData.placeholder}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </motion.div>
          );
        })}

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label
            htmlFor="pesan"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            rows={5}
            placeholder="Tulis pesan Anda..."
            required
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="w-full bg-cyan-300 hover:bg-cyan-500 text-black font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Kirim Pesan
          </button>
        </motion.div>
      </form>

      {/* Sosial Media Section */}
      <div className="mt-10 flex gap-6">
        {[
          {
            name: "Instagram",
            src: "/assets/instagram.png",
            href: "https://www.instagram.com/_adstyn/",
          },
          {
            name: "TikTok",
            src: "/assets/tiktok.png",
            href: "https://www.tiktok.com/@adstynbusines",
          },
          {
            name: "GitHub",
            src: "/assets/github.png",
            href: "https://github.com/AdStyn",
          },
          {
            name: "LinkedIn",
            src: "/assets/linkedin.webp",
            href: "https://www.linkedin.com/in/ady-setiyawan-943778327/",
          },
        ].map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default KontakSaya;
