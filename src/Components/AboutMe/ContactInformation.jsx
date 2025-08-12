import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    label: "Email",
    value: "haidermdnaeem@gmail.com",
    href: "mailto:haidermdnaeem@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+8801576583605",
    href: "tel:+8801576583605",
    icon: FaPhoneAlt,
  },
  {
    label: "WhatsApp",
    value: "+8801576583605",
    href: "https://wa.me/8801576583605",
    icon: FaWhatsapp,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ContactInformation() {
  return (
    <section id="contact-info" className="py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4">
        Contact Information
      </h2>

      <div className="flex flex-col gap-6 mx-6 md:mx-10 lg:mx-15">
        {contactDetails.map(({ label, value, href, icon: Icon }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border rounded-md hover:bg-black transition-all duration-1000 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={itemVariants}
          >
            <Icon className="text-[#f306f3] w-6 h-6 flex-shrink-0" />
            <div className="">
              <p className="font-semibold text-gray-100 text-xl">{label}</p>
              <p className="text-gray-300">{value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
