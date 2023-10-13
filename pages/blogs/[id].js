import Layout from "/components/Layout";
import React from 'react'
import { useRouter } from 'next/router'
import Suggestion from "../../components/blogs/Dynamic/Suggestion";

import Top from "../../components/blogs/Dynamic/Top";
import Data from "../../components/blogs/Dynamic/Data";

import Head from "next/head";

export default function BlogPage() {
    const router = useRouter()
    const id = router.query.id
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
                <Top />
                <Data />
                <Suggestion />
            </Layout>
        </>
    )
}
