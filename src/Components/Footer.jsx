import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  const links = [
    { label: 'Home', href: '/#' },
    { label: 'Skills', href: '/#skill' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact-info' },
  ];

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-naeem-haider/', icon: FaLinkedin, color: 'text-[#0A66C2]' },
    { label: 'GitHub', href: 'https://github.com/naeem240', icon: FaGithub, color: 'text-white' },
    { label: 'WhatsApp', href: 'https://wa.me/8801576583605', icon: FaWhatsapp, color: 'text-[#25D366]' },
    { label: 'Gmail', href: 'mailto:haidermdnaeem@gmail.com', icon: SiGmail, color: 'text-[#D44638]' },
  ];

  return (
    <footer className="relative mt-10 border-t border-[#f306f3]/40 bg-black/95 text-gray-200 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 py-14 md:px-10 lg:px-15">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f306f3]/40 bg-[#f306f3]/10 px-3 py-1 text-sm text-[#f306f3]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f306f3]" />
              Available for select projects
            </div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Let’s build something refined, modern, and memorable.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              I create clean digital experiences with thoughtful design, strong UX, and reliable performance—from polished portfolios to high-impact web products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#f306f3] bg-[#f306f3] px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#f306f3]"
            >
              Start a conversation
              <FaArrowRight className="text-sm" />
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f306f3]">
              Quick links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-300 hover:text-[#f306f3]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f306f3]">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f306f3]/30 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f306f3] hover:bg-[#f306f3]/10"
                  aria-label={label}
                >
                  <Icon className={`text-lg ${color}`} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Email: <a href="mailto:haidermdnaeem@gmail.com" className="text-gray-200 transition-colors hover:text-[#f306f3]">haidermdnaeem@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Md Naeem Haider. All rights reserved.</p>
          <p>Crafted with precision, clarity, and a premium feel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
