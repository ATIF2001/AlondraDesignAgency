export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="bg-[#111111] text-white">
      <div className="border-y border-white/10 bg-[#424242] px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            {title}
          </h1>
        </div>
      </div>

      <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl text-left">
            {eyebrow ? (
              <p className="page-eyebrow reveal" data-reveal>
                {eyebrow}
              </p>
            ) : null}
            <p className="body-copy reveal mt-5 max-w-3xl" data-reveal data-delay="1">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
