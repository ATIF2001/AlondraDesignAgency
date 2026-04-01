export default function HowItWorksSection({ steps, image }) {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1fr] lg:gap-16 xl:gap-20">
        <div className="reveal text-left" data-reveal>
          <h2 className="section-title">
            How It Works
          </h2>
          <p className="body-copy mt-8 max-w-[32rem]">
            We believe that the best way to create successful marketing campaigns is to
            work closely with our clients to understand their goals and challenges.
          </p>

          <div className="soft-panel hover-lift mt-12 max-h-[430px] max-w-[32rem] overflow-hidden rounded-[2.5rem]">
            <img src={image} alt="How it works" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="space-y-8 pt-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                data-reveal
                data-delay={(index % 4) + 1}
                className="reveal hover-lift grid grid-cols-[5.75rem_1fr] items-start gap-6 rounded-[2rem] bg-[#141414] p-5"
              >
                <div className="flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-[1.5rem] bg-[#d9b43b] text-white">
                  <Icon className="h-9 w-9" strokeWidth={1.8} />
                </div>

                <div className="pt-1 text-left">
                  <h3 className="card-title">
                    {step.title}
                  </h3>
                  <p className="body-copy mt-3 max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
