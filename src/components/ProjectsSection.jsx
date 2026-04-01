import { ArrowRight } from "lucide-react";
import { CartoonButton } from "./ui/cartoon-button";

export default function ProjectsSection({ projects, onProjectClick }) {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 text-center" data-reveal>
          <h2 className="pb-10 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              data-reveal
              data-delay={(index % 3) + 1}
              className={`reveal hover-lift soft-panel overflow-hidden bg-[#1f1f1f] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${
                index === 1 || index === 4 ? "xl:-translate-y-10" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-center justify-between px-6 py-5">
                <h3 className="text-2xl font-medium text-white">{project.title}</h3>

                <CartoonButton
                  label="Open project"
                  ariaLabel={`Open ${project.title}`}
                  onClick={onProjectClick}
                  color="bg-[#d4a514]"
                  textClassName="text-black"
                  borderClassName="border-[#111]"
                  hoverShadow="#8a6700"
                  className="gold-pulse"
                  icon={ArrowRight}
                  iconOnly
                  iconClassName="h-5 w-5 shrink-0 text-black"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
