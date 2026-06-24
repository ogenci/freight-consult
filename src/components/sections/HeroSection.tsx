import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portContainersImg from "@/assets/images/port-containers.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: (d = 0) => ({ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.85, ease: EASE, delay: d } }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="fixed inset-0 bg-[#002318]">
        <img src={portContainersImg} alt="" aria-hidden className="w-full h-full object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 bg-[#002318]/50" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-28 right-8 lg:right-14 z-10 hidden md:flex flex-col items-end gap-1"
      >
        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white">Est.</span>
        <span className="text-6xl font-display font-bold text-white leading-none">2006</span>
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/70">Ghana · Africa · Global</span>
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 sm:pb-20 lg:pb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} custom={0.1} className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-10 h-[2px] bg-white/60 rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-white/80">Primary PSA BDP Agent · Ghana</span>
          </motion.div>

          <div className="overflow-hidden mb-1">
            <motion.h1 variants={clipReveal} custom={0.15}
              className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-display font-bold leading-[0.92] tracking-[-0.03em] text-white"
            >
              We Move Africa's
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 variants={clipReveal} custom={0.28}
              className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-display font-bold leading-[0.92] tracking-[-0.03em]"
            >
              <span className="text-white">Most </span>
              <span className="text-[#55ed9d]">Critical</span>
              <span className="text-white"> Cargo.</span>
            </motion.h1>
          </div>

          <motion.p variants={fadeUp} custom={0.38}
            className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 max-w-md leading-relaxed mb-8 sm:mb-10 font-light"
          >
            Twenty years orchestrating freight across Africa's toughest corridors — from Lagos to Kandahar, conflict zones to COVID relief.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.45} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" data-testid="button-hero-primary"
              className="group inline-flex items-center justify-center gap-3 bg-[#55ed9d] text-[#004737] pl-7 sm:pl-8 pr-4 h-12 sm:h-13 font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#55ed9d]/80 transition-all duration-300"
            >
              Request a Quote
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#004737]/15 flex items-center justify-center transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              </span>
            </a>
            <a href="#services" data-testid="button-hero-secondary"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/25 text-white px-6 sm:px-7 h-12 sm:h-13 font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-white transition-all duration-300"
            >
              Explore Services
              <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
        className="relative z-10 border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20 *:border-r *:border-white/20 [&>*:nth-child(2n)]:border-r-0 sm:[&>*:nth-child(2n)]:border-r sm:[&>*:nth-child(4)]:border-r-0">
          {[
            { v: "20+", l: "Years Experience" },
            { v: "10K+", l: "Shipments Cleared" },
            { v: "7", l: "Global Offices" },
            { v: "99.8%", l: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.l} className="py-2 px-1 sm:py-4 sm:px-4 lg:px-10 text-center">
              <div className="text-base sm:text-2xl font-display font-bold text-white">{s.v}</div>
              <div className="text-[8px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase text-white/60 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
