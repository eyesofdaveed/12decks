import Head from 'next/head';
import Link from "next/link";
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, pageDesc }) => {
  const styles = {
    "parallax": {
      "backgroundImage": "url(/images/pattren-3.png)"
    }
  }
  const headTitle = `${appData.settings.siteName} - ${pageTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="banner-style-one">
        <div className="parallax" style={styles.parallax} />

        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>{pageTitle}</h2>
              <p>{pageDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBanner;
