import { Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import logoPath from "@/assets/freight-consult-logo.svg";

export default function FooterSection() {
  return (
    <footer className="relative bg-[#55ed9d]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#002318]/20 to-transparent" />
      <div className="absolute right-0 bottom-12 text-[280px] font-display font-bold text-[#002318]/[0.06] leading-none select-none pointer-events-none">
        FC
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-12">
        <div className="grid lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-16 mb-16">
          <div>
            <img src={logoPath} alt="Freight Consult" className="h-9 w-auto mb-6 brightness-0" />
            <p className="text-sm text-[#002318] leading-relaxed mb-8 max-w-xs font-light">
              Africa's leading freight forwarding and logistics company. Primary Agent for PSA BDP Global network in Ghana. Est. 2006.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={14} />, label: "LinkedIn" },
                { icon: <SiFacebook size={14} />, label: "Facebook" },
                { icon: <SiInstagram size={14} />, label: "Instagram" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#002318]/20 flex items-center justify-center text-[#002318] hover:text-[#002318] hover:border-[#002318]/40 hover:bg-[#002318]/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#002318] mb-6">Services</h4>
            <ul className="space-y-3">
              {["Air Freight", "Ocean Freight", "Customs Brokerage", "Project Cargo", "Warehousing", "Ship Chandling"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#002318] hover:underline transition-all duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#002318] mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Global Network", "FAQs", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#002318] hover:underline transition-all duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#002318] mb-6">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: <MapPin size={14} />, text: "Airport Cargo Village\nAccra, Ghana" },
                { icon: <Phone size={14} />, text: "+233 24 000 0000" },
                { icon: <Mail size={14} />, text: "info@freightconsult.com" },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#002318]">
                  <span className="text-[#002318] mt-1 shrink-0">{c.icon}</span>
                  <span className="whitespace-pre-line font-light">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#002318]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#002318] tracking-wide">&copy; {new Date().getFullYear()} Freight Consult Ghana Limited. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-[11px] text-[#002318] hover:underline transition-all tracking-wide">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
