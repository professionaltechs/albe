import * as React from "react";
import Link from "next/link";
import Layout from "/components/Layout";
import Head from "next/head";

const index = () => {
    return (

        <>
            <Head>
                <title>industries</title>
                <meta
                    name="description"
                    content="Albe Engineering provides high-quality PLC Software Engineering services, including PLC Programming. Our experienced team of experts is ready to help you find the perfect solution for your needs. Contact us today "
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
          <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/industries" />
            </Head>
            <Layout>
                <div className="notFound">
                    <h1>This Page is Under construction</h1>
                </div>
            </Layout>
        </>
    )
}

export default index;