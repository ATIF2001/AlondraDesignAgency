import { Mail, MapPin, Phone } from "lucide-react";
import { CartoonButton } from "./ui/cartoon-button";

export default function ContactSection({
  sectionRef,
  title = "Contact us today",
  description = "We'd love to hear from you. Contact us and our team will get back to you as soon as possible.",
}) {
  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center" data-reveal>
          <h2 className="section-title">{title}</h2>
          <p className="body-copy mt-5">{description}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16">
          <div
            className="reveal hover-lift bg-[#1c1c1c] px-8 py-10 sm:px-10 sm:py-12"
            data-reveal
            data-delay="1"
          >
            <h3 className="card-title text-left">Contact Info</h3>

            <div className="mt-12 space-y-12">
              <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                  <MapPin className="h-9 w-9" strokeWidth={1.8} />
                </div>
                <div>
                        <h4 className="text-2xl font-semibold text-white">Abu Dhabi</h4>
                  <div className="mt-4 h-px w-full bg-white/8" />
                        <p className="body-copy mt-4">
                          Abu Dhabi (Head Office)
                          <br />
                          Al Jazira Club - Tower A, Al Muroor St - floor 8
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                  <Phone className="h-9 w-9" strokeWidth={1.8} />
                </div>
                <div>
                        <h4 className="text-2xl font-semibold text-white">Phone Number</h4>
                        <p className="body-copy mt-4">
                          800-644-000
                          <br />
                          +97126311977
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                  <Mail className="h-9 w-9" strokeWidth={1.8} />
                </div>
                <div>
                        <h4 className="text-2xl font-semibold text-white">Email Address</h4>
                        <p className="body-copy mt-4">
                          info@joveraits.ae
                          <br />
                          info@jovera.ae
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="reveal hover-lift border border-white/35 px-8 py-10 sm:px-12 sm:py-12"
            data-reveal
            data-delay="2"
          >
            <div className="space-y-10 text-left">
              <label className="block">
                <span className="text-2xl text-white">Name</span>
                <input
                  type="text"
                  className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                />
              </label>

              <label className="block">
                <span className="text-2xl text-white">Phone Number</span>
                <input
                  type="text"
                  className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                />
              </label>

              <label className="block">
                <span className="text-2xl text-white">Email</span>
                <input
                  type="email"
                  className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                />
              </label>

              <label className="block">
                <span className="text-2xl text-white">Message</span>
                <textarea
                  rows="4"
                  className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                />
              </label>

              <CartoonButton
                type="submit"
                label="SUMIT"
                color="bg-white"
                textClassName="text-black"
                borderClassName="border-[#d8d8d8]"
                hoverShadow="#9c9c9c"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
