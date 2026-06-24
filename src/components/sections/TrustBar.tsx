const clients = [
  { name: "Coca-Cola Beverages Africa", logo: "/images/logos/ccba.svg" },
  { name: "Puma Energy", logo: "/images/logos/puma.svg" },
  { name: "Huawei Technologies", logo: "/images/logos/huawei.png" },
  { name: "Mantrac Ghana", logo: "/images/logos/mantrac.svg" },
  { name: "PSA BDP Global", logo: "/images/logos/psabdp.svg" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-border overflow-hidden py-[14px] sm:py-[18px]">
      <div className="flex items-center">
        <div className="shrink-0 pl-6 pr-8 border-r border-border">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-foreground/80 whitespace-nowrap">Trusted By</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="marquee-track flex items-center flex-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="mx-10 shrink-0 flex items-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
