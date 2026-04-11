import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { footerPageItems, routes } from "../data/navigation";

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

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.93 1.35a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
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

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.2a2.8 2.8 0 0 0-1.98-1.98C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.62.47A2.8 2.8 0 0 0 2.4 7.2C1.93 8.94 1.93 12 1.93 12s0 3.06.47 4.8a2.8 2.8 0 0 0 1.98 1.98c1.74.47 7.62.47 7.62.47s5.88 0 7.62-.47a2.8 2.8 0 0 0 1.98-1.98c.47-1.74.47-4.8.47-4.8s0-3.06-.47-4.8ZM9.9 15.15v-6.3L15.35 12 9.9 15.15Z" />
    </svg>
  );
}

const socials = [
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

export default function Footer() {
  return (
    <footer className="bg-[#202020] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20 xl:px-20">
      <div className="w-full">
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
          <NavLink
            to={routes.terms}
            className="text-left text-[1.35rem] text-white/92 transition hover:text-[#d4a514]"
          >
            Terms & Conditions
          </NavLink>
          <p className="text-center text-[1.35rem] text-white/92">
            @2025 Jovera Group. All Rights Reserved.
          </p>
          <div className="flex items-center justify-start gap-4 lg:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
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
