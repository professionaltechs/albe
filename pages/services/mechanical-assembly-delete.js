import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import Layout from "/components/Layout";
import * as style from "/styles/mechanicalassembly.module.css";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import Testimonials from "/components/Testimonials";
// import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { ServiceBanner } from "/components/ServiceBanner";
import { ServicesCardsSection } from "/components/ServicesCardsSection";

export default function mechanicalassembly() {
  const [open, setOpen] = useState({});

  const toggleOpen = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  useEffect(() => {
    toggleOpen("faq1");
  }, []);
  return (
    <>
      <Head>
        <title>
          Mechanical Assembly | Mechanical Engineering | Albe engineering
        </title>
        <meta
          name="description"
          content="Discover the expertise of our mechanical engineer and mechanical assembler teams in logistic automation. As leading mechanical fitter companies, we specialize in assembly line solutions that boost efficiency and accuracy. Whether you need a mechanical fitter or electrical fitter mechanic, our services enhance productivity in warehouses and distribution centers. Dive into the future of mechanical engineering with us."
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
        <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/services/mechanical-assembly" />
      </Head>
      <Layout>
        <div className={style.service}>
          {/* <!-- service  -->   */}
          <ServiceBanner title="Mechanical Assembly" />

          <ServicesCardsSection
            cardTitle="Mechanical Assembly"
            cardPara="Specialized in the assembly of industrial machines and
            complete production lines. the experience gained in the
            field of mechanical assembly allows us to provide our
            customers with high quality technical improvements."
            imgSrc="/images/Mechanical_Assembly.webp"
            imgAlt="Automation_Software"
            iconSrc="/icons/Mechanical-Assembly-White.png"
            iconAlt="Mechanincal Assembly"
            iconTitle="Mechanincal Assembly"
          />

          <div className={style.testimonialSection}>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <h2 className={style.title}>Testimonials</h2>
              <Testimonials></Testimonials>
            </Fade>
          </div>

          <div className={style.faq}>
            <h2 className={style.title}>
              <span>Frequently Asked </span>Questions
            </h2>
            <div>
              <div>
                <h3>
                  What are the key factors that impact the cost of implementing
                  production line automation solutions in manufacturing
                  processes?
                </h3>
                {!open["faq1"] ? (
                  <MdKeyboardArrowDown
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq1")}
                  ></MdKeyboardArrowDown>
                ) : (
                  <MdKeyboardArrowUp
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq1")}
                  ></MdKeyboardArrowUp>
                )}
              </div>
              <p className={open["faq1"] ? style.faqOpen : style.faqClosed}>
                Factors impacting production line automation costs include
                system complexity, machinery and equipment type, customization
                needs, production scale, integration of technologies, software
                development, installation and commissioning expenses, training
                and maintenance costs, and expected return on investment (ROI).
              </p>
            </div>
            <div>
              <div>
                <h3>
                  What are laser guided vehicle (LGV) forklifts and how do they
                  work in industrial settings?
                </h3>
                {!open["faq2"] ? (
                  <MdKeyboardArrowDown
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq2")}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq2")}
                  />
                )}
              </div>
              <p className={open["faq2"] ? style.faqOpen : style.faqClosed}>
                Laser guided vehicle (LGV) forklifts are automated forklifts
                that use laser technology for navigation and guidance in
                industrial settings. They are equipped with lasers that emit
                laser beams to detect reflectors or markers placed strategically
                in the environment, allowing the forklift to navigate along
                predefined paths, avoid obstacles, and perform material handling
                tasks autonomously.
              </p>
            </div>
            <div>
              <div>
                <h3>
                  How can logistic automation benefit warehouses and
                  distribution centers?
                </h3>
                {!open["faq3"] ? (
                  <MdKeyboardArrowDown
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq3")}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq3")}
                  />
                )}
              </div>
              <p className={open["faq3"] ? style.faqOpen : style.faqClosed}>
                Logistic automation can benefit warehouses and distribution
                centers by improving efficiency, accuracy, and productivity of
                operations, reducing labor costs, minimizing errors, and
                enhancing overall supply chain performance.
              </p>
            </div>
            <div>
              <div>
                <h3>
                  How can home automation enhance comfort and convenience in
                  homes?
                </h3>
                {!open["faq4"] ? (
                  <MdKeyboardArrowDown
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq4")}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    size={50}
                    className={style.faqArrow}
                    onClick={() => toggleOpen("faq4")}
                  />
                )}
              </div>
              <p className={open["faq4"] ? style.faqOpen : style.faqClosed}>
                Home automation can enhance comfort and convenience in homes by
                allowing remote control or automation of various household
                tasks, such as adjusting temperature settings, controlling
                lighting, managing security, and automating routine chores,
                making living spaces more efficient, convenient, and enjoyable.
              </p>
            </div>
            <Link href="/contact">
              <button className={style.buttonAnchor}>Ask a question</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
