import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { projectSectionCopy } from "../data/projectsContent";
import { CartoonButton } from "./ui/cartoon-button";

function ProjectLink({ href, label }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-white/26 hover:bg-white/10"
    >
      {label}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const techItems = project.tech.split(" ").filter(Boolean);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#121212] shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#121212]/95 px-5 py-4 backdrop-blur sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a514]">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/5 text-white transition hover:border-white/24 hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-8 px-5 py-5 sm:px-8 sm:py-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#1a1a1a]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[400px]"
              />
            </div>

            {project.embed ? (
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#101010]">
                <iframe
                  title={project.embed.title}
                  src={project.embed.iframeSrc}
                  allowFullScreen
                  className="aspect-video w-full border-0"
                />
              </div>
            ) : null}
          </div>

          <div className="text-left">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                {projectSectionCopy.tech}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techItems.map((item) => (
                  <span
                    key={`${project.slug}-${item}`}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-sm text-white/88"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                {projectSectionCopy.overview}
              </p>
              <p className="mt-4 text-base leading-8 text-white/72">{project.description}</p>
            </section>

            <section className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                {projectSectionCopy.features}
              </p>
              <div className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <p
                    key={feature}
                    className="rounded-[1rem] border border-white/8 bg-white/4 px-4 py-3 text-sm leading-7 text-white/78"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </section>

            {project.problems.length ? (
              <section className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {projectSectionCopy.problems}
                </p>
                <div className="mt-4 space-y-3">
                  {project.problems.map((problem) => (
                    <p
                      key={problem}
                      className="rounded-[1rem] border border-[#d4a514]/16 bg-[#d4a514]/6 px-4 py-3 text-sm leading-7 text-white/78"
                    >
                      {problem}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                {projectSectionCopy.impact}
              </p>
              <p className="mt-4 text-base leading-8 text-white/85">{project.impact}</p>
            </section>

            <div className="mt-8 flex flex-wrap gap-3">
              <ProjectLink href={project.websiteUrl} label={projectSectionCopy.visit} />
              <ProjectLink href={project.crmUrl} label={projectSectionCopy.crm} />
              <ProjectLink href={project.googlePlayUrl} label={projectSectionCopy.play} />
              <ProjectLink href={project.appStoreUrl} label={projectSectionCopy.app} />
              <ProjectLink href={project.behanceUrl} label={projectSectionCopy.behance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-12 text-center" data-reveal>
            <h2 className="pb-4 font-serif text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              {projectSectionCopy.title}
            </h2>
            <p className="body-copy mx-auto mt-4 max-w-2xl">{projectSectionCopy.subtitle}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                data-reveal
                data-delay={(index % 3) + 1}
                className={`reveal hover-lift soft-panel overflow-hidden bg-[#1f1f1f] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${
                  index === 1 || index === 4 ? "xl:-translate-y-10" : ""
                }`}
              >
                <div className="block w-full text-left">
                  <div className="aspect-[4/3] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="block h-full w-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </button>
                  </div>

                  <div className="px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#d4a514]">
                      {project.category}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="text-left"
                      >
                        <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                      </button>

                      <CartoonButton
                        label={projectSectionCopy.viewDetails}
                        ariaLabel={`Open ${project.title}`}
                        onClick={() => setActiveProject(project)}
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </>
  );
}
