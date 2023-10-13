import * as React from "react";
import Link from "next/link";
import Layout from "/components/Layout";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/404" />
        <meta
          name="description"
          content=" We couldn’t find what you were looking for.<br></br> Try to go back
            and check on our menu."
        />
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ALBE ENGINEERING",
            "url": "https://www.albeengineering.com/",
            "logo": "https://www.albeengineering.com/_ipx/w_96,q_75/%2Fimages%2FLogoWhite-1.png?url=%2Fimages%2FLogoWhite-1.png&w=96&q=75",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "(+61) 420 784 106",
                "email": "admin@albeengineering.com",
                "areaServed": ["NSW"],
                "availableLanguage": ["English"]
              }
            ]
          }
        `,
          }}
        />
      </Head>
      <Layout>
        <div className="notFound">
          <h1>Page not found</h1>
          <p>
            We couldn’t find what you were looking for.<br></br> Try to go back
            and check on our menu.
          </p>

          <Link href="/">
            <button>Back To Home</button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
