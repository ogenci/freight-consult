import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Plane, Ship, FileCheck, Truck, Warehouse, Anchor, Package2, ShieldAlert, ArrowRight } from "lucide-react";
import airFreightImg from "@/assets/images/air-freight.png";
import oceanFreightImg from "@/assets/images/ocean-freight.png";
import customsImg from "@/assets/images/customs-brokerage.png";
import haulageImg from "@/assets/images/haulage-transport.png";
import warehouseImg from "@/assets/images/warehouse-interior.png";
import shipChandlingImg from "@/assets/images/ship-chandling.png";
import cargoAircraftImg from "@/assets/images/cargo-aircraft.png";
import portContainersImg from "@/assets/images/port-containers.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  { num: "01", icon: <Plane className="w-5 h-5" />, title: "Air Freight",        desc: "Fast, prioritized air cargo connecting Ghana to global destinations with time-sensitive handling.", img: airFreightImg },
  { num: "02", icon: <Ship className="w-5 h-5" />,  title: "Ocean Freight",       desc: "Cost-effective sea freight across major trade routes for general and specialized cargo.", img: oceanFreightImg },
  { num: "03", icon: <FileCheck className="w-5 h-5" />, title: "Customs Brokerage", desc: "Expert navigation of Africa's most complex customs environments with zero-delay precision.", img: customsImg },
  { num: "04", icon: <Truck className="w-5 h-5" />, title: "Haulage & Transport", desc: "End-to-end inland distribution across borders and difficult terrains throughout West Africa.", img: haulageImg },
  { num: "05", icon: <Warehouse className="w-5 h-5" />, title: "Warehousing",     desc: "Secure storage, inventory management, and strategic distribution hubs across Ghana.", img: warehouseImg },
  { num: "06", icon: <Anchor className="w-5 h-5" />, title: "Ship Chandling",     desc: "Marine supplies, provisioning, and full vessel support services at Ghanaian ports.", img: shipChandlingImg },
  { num: "07", icon: <Package2 className="w-5 h-5" />, title: "Express Courier", desc: "FC Express door-to-door delivery across the African continent with real-time tracking.", img: cargoAircraftImg },
  { num: "08", icon: <ShieldAlert className="w-5 h-5" />, title: "Specialized Cargo", desc: "Defense, military, oversized, and mission-critical cargo with maximum security protocols.", img: portContainersImg },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
      className="group relative bg-white cursor-pointer h-full flex flex-col"
    >
      <div className="relative h-72 overflow-hidden">
        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-white/60">{s.num}</span>
        </div>
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
          {s.icon}
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-[16px] text-foreground mb-3">{s.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 group-hover:text-brass group-hover:gap-3 transition-all duration-300 self-start px-3 py-1.5 -ml-3 -mt-1.5 rounded-full border border-transparent group-hover:border-brass/50 transition-[color,gap,border-color] duration-500 ease-out">
          Explore <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

function CTACard({ i }: { i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
      className="group relative bg-[#002318] flex flex-col items-start justify-center text-left p-10 min-h-[380px] h-full"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(0,71,55,0.1),transparent)]" />
      <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white mb-5 relative">Need a Quote?</span>
      <h3 className="font-display font-bold text-2xl text-white mb-4 relative leading-snug">
        Tell us what<br />you need moved
      </h3>
      <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-[220px] relative">
        Get a personalized freight plan and pricing within hours — tailored to your cargo, route, and timeline.
      </p>
      <a
        href="#contact"
        className="group/btn inline-flex items-center gap-2.5 bg-[#55ed9d] text-[#004737] px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#55ed9d]/80 transition-all duration-300 relative"
      >
        Request a Quote
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const items = [...services, null] as (typeof services[0] | null)[];

  return (
    <section id="services" ref={ref} className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-px bg-brass/60" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass">Our Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.0] text-foreground"
            >
              End-to-End
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.0] text-[#004737]/50"
            >
              Orchestration.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="text-muted-foreground text-sm leading-relaxed max-w-xs lg:text-right"
          >
            A full suite of logistics solutions — engineered for scale, reliability, and the unique demands of African trade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((s, i) => {
            const r = Math.floor(i / 3);
            const c = i % 3;
            return (
              <div
                key={i}
                className="relative min-h-[440px] group border border-border hover:border-brass transition-colors duration-300"
              >
                <svg className="absolute z-20 -top-[3.5px] -left-[3.5px]" width="5" height="5" viewBox="0 0 5 5">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#004737" />
                </svg>
                {c === 2 && (
                  <svg className="absolute z-20 -top-[3.5px] -right-[3.5px]" width="5" height="5" viewBox="0 0 5 5">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#004737" />
                  </svg>
                )}
                {r === 2 && (
                  <svg className="absolute z-20 -bottom-[3.5px] -left-[3.5px]" width="5" height="5" viewBox="0 0 5 5">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#004737" />
                  </svg>
                )}
                {r === 2 && c === 2 && (
                  <svg className="absolute z-20 -bottom-[3.5px] -right-[3.5px]" width="5" height="5" viewBox="0 0 5 5">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#004737" />
                  </svg>
                )}
                {s ? (
                  <ServiceCard s={s} i={i} />
                ) : (
                  <CTACard i={i} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
