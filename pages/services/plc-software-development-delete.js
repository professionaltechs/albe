import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import Layout from "/components/Layout";
import * as style from "/styles/plcsoftwaredevelopment.module.css";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import Testimonials from "/components/Testimonials";
// import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { ServiceBanner } from "/components/ServiceBanner";
import { ServicesCardsSection } from "/components/ServicesCardsSection";

export default function plcsoftwaredevelopment() {
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
          PLC Software Development| PLC Programming| Albe engineering
        </title>
        <meta
          name="description"
          content="Leading in PLC programming and PLC systems across Australia. Specializing in bespoke automation with PLC Sydney, PLC Melbourne and beyond. Experience unmatched efficiency, precision, and innovation in the industrial sector with our PLC expertise."
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
        <link
          rel="canonical"
          href="https://www.albeengineering.com/services/plc-software-development"
        />
        <link rel="alternate" hreflang="en-au" href="/services/plc-software-development" />
      </Head>
      <Layout>
        <div className={style.service}>
          {/* <!-- service  -->   */}

          <ServiceBanner title="PLC Software Development" />
          {/* <div className={style.serviceBanner}>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.bannerTitle}>
                <h1 className={style.title}>PLC Software Development</h1>
                <h2>
                Empower Your Business for Growth With Our Automation Solutions
                </h2>
              </div>
              <div className={style.projectsYears}>
                <div>
                  <div>
                    <h2>50+</h2>
                  </div>
                  <h3>PROJECTS COMPLETED</h3>
                </div>
                <div>
                  <div className={style.shiftToCenter}>
                    <h2>10+</h2>
                  </div>
                  <h3>YEARS IN ROBOTIC INDUSTRY</h3>
                </div>
              </div>
            </Fade>
          </div> */}

          <ServicesCardsSection
            cardTitle="Automation Software"
            cardPara="We propose the best compromise between industrial software
            and hardware by creating a perfect integration between
            software and mechanical parts. the level of high
            competence demonstrated by our developers means they are
            able to make the most of the features of the hardware
            components."
            imgSrc="/images/Automation_Software.webp"
            imgAlt="Automation_Software"
            iconSrc="/icons/PLC-Software-White.png"
            iconAlt="PLC Software developers"
            iconTitle="PLC Software developers"
          />
          {/* <div className={style.servicesCardsSection}>
            <Fade
              duration={1300}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.servicesCards}>
                <div className={style.servicesCard}>
                  <img
                    className={style.servicesCardImg}
                    id="service-image"
                    src="/images/Automation_Software.webp"
                    alt="Automation_Software"
                  />
                  <img
                    loading={"lazy"}
                    src="/icons/PLC-Software-White.png"
                    height={60}
                    width={60}
                    alt="PLC Software developers"
                    title="PLC Software developers"
                    className={style.cardIcon}
                  />
                  <div className={style.serviceCardText}>
                    <h2>Automation Software</h2>
                    <p>
                      We propose the best compromise between industrial software
                      and hardware by creating a perfect integration between
                      software and mechanical parts. the level of high
                      competence demonstrated by our developers means they are
                      able to make the most of the features of the hardware
                      components.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div> */}

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
