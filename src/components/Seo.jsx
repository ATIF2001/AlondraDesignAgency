import { Helmet } from "react-helmet-async";
import logoImage from "../assets/logo.png";

const DEFAULT_SITE_NAME = "Alondra";
const DEFAULT_TITLE = "Alondra | Creative, Digital & Performance Marketing Agency";
const DEFAULT_DESCRIPTION =
  "Alondra delivers digital marketing, branding, web development, SEO, SEM, content, and production services for modern brands across the UAE.";
const DEFAULT_IMAGE = logoImage;

function getOrigin() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return import.meta.env.VITE_SITE_URL ?? "";
}

function toAbsoluteUrl(value) {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;

  const origin = getOrigin();
  if (!origin) return value;

  return new URL(value, origin).toString();
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  noIndex = false,
  structuredData,
}) {
  const pageTitle = title ? `${title} | ${DEFAULT_SITE_NAME}` : DEFAULT_TITLE;
  const canonical = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}
