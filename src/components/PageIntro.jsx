export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="bg-black px-6 pt-16 pb-10 sm:px-10 lg:px-16 lg:pt-20 lg:pb-14 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-4xl text-left" data-reveal>
          {eyebrow ? (
            <p className="page-eyebrow">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="page-title mt-4">
            {title}
          </h1>
          <p className="body-copy mt-6 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
