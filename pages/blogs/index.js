import Layout from "/components/Layout";
import Top from '../../components/blogs/Top.js'
import Cards from '../../components/blogs/Cards.js'

import Head from "next/head";
import Link from "next/link";
// import ReactGA from "react-ga";
// import { useEffect } from "react";

export default function index() {
    // useEffect(() => {
    //   ReactGA.pageview(window.location.pathname);
    // });
    return (
        <>
            <Head>
                <title>About Us - Automation Engineers</title>
                <meta
                    name="description"
                    content="We are a team of passionate and experienced engineers, dedicated to providing exceptional solutions while prioritizing professionalism and confidentiality."
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
                <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/about" />
            </Head>
            <Layout>
                <Top/>
                <Cards/>
            </Layout>
        </>
    );
}
