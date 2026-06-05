const ITEMS = [
  "Fenêtres & Portes",
  "Volets & Stores",
  "Pergolas & Vérandas",
  "Portails & Clôtures",
  "Escaliers",
  "Portes de Garage",
  "Terrasses Bois",
  "Automatismes",
];

export default function MarqueeTicker() {
  // Duplicate items so the loop is seamless
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden py-4 bg-beige"
      style={{ borderTop: "0.5px solid #d7c8b3", borderBottom: "0.5px solid #d7c8b3" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center font-sans text-[11px] uppercase tracking-[0.18em] text-dark"
          >
            {item}
            <span className="mx-5 text-caramel select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
