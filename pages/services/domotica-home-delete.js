import { Link, animateScroll as scroll } from "react-scroll";
import { Form, Button } from "react-bootstrap";
import Head from "next/head";
import { useEffect,useState } from "react";
// import ReactGA from "react-ga";

// assets
import DomoLayout from "/components/domotica/DomoLayout";
import * as style from "/styles/domotica/home.module.css";
import { Fade } from "react-awesome-reveal";

export default function DomoticaHome() {


  return (
    <>
      <Head>
        <title>Home Automation - Automation Engineers</title>
        <meta
          name="description"
          content="Make the smart move and future proof your home while adding
                    convenience from a single room to multi room to a fully
                    automated home, Albe Engineering will exceed your
                    expectations. We have a unique skill set that sets us apart
                    from the competition."
        />
        <script type="application/ld+json">
          {`
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
                "areaServed": [
                "NSW"
                ],
                "availableLanguage": [
                "English"
                ]
              }
            ]
          `}</script>
          <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/services/domotica-Home" />
      </Head>
      <DomoLayout>
        <div className={style.header}>
          {/* <!-- Button Go To Top-->	 */}
          <Link
            to="home"
            duration={1500}
            className={scroll ? style.btnTop : style.btnTopHid}
            title="Go to top"
            spy={true}
              smooth={true}
          >
            {" "}
            <img
              src="/icons/domotica/arrowhead-up.png"
              alt="top"
              width="30"
              height="30"
            />
          </Link>

          {/* <!-- Image Under Navbar Start-->  */}
          <a id="home"></a>
          <div className={style.banner}>
            <Fade
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.bannerText}>
                <h3>LUXURY INNOVATIONS</h3>
                <h2>
                  A first-class client<br></br> in <span>Australia</span>
                </h2>
                <p>
                  We build the infrastructure to host technology <br /> on one
                  platform for domestic and commercial applications.
                </p>
              </div>
            </Fade>
          </div>
          {/* <!-- Image Under Navbar End-->
<!-- About Us Start--> */}
          <a id="about"></a>
          <section id="about" className={style.about}>
            <Fade
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={style.fadeAbout}
            >
              <a id="about"></a>
              <div className={style.aboutContent}>
                <div>
                  <img src="/images/domotica/OS_3_WWW_Home_1b.webp" alt="" />
                </div>
                <div>
                  <h2>
                    Bring your <span>home</span> to life with <br /> Albe
                    Engineering
                  </h2>
                  <p>
                    Make the smart move and future proof your home while adding
                    convenience from a single room to multi room to a fully
                    automated home, Albe Engineering will exceed your
                    expectations. We have a unique skill set that sets us apart
                    from the competition.
                  </p>
                </div>
              </div>
            </Fade>
          </section>
          {/* <!-- About Us End-->
<!-- Why Us Start--> */}
          <a id="why-us"></a>
          <div className={style.why}>
            <Fade
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={style.fadeWhy}
            >
              <div className={style.whyContent}>
                <div>
                  <h1>
                    Why choose <span>Albe Engineering</span> for your smart home
                    automation
                  </h1>
                  <p>
                    Make the smart move and future proof your home while adding
                    convenience. From a single room to multi room to a fully
                    automated home, Albe Engineering will exceed your
                    expectations.
                  </p>
                </div>
                <div>
                  <img src="/images/domotica/tablet-homeatuto.webp" alt="" />
                </div>
              </div>
            </Fade>
          </div>

          {/* <!-- Why Us End-->
<!-- Start Service Area --> */}
          <a id="our-service"></a>
          <div className={style.services}>
            <Fade
              direction={"up"}
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={style.fade}
            >
              <div className={style.servicesContent}>
                <div>
                  {" "}
                  <div className={style.servicesText}>
                    <h3>Services</h3>
                    <h2>
                      The Best <span>Services</span>
                      <br></br>We Provide
                    </h2>

                    <p className="about-text">
                      Our qualified electrical and automation engineers bring
                      industrial automation into the commercial and domestic
                      space. Nobody is better qualified to integrate technology.
                    </p>
                  </div>
                  <div className={style.servicesBox}>
                    <img
                      src="/icons/domotica/smartphone.png"
                      alt="smartphone"
                    />

                    <h3>Home Smart Applications</h3>
                    <p>Audio, video and smart appliance applications.</p>
                  </div>
                  <div className={style.servicesBox}>
                    <img
                      src="/icons/domotica/EnergyManagement.png"
                      alt="EnergyManagement"
                    />

                    <h3>Energy management</h3>
                    <p>
                      To make your home eco-friendly, use green energy.
                      Eco-energy becomes more popular and cost-effective around
                      the world.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className={style.servicesBox}>
                      <img
                        src="/icons/domotica/heatingColling.png"
                        alt="HeatingAndColing"
                      />

                      <h3>Heating and cooling</h3>
                      <p>
                        Everybody loves a comfortable life, and thermal comfort
                        is one of its basic aspects.
                      </p>
                    </div>

                    <div className={style.servicesBox}>
                      <img src="/icons/domotica/Services.png" alt="Services" />

                      <h3>Servicing and support.</h3>
                      <p>
                        We offer high-quality installation, design home
                        projects, and custom support.
                      </p>
                    </div>

                    <div className={style.servicesBox}>
                      <img src="/icons/domotica/roomControl.png" alt="" />

                      <h3>Integrated building and room control</h3>
                      <p>
                        We offer premium home automation systems with
                        personalization features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {/* <!-- End Service Area -->
<!-- Start Contact Area --> */}
          <a id="contact-us"></a>
          <div className="counter-area"></div>
          {/* <!--Image Background--> */}
          <div className={style.contact}>
            <div className={style.contactContent}>
              <Fade
                direction={"left"}
                duration={1500}
                delay={300}
                triggerOnce={true}
                className={style.fadeContact}
              >
                <div className={style.contactInfo}>
                  <h2>Brance Office</h2>
                  <div>
                    <img
                      src="/icons/Address.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <a href="https://goo.gl/maps/WfN3WBxpEBA88tpW8">
                      <h3>Address</h3>
                      <p>
                        18/20 Bellevue Rd, <br />
                        Bellevue Hill NSW 2023
                      </p>
                    </a>
                  </div>
                  <div>
                    <img src="/icons/Email.png" width={40} height={40} alt="" />
                    <a href="mailto:admin@albeengineering.com?body=Hi Albe Engineering,&subject=Enquiry for:">
                      <h3>E-Mail</h3>
                      <p>
                        admin@albeengineering.com
                        <br />
                      </p>
                    </a>
                  </div>
                  <div>
                    <img src="/icons/Phone.png" width={40} height={40} alt="" />
                    <a href="tel:+61-420-784-106">
                      <h3>Phone</h3>
                      <p>
                        (+61) 420 784 106
                        <br />
                      </p>
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade
                direction={"right"}
                duration={1500}
                delay={300}
                triggerOnce={true}
                className={style.fadeContact}
              >
                <div className={style.contactBlock}>
                  <Form
                    name="domotica-form"
                    id="dreamit-form"
                    method="POST"
                    data-netlify="true"
                    action="/thankyou/"
                    // data-netlify-recaptcha="true"
                    // onSubmit={submitForm}
                    encType="application/x-www-form-urlencoded"
                  >
                    <h2>
                      Get a <span>free quote</span> today.
                    </h2>
                    <input
                      type="hidden"
                      name="form-name"
                      value="domotica-form"
                    />
                    <div className={style.contactForm}>
                      <div className={style.formBoxS}>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className={style.formBoxS}>
                        <input
                          type="text"
                          name="Phone"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className={style.formBox}>
                      <input
                        type="email"
                        name="mail"
                        placeholder="E-Mail"
                        required
                      />
                    </div>

                    {/* <div className="col-lg-6  col-md-6 col-sm-12">
                        <div className="form-box">
                          <select name="Subject" id="Subject">
                            <option value="Subject">Subject</option>
                            <option value="Phone No">Select Service</option>
                            <option value="name">Your Name*</option>
                            <option value="Your Mail">Your Mail*</option>
                            <option value="Phone No.">Phone No.</option>
                          </select>
                        </div>
                      </div> */}

                    <div className={style.formBox}>
                      <textarea
                        name="Message"
                        id="massage"
                        placeholder="Write Message"
                      ></textarea>
                    </div>

                    <Button type="submit" className={style.send}>
                      SEND NOW
                    </Button>
                  </Form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </DomoLayout>
    </>
  );
}
