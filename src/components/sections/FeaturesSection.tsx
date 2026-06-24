import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FileCheck, Globe, TrendingUp, CheckCircle2, ShieldAlert, Plane, ArrowUpRight, Anchor, Fuel, Building2, Tractor, HeartPulse, Cog, BarChart3, ArrowRight, Star } from "lucide-react";
import teamOfficeImg from "@/assets/images/team-office.png";
import haulageImg from "@/assets/images/haulage-transport.png";
import portContainersImg from "@/assets/images/port-containers.png";
import airFreightImg from "@/assets/images/air-freight.png";
import cargoAircraftImg from "@/assets/images/cargo-aircraft.png";
import warehouseImg from "@/assets/images/warehouse-interior.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: (d = 0) => ({ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.85, ease: EASE, delay: d } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE, delay: d } }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className} custom={delay}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
      <div className={`w-8 h-[2px] rounded-full ${light ? "bg-white/50" : "bg-brass"}`} />
      <span className={`text-[11px] font-bold tracking-[0.3em] uppercase ${light ? "text-white/70" : "text-brass"}`}>
        {children}
      </span>
    </motion.div>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const inc = end / (2 * 60);
    const t = setInterval(() => {
      n += inc;
      if (n >= end) { setVal(end); clearInterval(t); } else setVal(Math.ceil(n));
    }, 1000 / 60);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-background border-t border-border py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <div className="relative overflow-hidden rounded-2xl min-h-[240px] sm:min-h-[320px] lg:min-h-[520px] lg:row-span-2 img-hover-zoom">
            <motion.img
              src={teamOfficeImg} alt="Freight Consult team"
              className="absolute inset-0 w-full h-full object-cover"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/60 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-[#002318]/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-white/10"
            >
              <div className="text-base sm:text-lg font-display font-bold text-white mb-0.5">PSA BDP</div>
              <div className="text-[13px] sm:text-[14px] leading-relaxed text-white/70">Primary Agent for the PSA BDP Global Logistics Network in Ghana</div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center bg-white border border-border rounded-2xl p-6 sm:p-8 lg:p-10">
            <Reveal>
              <SectionLabel>The Freight Consult Advantage</SectionLabel>
              <div className="overflow-hidden mb-1">
                <motion.h2 variants={clipReveal} custom={0.05} className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-[1.0] tracking-tight text-foreground">
                  When Failure Is
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-4 sm:mb-6">
                <motion.h2 variants={clipReveal} custom={0.12} className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-[1.0] tracking-tight text-brass">
                  Not an Option.
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} custom={0.18} className="text-muted-foreground leading-relaxed text-[13px] sm:text-[14px]">
                Supply chains in Africa present unique challenges — delays, compliance hurdles, infrastructural bottlenecks. For 20 years, we haven't just navigated these; we've conquered them.
              </motion.p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-6">
            <div className="bg-[#002318] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <Reveal>
                <motion.p variants={fadeUp} custom={0.1} className="text-white/60 leading-relaxed text-[13px] sm:text-[14px]">
                  From conflict zones in Mali and Niger, to orchestrating COVID-19 critical supply chains and managing complex military logistics. We bring elite global standards to local execution.
                </motion.p>
              </Reveal>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <Reveal>
                <motion.div variants={fadeUp} custom={0.1} className="flex sm:block justify-center gap-10 sm:gap-0 sm:text-center sm:space-y-7">
                  {[
                    { v: "2006", l: "Founded" },
                    { v: "24/7", l: "Availability" },
                  ].map((s, i) => (
                    <div key={s.l}>
                      <div className="text-2xl sm:text-3xl font-display font-bold text-[#002318]">{s.v}</div>
                      <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mt-1">{s.l}</div>
                    </div>
                  ))}
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { n: "01", title: "Consult & Plan", body: "We assess your cargo requirements, routes, compliance needs, and timelines to build a precision logistics plan.", icon: <Users className="w-6 h-6" /> },
  { n: "02", title: "Document & Comply", body: "Our experts handle all permits, customs documentation, and regulatory compliance across every jurisdiction.", icon: <FileCheck className="w-6 h-6" /> },
  { n: "03", title: "Move & Track", body: "Real-time visibility across every leg of the journey — air, sea, road — with proactive exception management.", icon: <Globe className="w-6 h-6" /> },
  { n: "04", title: "Deliver & Report", body: "On-time delivery with full chain-of-custody reporting and post-shipment analytics for continuous improvement.", icon: <TrendingUp className="w-6 h-6" /> },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="mb-16">
          <SectionLabel>Our Process</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
              How We Move
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#004737]/50">
              Your Cargo.
            </motion.h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="group relative border border-border bg-white p-7 hover:shadow-[0_8px_30px_rgba(0,35,24,0.10)] transition-all duration-300 overflow-hidden rounded-xl"
              >
                <div className="absolute -top-4 -right-2 text-8xl font-display font-bold text-foreground/[0.03] leading-none select-none">{s.n}</div>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#002318] flex items-center justify-center text-white mb-5">{s.icon}</div>
                  <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground mb-2">{s.n}</div>
                  <h3 className="font-display font-bold text-[16px] text-foreground mb-3">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden h-[460px] lg:h-full min-h-[380px] img-hover-zoom rounded-2xl">
            <motion.img
              src={haulageImg} alt="Freight operations"
              className="w-full h-full object-cover"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brass" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#002318]">Real-Time Visibility</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">Track every shipment across every leg with proactive updates and exception alerts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DifferentiatorsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const items = [
    { icon: <ShieldAlert className="w-5 h-5" />, tag: "Frontline Logistics", title: "Conflict Zone Operations", body: "Proven execution in Liberia, Sierra Leone, Niger, Burkina Faso, and Mali — environments where most logistics firms simply refuse to operate.", img: portContainersImg },
    { icon: <Plane className="w-5 h-5" />, tag: "Defense Grade", title: "Military & Defense Logistics", body: "Trusted for highly sensitive defense cargo requiring maximum security protocols, strict compliance, and absolute discretion across every transit.", img: airFreightImg },
    { icon: <Globe className="w-5 h-5" />, tag: "Mission Critical", title: "Crisis & Humanitarian Response", body: "Orchestrated critical supply chains for COVID-19 treatment centers across Ghana — pivoting on days' notice under global emergency conditions.", img: cargoAircraftImg },
  ];

  return (
    <section id="impact" ref={ref} className="bg-[#002318] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="mb-16">
          <SectionLabel light>Elite Capabilities</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-6xl font-display font-bold tracking-tight leading-[1.0] text-white">
              Operating Where
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-6xl font-display font-bold tracking-tight leading-[1.0] text-white/15">
              Others Cannot.
            </motion.h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_480px] gap-8 items-start">
          <div className="space-y-4">
            {items.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="group grid grid-cols-[80px_1fr] overflow-hidden rounded-xl border border-white/10 hover:border-brass/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img src={d.img} alt="" aria-hidden className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#002318]/40" />
                </div>
                <div className="p-6 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.3em] uppercase text-white/70 bg-white/10 px-2.5 py-1 rounded-full mb-3">
                    {d.icon}
                    {d.tag}
                  </div>
                  <h3 className="font-display font-bold text-white text-[16px] mb-2">{d.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{d.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden h-[500px] hidden lg:block img-hover-zoom rounded-2xl">
            <motion.img
              src={cargoAircraftImg} alt="Cargo operations"
              className="w-full h-full object-cover"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={scaleIn}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/70 mb-1">Our Reach</div>
                <div className="font-display font-bold text-white text-lg">Operations in 15+ African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#002318]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-14">
          <SectionLabel light><span className="text-white/70">By the Numbers</span></SectionLabel>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden">
          {[
            { end: 20, suffix: "+", label: "Years of Experience" },
            { end: 10000, suffix: "+", label: "Shipments Cleared" },
            { end: 7, suffix: "", label: "Global Affiliate Offices" },
            { end: 4, suffix: "", label: "Strategic Ghana Offices" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="p-8 lg:p-12 flex flex-col items-center border-r border-white/10 last:border-r-0 border-b lg:border-b-0"
            >
              <div className="w-full flex justify-center text-4xl lg:text-5xl font-display font-bold text-white leading-none mb-3">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40 text-center">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AccreditationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const accreditations = [
    {
      name: "PSA BDP Global",
      role: "Primary Agent — Ghana",
      logo: "/images/logos/psabdp.svg",
      description: "Strategic logistics partner as the primary PSA BDP agent in Ghana, providing end-to-end global freight forwarding solutions.",
    },
    {
      name: "IATA Certified",
      role: "Air Cargo Handling",
      logo: "/images/logos/iata.svg",
      description: "Accredited by the International Air Transport Association, ensuring world-class air cargo handling and safety standards.",
    },
    {
      name: "GIFF Member",
      role: "Ghana Institute of Freight Forwarders",
      logo: "/images/logos/giff.png",
      description: "Proud member of the Ghana Institute of Freight Forwarders, driving professionalism in Ghana's freight forwarding industry.",
    },
    {
      name: "FIATA Affiliate",
      role: "International Federation",
      logo: "/images/logos/fiata.svg",
      description: "Affiliated with the International Federation of Freight Forwarders Associations, the global voice of freight logistics.",
    },
    {
      name: "ISO Compliant",
      role: "Quality Management Systems",
      logo: "/images/logos/iso.svg",
      description: "Adhering to International Organization for Standardization quality management systems for consistent service excellence.",
    },
    {
      name: "GRA Certified",
      role: "Ghana Revenue Authority",
      logo: "/images/logos/gra.png",
      description: "Registered and compliant with the Ghana Revenue Authority, ensuring all customs and tax obligations are met.",
    },
  ];

  return (
    <section ref={ref} className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Globally Recognised</SectionLabel>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-foreground">
              Accreditations &amp;
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-[#004737]/50">
              Memberships.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={0.18} className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Our credentials aren't just plaques on a wall — they represent the rigorous global standards we hold ourselves to on every single shipment.
          </motion.p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {accreditations.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
              className="group perspective-[1000px] h-64"
            >
              <div className="relative w-full h-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 border border-border group-hover:border-[#55ed9d] bg-white flex items-center justify-center p-8 [backface-visibility:hidden] transition-colors duration-300">
                  <img
                    src={a.logo}
                    alt={a.name}
                    className="h-14 w-auto max-w-[160px] object-contain"
                  />
                </div>
                <div className="absolute inset-0 border border-border group-hover:border-[#55ed9d] bg-[#002318] flex flex-col items-center justify-center gap-3 p-7 [transform:rotateY(180deg)] [backface-visibility:hidden] transition-colors duration-300">
                  <p className="text-xs text-white/80 text-center leading-relaxed">{a.description}</p>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#55ed9d]">{a.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12">
          <motion.div variants={fadeUp} custom={0.1}
            className="bg-[#002318] text-white p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl"
          >
            <div className="text-center lg:text-left">
              <div className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-2">Network Reach</div>
              <div className="text-2xl font-display font-bold">Part of the PSA BDP Global Network</div>
            </div>
            <div className="flex gap-8 lg:gap-12 text-center">
              {[
                { v: "140+", l: "Countries" },
                { v: "300+", l: "Offices Worldwide" },
                { v: "Tier 1", l: "Classification" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-display font-bold text-white">{s.v}</div>
                  <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const caseStudies = [
    { client: "Coca-Cola Beverages Africa", tag: "Cold Chain Logistics", headline: "Maintaining cold chain integrity across 6 West African countries during peak season.", result: "Zero temperature excursions across 480 shipments", img: warehouseImg },
    { client: "COVID-19 National Relief", tag: "Crisis & Humanitarian", headline: "Delivering 120 tonnes of critical PPE and medical supplies to Ghana in under 72 hours.", result: "72-hour delivery from source to treatment centers", img: airFreightImg },
    { client: "West African Defense Command", tag: "Military & Defense", headline: "Orchestrating classified military equipment clearance through 3 conflict-adjacent borders.", result: "100% secure delivery. Zero incidents.", img: portContainersImg },
  ];

  return (
    <section ref={ref} className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="mb-16">
          <SectionLabel>Proven Results</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-foreground">
              Real Challenges.
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-[#004737]/50">
              Real Results.
            </motion.h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="group bg-white border border-border hover:border-brass/40 hover:shadow-[0_12px_36px_rgba(0,71,55,0.16)] transition-all duration-400 overflow-hidden rounded-2xl"
            >
              <div className="relative h-48 overflow-hidden img-hover-zoom">
                <img src={c.img} alt={c.client} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/75 to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex text-[9px] font-bold tracking-[0.25em] uppercase text-white bg-white/20 border border-white/20 px-2.5 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">{c.client}</div>
                <h3 className="font-display font-bold text-[15px] text-foreground leading-snug mb-5">{c.headline}</h3>
                <div className="border-t border-border pt-4 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span className="text-[12px] font-bold text-[#002318]">{c.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const heroQuote = {
    text: "Freight Consult is the only partner we trust with our mission-critical deliveries across West Africa. Their ability to navigate customs and local infrastructure challenges is unmatched — and they've never missed a deadline that truly mattered.",
    author: "Samuel O.",
    role: "Regional Supply Chain Director",
    initials: "SO",
  };

  const secondaryQuotes = [
    { text: "When we needed to establish operations in volatile regions, they were the only logistics firm that didn't hesitate. Precision, security, and absolute reliability every time.", author: "Elena R.", role: "VP of Operations, Energy Sector", initials: "ER" },
    { text: "Being part of the PSA BDP network means they bring global tier-1 standards, but their deep local knowledge of African terrain is what truly sets them apart.", author: "Kwame A.", role: "Head of Procurement, Tech Infrastructure", initials: "KA" },
    { text: "Their cold chain capabilities in West Africa are world-class. Zero compromises, zero excuses — exactly what you need when human lives depend on delivery integrity.", author: "Dr. Aminata T.", role: "Director of Medical Logistics", initials: "AT" },
  ];

  return (
    <section ref={ref} className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="mb-16">
          <SectionLabel>Client Perspectives</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-foreground">The Verdict From</motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-[#004737]/50">Industry Leaders.</motion.h2>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10"
        >
          <div className="relative bg-[#002318] rounded-2xl overflow-hidden">
            <div className="p-8 lg:p-12 lg:pr-20">
              <span className="text-6xl lg:text-8xl font-display font-bold text-[#55ed9d]/10 leading-none block mb-2">&ldquo;</span>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 mb-10 max-w-3xl">
                {heroQuote.text}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-[#55ed9d]/15 flex items-center justify-center text-[#55ed9d] font-display font-bold text-xs">{heroQuote.initials}</div>
                <div>
                  <div className="font-display font-semibold text-sm text-white">{heroQuote.author}</div>
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">{heroQuote.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {secondaryQuotes.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.08 }}
              className="group bg-white border border-border rounded-xl p-7 lg:p-8 hover:border-brass/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-400"
            >
              <span className="text-2xl font-display font-bold text-brass/15 leading-none block mb-3">&ldquo;</span>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-brass/8 flex items-center justify-center text-brass/60 font-display font-bold text-[10px]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-[13px] text-foreground">{t.author}</div>
                  <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  { img: haulageImg, name: "Oil & Gas", desc: "Specialized logistics for upstream and downstream energy operations across volatile terrains." },
  { img: portContainersImg, name: "Mining & Resources", desc: "Heavy equipment transport and bulk commodity shipping to remote extraction sites." },
  { img: teamOfficeImg, name: "Infrastructure & Construction", desc: "Project cargo logistics for large-scale infrastructure development across West Africa." },
  { img: airFreightImg, name: "Healthcare & Pharma", desc: "Temperature-controlled cold chain logistics for pharmaceuticals and medical supplies." },
  { img: cargoAircraftImg, name: "Defense & Security", desc: "Classified cargo handling with maximum security protocols and government compliance." },
  { img: warehouseImg, name: "Agriculture & FMCG", desc: "End-to-end supply chain solutions for perishable goods and fast-moving consumer products." },
];

export function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="mb-16">
          <SectionLabel>Industries</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-foreground">Where We</motion.h2>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-[#004737]/50">Move Industries.</motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={0.18} className="text-muted-foreground/70 max-w-xl text-sm leading-relaxed">
            From the oil fields of the Niger Delta to the hospitals of Accra — our logistics adapt to the demands of every sector.
          </motion.p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              className="group relative overflow-hidden bg-white border border-border hover:shadow-[0_12px_36px_rgba(0,71,55,0.12)] transition-all duration-400"
            >
              <div className="relative h-72 overflow-hidden img-hover-zoom">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/80 via-[#002318]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-lg text-white mb-1">{ind.name}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-[#faf8f5] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
        <Reveal className="mb-10 sm:mb-16">
          <SectionLabel>Featured Project</SectionLabel>
          <div className="overflow-hidden mb-1">
            <motion.h2 variants={clipReveal} custom={0.05} className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.05]">Mission-Critical</motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={clipReveal} custom={0.12} className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold tracking-tight text-[#004737]/40 leading-[1.05]">By Design.</motion.h2>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start"
        >
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-xl overflow-hidden bg-[#002318]">
              <img src={cargoAircraftImg} alt="" aria-hidden className="w-full h-56 sm:h-72 lg:h-full lg:min-h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002318]/60 via-transparent to-transparent" />
            </div>
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border border-brass/20 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-display font-bold text-[#004737]">480</div>
                <div className="text-[7px] font-semibold tracking-[0.3em] uppercase text-[#004737]/50">Shipments</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brass/8 border border-brass/15 text-[10px] font-bold tracking-[0.25em] uppercase text-brass/80 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brass/50" />
              Cold Chain Logistics
            </div>

            <h3 className="text-lg sm:text-xl lg:text-3xl font-display font-bold text-foreground leading-tight mb-4 sm:mb-5 max-w-xl">
              Maintaining cold chain integrity across 6 West African countries during peak season.
            </h3>

            <p className="text-muted-foreground/70 text-sm leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Coca-Cola Beverages Africa trusted Freight Consult to orchestrate a synchronized cold chain operation spanning 6 countries, 12 warehouses, and 480 temperature-controlled shipments — with zero excursions.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
              {[
                { v: "480", l: "Shipments" },
                { v: "6", l: "Countries" },
                { v: "0", l: "Temperature Excursions" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#004737]">{s.v}</div>
                  <div className="text-[8px] sm:text-[9px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-5 pt-5 sm:pt-6 border-t border-border/50">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#004737] flex items-center justify-center text-white font-display font-bold text-xs">CB</div>
              <div className="min-w-0">
                <div className="text-[13px] sm:text-sm font-display font-semibold text-foreground">Coca-Cola Beverages Africa</div>
                <div className="text-[8px] sm:text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60">Client since 2018</div>
              </div>
              <div className="hidden sm:flex items-center gap-1 ml-auto shrink-0">
                {[1,2,3,4,5].map((n) => (
                  <Star key={n} className="w-3 h-3 fill-[#004737]/15 text-[#004737]/10" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
