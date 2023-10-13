import Layout from "/components/Layout";
import * as style from "/styles/contact.module.css";
import { Fade } from "react-awesome-reveal";
import { Form, Button } from "react-bootstrap";
import Head from "next/head";
// import ReactGA from "react-ga";
// import { useEffect } from "react";

export default function Contact() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // });
  return (
    <>
      <Head>
        <title>Contact Us - Automation Engineers</title>
        <meta
          name="description"
          content="Ready to embrace Industry 4.0 and revolutionize your manufacturing operations? Our team provides comprehensive industrial automation services, including material handling, manufacturing automation, and robotic systems. Contact us today to learn how we can help you increase efficiency and reduce costs."
        />

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
          <link rel="alternate" hreflang="en-au" href="https://www.albeengineering.com/contact" />
      </Head>
      <Layout>
        <div className={style.contact}>
          <div className={style.contactBlock}>
            <Fade
              direction={"left"}
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={style.fadeInfo}
            >
              <div className={style.contactContainer}>
                <div className={style.infoCompany}>
                  <h1>Contact Info</h1>

                  <a href="https://goo.gl/maps/WfN3WBxpEBA88tpW8">
                    <span>
                      <img src="/icons/Address.png" height="30px" alt="Albe Egineering Address" />
                    </span>
                    <span>
                      18/20 Bellevue Rd, <br />
                      Bellevue Hill NSW 2023
                    </span>
                  </a>

                  <a href="mailto:admin@albeengineering.com?body=Hi Albe Engineering,&subject=Enquiry for:">
                    <span>
                      <img src="/icons/Email.png" height="30px" alt="Albe Engineering Email" />
                    </span>
                    <span>admin@albeengineering.com</span>
                  </a>

                  <a href="tel:+61-420-784-106">
                    <span>
                      <img src="/icons/Phone.png" height="30px" alt="Albe Engineering Phone Number" />
                    </span>
                    <span>(+61) 420 784 106</span>
                  </a>
                </div>
                <div className={style.socialIcons}>
                  <a href="#">
                    <img src="/icons/Facebook.png" height="36px" alt="Albe Engineering Facebook" />
                  </a>

                  <a href="https://www.linkedin.com/company/albe-engineering/">
                    <img src="/icons/Linkedin.png" height="36px" alt="Albe Engineering Linkedin" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade
              direction={"down"}
              duration={1500}
              delay={300}
              triggerOnce={true}
              className={`${style.fadeback}`}
            >
              <Form
                name="contact-form"
                id="contact-form"
                method="POST"
                data-netlify="true"
                action="/thank-you/"
                // data-netlify-recaptcha="true"
                // onSubmit={submitForm}
                encType="application/x-www-form-urlencoded"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className={style.contactForm}>
                  <h2>Send Message</h2>
                  <div className={style.formBox}>
                    <div className={`${style.inputBox} ${style.inputBoxS}`}>
                      <input type="text" name="first_name" required />
                      <span>First Name</span>
                    </div>
                    <div className={`${style.inputBox} ${style.inputBoxS}`}>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                      />
                      <span>Last Name</span>
                    </div>
                    <div className={`${style.inputBox} ${style.inputBoxL}`}>
                      <input
                        type="email"
                        id="your_email"
                        name="your_email"
                        required
                      />
                      <span>E-mail Address</span>
                    </div>
                    <div className={`${style.inputBox} ${style.inputBoxL}`}>
                      <textarea name="your_message" required></textarea>
                      <span>Write your message here...</span>
                    </div>
                    {/* <div className="mb-4">
                    <ReCAPTCHA
                      className="g-recaptcha"
                      //                     ref={e => (captcharef = e)}
                      sitekey="6Lc7534cAAAAACWBC8my5fNqMZotnd2GadA_E6c2"
                      onChange={onChange}
                      //                     render="explicit"
                      //                     expiredCallback={expiredCaptcha}
                      //                     onloadCallback={console.log.bind(this, "recaptcha loaded")}
                      //                     verifyCallback={verifyCaptcha}
                    />
                  </div> */}

                    <div className={`${style.inputBox} ${style.inputBoxL}`}>
                      <Button className={style.send} type="submit">
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
}
