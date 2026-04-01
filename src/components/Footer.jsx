import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { footerPageItems } from "../data/navigation";

const services = [
  "social media marketing",
  "influencer marketing",
  "media production",
  "Content Creator",
  "digital devoplment",
];
const branches = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H7.5v3h2.7v8h3.3Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.3 9.98h3.28v9.9H5.3v-9.9Zm5.16 0h3.14v1.35h.04c.44-.83 1.5-1.7 3.08-1.7 3.3 0 3.9 2.17 3.9 5v5.25h-3.27v-4.66c0-1.11-.02-2.55-1.55-2.55-1.56 0-1.8 1.22-1.8 2.47v4.74h-3.27v-9.9Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 7.15c.72-.05 1.44-.28 2.1-.6-.25.76-.8 1.4-1.47 1.82v.46c0 4.72-3.6 10.16-10.16 10.16-2.02 0-3.9-.6-5.47-1.61.28.03.57.04.87.04 1.67 0 3.2-.56 4.42-1.52a3.58 3.58 0 0 1-3.34-2.48c.22.04.45.07.69.07.33 0 .65-.04.95-.12A3.57 3.57 0 0 1 4.62 10v-.04c.48.27 1.03.43 1.62.45a3.57 3.57 0 0 1-1.11-4.76 10.14 10.14 0 0 0 7.36 3.73 3.58 3.58 0 0 1 6.1-3.26 7.1 7.1 0 0 0 2.27-.87 3.58 3.58 0 0 1-1.57 1.97Z" />
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

const socials = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "YouTube", icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#202020] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.95fr_1.2fr_0.85fr] lg:gap-16">
          <div className="flex items-start">
            <img src={logo} alt="Alondra logo" className="w-56 max-w-full" />
          </div>

          <div className="text-left">
            <h3 className="text-3xl font-semibold text-white">Pages</h3>
            <ul className="mt-8 space-y-5 text-[1.65rem] leading-none text-white/92">
              {footerPageItems.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.path} className="transition hover:text-[#d4a514]">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-3xl font-semibold text-white">Services</h3>
            <ul className="mt-8 space-y-5 text-[1.65rem] leading-none text-white/92">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-3xl font-semibold text-white">Branches</h3>
            <ul className="mt-8 space-y-5 text-[1.65rem] leading-none text-white/92">
              {branches.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/6 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-left text-[1.35rem] text-white/92">Terms & Conditions</p>
          <p className="text-center text-[1.35rem] text-white/92">
            @2025 Jovera Group. All Rights Reserved.
          </p>
          <div className="flex items-center justify-start gap-4 lg:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="hover-lift inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#161616] text-white transition hover:bg-[#2a2a2a]"
                >
                  <Icon className="h-6 w-6 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
