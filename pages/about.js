import Layout from "/components/Layout";
import * as style from "/styles/about.module.css";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import  Link  from "next/link";
// import ReactGA from "react-ga";
// import { useEffect } from "react";

export default function About() {
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
      <div className={style.about}>
          {/* <!-- about  -->   */}

          <div className={style.aboutBanner}>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.bannerTitle}>
                <h1 className={style.title}>About Us</h1>
                <h2>
                We are a team of passionate and experienced engineers, dedicated to providing exceptional solutions while prioritizing professionalism and confidentiality.
                </h2>
              </div>
            </Fade>
          </div>

          <div className={style.aboutsCardsSection}>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.aboutsCards}>
                <div className={style.aboutsCard}>
                  <img
                    className={style.aboutsCardImg}
                    id="about-image"
                  src="/images/Dedication.webp"
                  alt="Dedication"
                  />
                  <div className={style.aboutCardText}>
                    <h2>Dedication</h2>
                    <p>
                    We believe intensely in what we do, with the enthusiasm of those who take up every new challenge to exceed the expectations of those who rely on us.
                    </p>
                  </div>
                </div>
                <div className={style.aboutsCard}>
                  <img
                    className={style.aboutsCardImg}
                    id="about-image"
                  src="/images/Confidentiality.webp"
                  alt="Confidentiality"
                  />
                  <div className={style.aboutCardText}>
                    <h2>Confidentiality</h2>
                    <p>
                    Aware of the vital importance of the information we process, our first commitment is to ensure maximum confidentiality of data by ensuring absolute professional integrity.
                    </p>
                  </div>
                </div>
                
              </div>
            </Fade>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.aboutsCards}>
                <div className={style.aboutsCard}>
                  <img
                    className={style.aboutsCardImg}
                    id="about-image"
                  src="/images/Flexibility.webp"
                  alt="Flexibility"
                  />
                  <div className={style.aboutCardText}>
                    <h2>Flexibity</h2>
                    <p>
                    Albe engineering’s dedication to customers is total because our interests are based on yours, we align ourselves effectively with the needs of the work.
                    </p>
                  </div>
                </div>
                <div className={style.aboutsCard}>
                  <img
                    className={style.aboutsCardImg}
                    id="about-image"
                  src="/images/Excellence.webp"
                  alt="Excellence"
                  />
                  <div className={style.aboutCardText}>
                    <h2>Excellence</h2>
                    <p>
                    Albe engineering guarantees a very high standard of preparation and continuous investments in cutting-edge means and technologies to ensure optimal, on-time solutions, the best possible about, in the most effective way.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
            <div className={style.ctaSection}>
              <h2>
                High Quality Service
              </h2>
              <p>
              Experience innovation with our premium engineering solutions. Connect with us today to elevate your business to the next level.
              </p>
              <Link href="/contact">
                      <button className={style.buttonAnchor}>Contact Us</button>
                    </Link>
            </div>
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
}
