import Link from "next/link";
import Head from "next/head";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";
// import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import Testimonials from "/components/Testimonials";

// assets
import Layout from "/components/Layout";
import * as style from "/styles/index.module.css";
import { useRouter } from "next/router";
// import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {

  const [trustRef, trustInView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    initialInView: true,
  });

  const [projectRef, projectInView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.5,
    // initialInView: true,
  });

  const [servicesTitleRef, serviceTitleInView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 1,
    // initialInView: true,
  });

  const [serviceGroup1Ref, serviceGroup1InView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.2,
    // initialInView: true,
  });

  const [serviceGroup2Ref, serviceGroup2InView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    // initialInView: true,
  });

  const [open, setOpen] = useState({});

  const toggleOpen = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  useEffect(() => {
    toggleOpen("faq1");
  }, []);

  function addJsonLd() {
    return {
      __html: `{
        "@context": "http://www.schema.org",
        "@type": "ProfessionalService",
        "name": "Albe Engineering",
        "url": "https://www.albeengineering.com/",
        "logo": "https://www.albeengineering.com/_next/image?url=%2Fimages%2FLogoWhite-1.png&w=48&q=75",
        "description": "Skilled team of automation engineers with years of experience specialized in industrial automation,plc, mechanical engineering, software engineering,electrical engineering based in NSW, Australia.",
        "address": {
           "@type": "PostalAddress",
           "streetAddress": "18/20 Bellevue Rd,Bellevue Hill NSW 2023",
           "addressLocality": "Sydney",
           "addressRegion": "NSW",
           "postalCode": "2023",
           "addressCountry": "Australia"
        },
        "hasMap": "https://goo.gl/maps/WfN3WBxpEBA88tpW8",
         "openingHours": "Mo 01:00-01:00 Tu 01:00-01:00 We 01:00-01:00 Th 01:00-01:00 Fr 01:00-01:00 Sa 01:00-01:00 Su 01:00-01:00",
        "telephone": "+61 420784106"
      }`,
    };
  }
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>Albe Engineering| Automation Engineers Australia| Industrial Automation</title>
        <meta
          name="description"
          content="Skilled team of automation engineers with years of experience specialized in industrial automation,plc, mechanical engineering, software engineering,electrical engineering based in NSW, Australia."
        />
        <meta
          name="automation"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.albeengineering.com/" />
        {/* <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
        <meta og:url></meta>

        <meta twitter:card></meta>
        <meta twitter:site></meta>
        <meta twitter:description></meta>
        <meta twitter:title></meta>
        <meta twitter:image></meta> */}
        <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Layout>
        <div className={style.index}>
          <div className={style.banner}>
            <div className={style.divVideo}>
              <video
                className={style.video}
                title="Industrial automation"
                preload="yes"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./video/robot_2_cropped.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={style.bannerText}>
              <p>
                <span>//</span> HIGH QUALITY SERVICE
              </p>
              <h2 className={style.bannerTexth1}>
                ALBE <br></br>ENGINEERING
              </h2>
              <h1 className={style.bannerTextp}>
                WE MANAGE END-TO-END INDUSTRIAL <br></br>AUTOMATION
              </h1>
              <Link href="#services">
                <button className={style.buttonAnchor}>Learn More</button>
              </Link>
            </div>
          </div>
          <div className={style.trust} ref={trustRef}>
            <div
              className={trustInView ? style.textVideoSection : style.invisible}
            >
              <div className={style.divTrustText}>
                <h2>The best quality automation</h2>
                <p>
                  Our team of automation engineers possesses an unmatched depth
                  of knowledge in both mechanical engineering and electrical
                  engineering. This expertise is not just theoretical; it's
                  honed from years of hands-on experience, making us the go-to
                  experts in the realm of industrial automation. We don't just
                  dabble in automation; we specialize in it, from designing
                  intricate robotics systems to mastering warehouse automation,
                  material handling, and supply chain automation, our skills are
                  both broad and deep. <br></br>
                  <br></br>Our expertise in PLC-based systems, software
                  engineering for automation, and industrial robots like LGVs
                  and AGVs distinguishes us. We offer comprehensive services
                  from design and PLC programming to implementation.
                  Additionally, we provide consultation, training, and support
                  for robotics systems and automation solutions, ensuring they
                  surpass industry standards and adhere to regional regulations.
                </p>
              </div>

              <div className={style.divTrustVideo}>
                <video
                  className={style.trustVideo}
                  title="LGV and AGV Handling Automation Albe Engineering"
                  preload="yes"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./video/TrustNow.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className={style.trustFrameSection} ref={trustRef}>
              <div
                className={
                  trustInView ? style.trustFrameSection : style.invisible
                }
              >
                <div className={style.divTrustFrame}>
                  <iframe
                    className={style.trustFrame}
                    src="https://glue-system.netlify.app/"
                  ></iframe>
                </div>
                <div className={style.divTrustText}>
                  <h2>Latest Generation Automation</h2>
                  <p>
                    Creating a more efficient and productive solution to your
                    business needs. Whether you need manufacturing automation,
                    logistic automation, or any other applications; Our expert
                    engineers will provide tailored solutions for any complex
                    robotics projects ensuring your satisfaction on every step
                    of the way. As an industrial automation companies in
                    Australia, we are leading the way in Industry 4.0, and are
                    commited to helping your business through cutting edge
                    technology.
                  </p>
                  <Link href="/contact">
                    <button className={style.consultButton}>Contact us</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.projectsSection}>
              <div>
                <h2
                  ref={projectRef}
                  className={
                    projectInView ? style.projectsSectionTitle : style.invisible
                  }
                >
                  50+ <span>PROJECTS COMPLETED</span>
                </h2>
              </div>
              <div>
                <div id="services"></div>
                <h2
                  ref={projectRef}
                  className={
                    projectInView ? style.projectsSectionTitle : style.invisible
                  }
                >
                  10+ <span>YEARS IN ROBOTIC INDUSTRY</span>
                </h2>
              </div>
            </div>
          </div>

          <div className={style.services}>
            <h2
              ref={servicesTitleRef}
              className={
                serviceTitleInView ? style.servicesTitle : style.invisible
              }
            >
              Our Services
            </h2>

            <div
              ref={serviceGroup1Ref}
              className={
                serviceGroup1InView ? style.servicesGroup : style.invisible
              }
            >
              <Link href="services/plc-software-development">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/PLC-Software-White.png"
                    height={100}
                    width={100}
                    alt="PLC Software developers"
                    title="PLC Software developers"
                  />

                  <h3>PLC Software Development</h3>
                  <p>
                    We are pioneers in PLC programming and PLC systems. Our team
                    is dedicated to delivering bespoke automation solutions
                    tailored to the unique needs of the industrial sector as we
                    can assist with anything to do with PLC and related assembly
                    line.
                  </p>
                </div>
              </Link>
              <Link href="services/mechanical-assembly">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/Mechanical-Assembly-White.png"
                    height={100}
                    width={100}
                    alt="Mechanical Assembly"
                    title="Mechanical Assembly"
                  />

                  <h3>Mechanical Assembly</h3>
                  <p>
                    Leverage the skills of our mechanical engineers and
                    mechanical assemblers for top-tier automation and mechanical
                    assembly design solutions. We are on of the mechanical
                    fitter companies specialised in assembly line setups. Our
                    mechanical fitter will ensure precision and efficiency in
                    every project.
                  </p>
                </div>
              </Link>

              <Link href="services/electrical-assembly">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/Eletrical-Assembly-White.png"
                    height={100}
                    width={100}
                    alt="Eletrical Assembly"
                    title="Eletrical Assembly"
                  />

                  <h3>Electrical Assembly</h3>
                  <p>
                    With a foundation in electrical engineering, our team is equipped with the skills
                    and advanced tools necessary for meticulous electrical
                    assembly tasks. Whether you're looking for an electrical
                    engineer, electrical fitter, or electrical fitter mechanic
                    we can provide what you need for your production and assembly line.
                  </p>
                </div>
              </Link>
            </div>
            <div
              ref={serviceGroup2Ref}
              className={
                serviceGroup2InView ? style.servicesGroup : style.invisible
              }
            >
              <Link href="services/project-management">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/Project-Manager-White.png"
                    height={100}
                    width={100}
                    alt="Project Manager"
                    title="Project Manager"
                  />

                  <h3>Project Management</h3>
                  <p>
                    We take a thorough approach to risk management, identifying
                    potential hazards and developing effective strategies to
                    mitigate them. Our experienced project managers ensure
                    projects are completed on time, within budget, and to the
                    satisfaction of our clients.
                  </p>
                </div>
              </Link>

              <Link href="services/software-development">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/PC-Software-White.png"
                    height={100}
                    width={100}
                    alt="Software developers"
                    title="Software developers"
                  />

                  <h3>Software Development</h3>
                  <p>
                    Our team of software developers uses effective principles,
                    practices, and methods to provide automation solutions. We
                    stay up to date with evolving technology to ensure our
                    clients are at the forefront of Industry 4.0.
                  </p>
                </div>
              </Link>

              <Link href="services/domotica-Home">
                <div>
                  <img
                    loading={"lazy"}
                    src="/icons/Home-Automation-White.png"
                    height={100}
                    width={100}
                    alt="Home Automation"
                    title="Home Automation"
                  />

                  <h3>Home Automation</h3>
                  <p>
                    Our team provides clients with the opportunity to design and
                    implement a comprehensive home automation system that
                    integrates cutting-edge technology to enhance their living
                    experience.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.testimonialSection}>
          <div className={style.testimonialText}>
            <h2 className={style.testimonialTitle}>Testimonials</h2>
            <Testimonials></Testimonials>
          </div>
        </div>
        <div className={style.faq}>
          <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
          <div>
            <div style={{ display: "flex" }}>
              <h3>
                What are the key factors that impact the cost of implementing
                production line automation solutions in manufacturing processes?
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
              Factors impacting production line automation costs include system
              complexity, machinery and equipment type, customization needs,
              production scale, integration of technologies, software
              development, installation and commissioning expenses, training and
              maintenance costs, and expected return on investment (ROI).
            </p>
          </div>
          <div>
            <div style={{ display: "flex" }}>
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
              Laser guided vehicle (LGV) forklifts are automated forklifts that
              use laser technology for navigation and guidance in industrial
              settings. They are equipped with lasers that emit laser beams to
              detect reflectors or markers placed strategically in the
              environment, allowing the forklift to navigate along predefined
              paths, avoid obstacles, and perform material handling tasks
              autonomously.
            </p>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <h3>
                How can logistic automation benefit warehouses and distribution
                centers?
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
              operations, reducing labor costs, minimizing errors, and enhancing
              overall supply chain performance.
            </p>
          </div>
          <div>
            <div style={{ display: "flex" }}>
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
              allowing remote control or automation of various household tasks,
              such as adjusting temperature settings, controlling lighting,
              managing security, and automating routine chores, making living
              spaces more efficient, convenient, and enjoyable.
            </p>
          </div>
          <Link href="/contact">
            <button className={style.buttonAnchor}>Ask a question</button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
