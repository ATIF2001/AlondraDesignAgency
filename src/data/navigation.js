export const routes = {
  home: "/",
  services: "/services",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  blogs: "/blogs",
};

export const sidebarItems = [
  { label: "Home", path: routes.home },
  { label: "Services", path: routes.services, chevron: true },
  { label: "Our Projects", path: routes.projects },
  { label: "About us", path: routes.about },
  { label: "Contact us", path: routes.contact },
  { label: "Blogs", path: routes.blogs },
];

export const footerPageItems = [
  { label: "Home", path: routes.home },
  { label: "Services", path: routes.services },
  { label: "Work", path: routes.projects },
  { label: "Contact us", path: routes.contact },
  { label: "Blog", path: routes.blogs },
  { label: "About", path: routes.about },
];
