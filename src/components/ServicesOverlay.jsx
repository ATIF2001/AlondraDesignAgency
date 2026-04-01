import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { serviceGroups } from "../data/servicesCatalog";

export default function ServicesOverlay({ isOpen, onClose, onSelectService }) {
  const [openGroups, setOpenGroups] = useState(() => ({
    SOCIAL: true,
    CREATIVE: false,
    BRANDING: false,
    DIGITAL: false,
  }));

  const toggleGroup = (title) => {
    setOpenGroups((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute inset-y-0 left-0 right-0 overflow-y-auto bg-black transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:left-[220px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex items-start justify-between gap-6">
              <h2 className="font-serif text-5xl font-semibold uppercase italic tracking-[-0.05em] text-white sm:text-6xl">
                Services
              </h2>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close services overlay"
                className="hover-lift inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white transition hover:bg-white/12"
              >
                <X className="h-5 w-5" strokeWidth={2.8} />
              </button>
            </div>

            <div className="space-y-12">
              {serviceGroups.map((group) => {
                const isExpanded = openGroups[group.title];
                const Indicator = isExpanded ? ChevronUp : ChevronDown;

                return (
                  <section key={group.title} className="border-b border-white/8 pb-7 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.title)}
                      className="flex w-full items-center justify-between gap-6 text-left"
                    >
                      <h3 className="font-serif text-4xl font-semibold uppercase italic tracking-[-0.04em] text-white sm:text-5xl">
                        {group.title}
                      </h3>
                      <Indicator className="h-8 w-8 shrink-0 text-white" strokeWidth={2.2} />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isExpanded ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="min-h-0 space-y-3 overflow-hidden text-xl leading-8 text-white/88 sm:text-[1.7rem] sm:leading-10">
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <button
                              type="button"
                              onClick={() => onSelectService(item.slug)}
                              className="transition hover:text-[#d4a514]"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
