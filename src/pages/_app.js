import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>12 Decks & Fences</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Decking and Fencing Design Installation Repair Services in Greater Seattle Area"
        />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
