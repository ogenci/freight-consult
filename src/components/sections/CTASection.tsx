import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Phone, Clock } from "lucide-react";
import oceanFreightImg from "@/assets/images/ocean-freight.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: (d = 0) => ({ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.85, ease: EASE, delay: d } }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-3 mb-6">
      <div className="w-6 h-px bg-white/50" />
      <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white">{children}</span>
    </motion.div>
  );
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-[#002318] border-t border-white/8">
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <img src={oceanFreightImg} alt="" aria-hidden className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 lg:py-40 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <SectionLabel>Ready to Move?</SectionLabel>
          <div className="overflow-hidden mb-2">
            <motion.h2 variants={clipReveal} custom={0.05}
              className="text-4xl sm:text-5xl lg:text-8xl font-display font-bold tracking-[-0.02em] leading-[0.9] text-white"
            >
              Ready to move
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8 sm:mb-12">
            <motion.h2 variants={clipReveal} custom={0.15}
              className="text-4xl sm:text-5xl lg:text-8xl font-display font-bold tracking-[-0.02em] leading-[0.9] text-[#55ed9d]"
            >
              continents?
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={0.22} className="text-white/45 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
            Partner with Africa's most trusted freight forwarding and logistics company. Available 24/7 for urgent cargo needs.
          </motion.p>
          <motion.div variants={fadeUp} custom={0.28} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a href="mailto:info@freightconsult.com" data-testid="button-cta-quote"
              className="group inline-flex items-center justify-center gap-3 bg-[#55ed9d] text-[#004737] pl-8 sm:pl-10 pr-5 h-12 sm:h-14 font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#55ed9d]/80 transition-all duration-300"
            >
              Request a Quote
              <span className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#004737]/15 flex items-center justify-center transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              </span>
            </a>
            <a href="tel:+233240000000" data-testid="button-cta-contact"
              className="group inline-flex items-center justify-center gap-3 border border-white/15 text-white/65 px-6 sm:px-8 h-12 sm:h-14 font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
            >
              <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Call Us
            </a>
          </motion.div>
          <motion.div variants={fadeUp} custom={0.35} className="flex items-center justify-center gap-2 text-white/30">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase">Available 24 / 7 for urgent cargo needs</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
