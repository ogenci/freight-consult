import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Menu } from "lucide-react";
import logoPath from "@/assets/freight-consult-logo.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className={`pointer-events-auto mt-4 md:mt-5 transition-all duration-500 border border-white/15 w-[90%] md:w-auto md:min-w-[816px] ${
            scrolled
              ? "bg-[#002318]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,35,24,0.40)]"
              : "bg-[#002318]/70 backdrop-blur-lg"
          }`}
          style={{ borderRadius: "9999px" }}
        >
          <div className="flex items-center px-3 md:px-5 h-12 md:h-14 w-full gap-4">
            <a href="#" className="flex items-center shrink-0">
              <img src={logoPath} alt="Freight Consult" className="h-5 md:h-6 w-auto brightness-0 invert" />
            </a>

            <div className="hidden md:flex items-center gap-1 mx-auto">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 border border-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center shrink-0">
              <a
                href="#contact"
                data-testid="button-nav-quote"
                className="group inline-flex items-center gap-1.5 bg-[#55ed9d] text-[#004737] px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase rounded-full hover:bg-[#55ed9d]/80 transition-colors"
              >
                Get a Quote
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0 ml-auto"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <motion.div
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#002318] flex flex-col items-center justify-center px-6"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className="text-3xl font-display font-bold text-white/80 hover:text-[#55ed9d] transition-colors py-3 w-full max-w-xs text-center"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.3 }}
              onClick={() => setOpen(false)}
              className="mt-10 group inline-flex items-center gap-2.5 bg-[#55ed9d] text-[#004737] px-8 py-4 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#55ed9d]/80 transition-colors"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
