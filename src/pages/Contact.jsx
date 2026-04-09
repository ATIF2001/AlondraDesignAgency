import {
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  SendHorizonal,
} from "lucide-react";
import Seo from "../components/Seo";
import { useLeadForm } from "../hooks/useLeadForm";

const contactCards = [
  {
    title: "Phone Number",
    icon: Phone,
    details: [
      { label: "800-644-000", href: "tel:800644000" },
      { label: "+97126311977", href: "tel:+97126311977" },
    ],
  },
  {
    title: "Abu Dhabi",
    icon: MapPin,
    details: [
      { label: "Abu Dhabi (Head Office)" },
      { label: "Al Jazira Club - Tower A, Al Muroor St - floor 8" },
    ],
  },
  {
    title: "Email Address",
    icon: Mail,
    details: [
      { label: "info@joveraits.ae", href: "mailto:info@joveraits.ae" },
      { label: "info@jovera.ae", href: "mailto:info@jovera.ae" },
    ],
  },
];

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.3 9.98h3.28v9.9H5.3v-9.9Zm5.16 0h3.14v1.35h.04c.44-.83 1.5-1.7 3.08-1.7 3.3 0 3.9 2.17 3.9 5v5.25h-3.27v-4.66c0-1.11-.02-2.55-1.55-2.55-1.56 0-1.8 1.22-1.8 2.47v4.74h-3.27v-9.9Z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.2a2.8 2.8 0 0 0-1.98-1.98C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.62.47A2.8 2.8 0 0 0 2.4 7.2C1.93 8.94 1.93 12 1.93 12s0 3.06.47 4.8a2.8 2.8 0 0 0 1.98 1.98c1.74.47 7.62.47 7.62.47s5.88 0 7.62-.47a2.8 2.8 0 0 0 1.98-1.98c.47-1.74.47-4.8.47-4.8s0-3.06-.47-4.8ZM9.9 15.15v-6.3L15.35 12 9.9 15.15Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.93 1.35a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H7.5v3h2.7v8h3.3Z" />
    </svg>
  );
}

function TiktokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.7 3c.18 1.48 1.02 2.86 2.31 3.71.92.61 1.97.94 3.05.97v3.07a8.5 8.5 0 0 1-4.7-1.41v5.8c0 3.5-2.83 6.33-6.33 6.33A6.33 6.33 0 0 1 3.7 15.1c0-3.5 2.83-6.33 6.33-6.33.31 0 .61.02.91.07v3.13a3.2 3.2 0 0 0-.91-.13 3.26 3.26 0 0 0 0 6.52c1.69 0 3.11-1.3 3.24-2.98V3h2.43Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jovera/", icon: LinkedinIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@jovera.ae", icon: TiktokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@joveragroup/null", icon: YoutubeIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/accounts/login/?next=%2Fjoveraa.ae%2F&source=omni_redirect&hl=en",
    icon: InstagramIcon,
  },
  { label: "Facebook", href: "https://www.facebook.com/joveraa.ae/", icon: FacebookIcon },
];

const inputClassName =
  "w-full border-b border-white/30 bg-transparent pb-3 text-lg text-white outline-none placeholder:text-transparent focus:border-white";

export default function Contact() {
  const { formValues, isSubmitting, status, handleChange, handleSubmit } = useLeadForm();

  return (
    <section className="bg-[#111111] text-white">
      <Seo
        title="Contact Alondra"
        description="Contact Alondra for digital marketing, branding, web development, SEO, SEM, and production services. Reach our Abu Dhabi office or message us on WhatsApp."
        path="/contact"
        keywords="contact Alondra, Abu Dhabi marketing agency, WhatsApp business contact, branding agency UAE"
      />
      <div className="border-y border-white/10 bg-[#424242] px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 xl:grid-cols-[1.08fr_0.84fr_auto] xl:items-start">
            <form
              onSubmit={handleSubmit}
              className="border border-white/20 bg-[#121212] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14"
            >
              <div className="space-y-8">
                <label className="block">
                  <span className="text-[1.15rem] text-white/95">Name</span>
                  <input
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className="text-[1.15rem] text-white/95">Phone Number</span>
                  <input
                    name="phone"
                    type="text"
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className="text-[1.15rem] text-white/95">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className="text-[1.15rem] text-white/95">Message</span>
                  <textarea
                    name="description"
                    rows="4"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </label>

                {status.message ? (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-[#d4a514]" : "text-[#ff8f8f]"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 inline-flex min-w-28 items-center justify-center rounded-full bg-white px-8 py-3 text-xl font-medium text-black transition hover:bg-[#e8e8e8]"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>

            <div className="xl:pl-4">
              <div className="overflow-hidden bg-[#1a1a1a] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                <iframe
                  title="Abu Dhabi map"
                  src="https://www.google.com/maps?q=Abu%20Dhabi&z=11&output=embed"
                  className="h-[420px] w-full min-w-0 border-0 sm:h-[520px] xl:h-[640px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <a
              href="https://wa.me/97126311977"
              aria-label="Let's talk"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:flex xl:min-h-[640px] xl:flex-col xl:items-center xl:justify-center xl:gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.25)]">
                <MessageCircleMore className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <span className="text-[2rem] font-medium tracking-[-0.03em] text-white [writing-mode:vertical-rl] [text-orientation:mixed]">
                Let&apos;s talk
              </span>
            </a>
          </div>

          <div className="mt-16 rounded-[2.2rem] bg-[#1d1d1d] px-6 py-7 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
              {contactCards.map(({ title, icon, details }) => {
                const IconComponent = icon;

                return (
                  <div key={title} className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#2a2a31] text-white">
                      <IconComponent className="h-8 w-8" strokeWidth={1.9} />
                    </div>

                    <div>
                      <h2 className="text-[1.6rem] font-medium tracking-[-0.03em] text-white">
                        {title}
                      </h2>
                      <div className="mt-3 space-y-1 text-lg leading-8 text-white/70">
                        {details.map((detail) => (
                          <p key={detail.label}>
                            {detail.href ? (
                              <a href={detail.href} className="transition hover:text-[#d4a514]">
                                {detail.label}
                              </a>
                            ) : (
                              detail.label
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-7">
            <p className="text-[1.7rem] text-white/90">Follow up :</p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon }) => {
                const IconComponent = icon;

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#232323] text-white transition hover:bg-[#2e2e2e] hover:text-[#d4a514]"
                  >
                    <IconComponent className="h-6 w-6" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-center xl:hidden">
            <a
              href="https://wa.me/97126311977"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#1b1b1b] px-5 py-3 text-lg text-white transition hover:border-white/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircleMore className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span>Let&apos;s talk</span>
              <SendHorizonal className="h-5 w-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
