import { Mail, MapPin, Phone, X } from "lucide-react";
import { CartoonButton } from "./ui/cartoon-button";

export default function StartProjectOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/65 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute inset-y-0 right-0 left-0 overflow-y-auto bg-[#0f0f0f] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:left-[220px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-screen items-center px-6 py-6 sm:px-10 lg:px-16 lg:py-6 xl:px-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col justify-center">
            <div className="mb-5 flex items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a514]">
                  Start Project
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Tell us about your next idea
                </h2>
              </div>

              <div onClick={onClose} className="cursor-pointer border border-white/20 rounded-full p-2 hover:border-amber-400 hover:text-amber-400 ">
                <X />
              </div>

    
            </div>

            <p className="max-w-3xl text-left text-sm leading-7 text-white/72 sm:text-base">
              Share your goals, timeline, and what kind of support you need. We&apos;ll review
              it and get back to you with the right plan.
            </p>

            <div className="mt-6 grid min-h-[min(66vh,640px)] gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:gap-8">
              <div className="hover-lift bg-[#1c1c1c] px-7 py-7 sm:px-8 sm:py-8">
                <h3 className="text-left text-3xl font-semibold text-white">Contact Info</h3>

                <div className="mt-8 space-y-8">
                  <div className="grid grid-cols-[4.5rem_1fr] gap-5 text-left">
                    <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                      <MapPin className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">Abu Dhabi</h4>
                      <div className="mt-3 h-px w-full bg-white/8" />
                      <p className="mt-3 text-base leading-7 text-white/65">
                        Abu Dhabi (Head Office)
                        <br />
                        Al Jazira Club - Tower A, Al Muroor St - floor 8
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[4.5rem_1fr] gap-5 text-left">
                    <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                      <Phone className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">Phone Number</h4>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        800-644-000
                        <br />
                        +97126311977
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[4.5rem_1fr] gap-5 text-left">
                    <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                      <Mail className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">Email Address</h4>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        info@joveraits.ae
                        <br />
                        info@jovera.ae
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="hover-lift border border-white/35 px-7 py-7 sm:px-10 sm:py-8">
                <div className="space-y-6 text-left">
                  <label className="block">
                    <span className="text-xl text-white">Name</span>
                    <input
                      type="text"
                      className="mt-3 w-full border-b border-white/35 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/20 focus:border-white"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xl text-white">Phone Number</span>
                    <input
                      type="text"
                      className="mt-3 w-full border-b border-white/35 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/20 focus:border-white"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xl text-white">Email</span>
                    <input
                      type="email"
                      className="mt-3 w-full border-b border-white/35 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/20 focus:border-white"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xl text-white">Project Type</span>
                    <input
                      type="text"
                      className="mt-3 w-full border-b border-white/35 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/20 focus:border-white"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xl text-white">Message</span>
                    <textarea
                      rows="3"
                      className="mt-3 w-full border-b border-white/35 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/20 focus:border-white"
                    />
                  </label>

                  <CartoonButton
                    type="submit"
                    label="Submit"
                    color="bg-white"
                    textClassName="text-black"
                    borderClassName="border-[#d8d8d8]"
                    hoverShadow="#8f8f8f"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
