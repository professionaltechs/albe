import * as React from "react";
import Layout from "/components/Layout";
import Link from "next/link";
import * as style from "/styles/thankyou.module.css";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>Thank you - Automation Engineers</title>
        <meta
          name="description"
          content="Thank you for your message!We will get back to you soon."
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
          <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/thank-you" />
      </Head>

      <Layout>
        <Fade
          duration={1500}
          delay={300}
          triggerOnce={true}
          className={style.fade}
        >
          <div className={style.thankyou}>
            <h1>Thank you for your message!</h1>
            <h2>We will get back to you soon.</h2>

            <Link href="/">
              <button className={style.buttonAnchor}>Go To Home</button>
            </Link>
          </div>
        </Fade>
      </Layout>
    </>
  );
};

export default Thankyou;
