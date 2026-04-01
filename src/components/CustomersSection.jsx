export default function CustomersSection({ customers }) {
  return (
    <section className="bg-black px-6 py-10 sm:px-10 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="reveal text-2xl font-semibold text-white sm:text-3xl" data-reveal>
          Trusted and valued by 100+ customers including
        </h2>

        <div
          className="reveal hover-lift mt-10 bg-[#171717] px-8 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:px-10 lg:px-12"
          data-reveal
          data-delay="1"
        >
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 xl:grid-cols-5">
            {customers.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                data-reveal
                className="customer-logo-item reveal flex h-20 items-center justify-center"
                style={{
                  transitionDelay: `${0.14 * index}s`,
                  animationDelay: `${1.1 + index * 0.16}s`,
                }}
              >
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="max-h-16 w-auto object-contain opacity-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
