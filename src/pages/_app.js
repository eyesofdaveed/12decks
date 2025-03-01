import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import Script from "next/script";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import YandexTag from "../metrics/YandexTag";
import GoogleTag from "../metrics/GoogleTag";
import SEO from "../metrics/SEO";

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>
          Deck & Fence Installation in Seattle | Licensed Contractors
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Decking and Fencing Design Installation Repair Services in Greater Seattle Area"
        />
        {/* seo end */}
      </Head>

      <YandexTag />
      <GoogleTag />
      <SEO
        title="Decking & Fencing Installation in Greater Seattle Areas | Licensed & Bonded"
        description="Expert deck and fencing installation in Greater Seattle Area, including Kirkland, Bothell, Bellevue, Redmond, Edmonds, and Auburn. We build custom decks: hanging, free-standing, two-story, floating with lights and railways using wood, composite, and pressure-treated materials."
        keywords="deck installation Seattle, fencing contractor Seattle, composite decking Kirkland, wood decks Bellevue, floating decks Redmond, two-story decks Auburn, deck experts Edmonds, licensed deck builder Seattle, custom decks WA"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
