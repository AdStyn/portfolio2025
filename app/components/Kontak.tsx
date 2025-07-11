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

    const response = await fetch("https://formspree.io/f/mnqwdxyz", {
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
      className="bg-black text-white py-20 px-4 flex justify-center items-center flex-col"
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
        {[
          {
            label: "Nama",
            name: "nama",
            type: "text",
            placeholder: "Masukkan nama Anda",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Masukkan email Anda",
          },
        ].map((field, i) => (
          <motion.div
            key={field.name}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>
        ))}

        <motion.div
          custom={2}
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
          custom={3}
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
    </section>
  );
};

export default KontakSaya;
