import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "Ardiansyah Sulistyo — Full Stack Developer";
const BASE_URL = "https://ardiansyahsulistyo.me";
const DEFAULT_DESCRIPTION =
  "Portfolio of Ardiansyah Sulistyo – Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. 2+ years of experience building scalable web applications.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
