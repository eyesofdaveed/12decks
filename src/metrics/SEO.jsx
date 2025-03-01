import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Deck Experts Seattle" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://yourdeckcompany.com" />
      <meta
        property="og:image"
        content="https://yourdeckcompany.com/deck-image.jpg"
      />
      <meta property="business:contact_data:region" content="WA" />
      <meta
        property="business:contact_data:locality"
        content="Seattle, Kirkland, Bothell, Bellevue, Redmond, Edmonds, Auburn"
      />
      <link rel="canonical" href="https://yourdeckcompany.com" />
    </Head>
  );
};

export default SEO;
