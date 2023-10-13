import Head from "next/head";
// import { Html } from "next/document";
import Script from "next/script";

//Automazione
import "/styles/global.css";
import "/styles/styles.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
ReactGA.initialize("G-GWG5J8WM52");

// console.log("GA4", ReactGA._currentMeasurementId);
// import ReactGA from "react-ga";
// const TRACKING_ID = "UA-254893039-1"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const TerserPlugin = require('terser-webpack-plugin')
// webpack: (config, options) =>
// {
//     config.optimization.minimizer = [];
//     config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
//     config.optimization.minimizer.push(new TerserPlugin());
// }

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.albeengineering.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="google-site-verification"
          content="wyzC4KjtsiqZqqhjuzGnoZBmt-M1kku_BMpNefqp03k"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        {/* <link rel="canonical" href="https://www.albeengineering.com/" /> */}
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.albeengineering.com"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/LogoBlack.png"></link>
        <title>Albe Engineering - Automation Engineers Australia</title>
        <meta
          name="description"
          content="Skilled team of automation engineers with years of experience specialized in industrial automation,plc, mechanical engineering, software engineering,electrical engineering based in NSW, Australia"
        />

        {/* BOOTSTRAP */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

      </Head>
      {/* <Script
        strategy="beforeInteractive"
        async
        defer
        // onLoad={console.log("LO")}
        src="https://tools.luckyorange.com/core/lo.js?site-id=6ac1d9ca"
      ></Script> */}
      <Script
        id="imc77z8eg0"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", '${"imc77z8eg0"}');`,
        }}
      />
      <GoogleAnalytics trackPageViews={true} />
      <Component {...pageProps}></Component>
      <CookieConsent
        SameSite="None"
        location="bottom"
        buttonText="Accept"
        cookieName="AlbeCookie"
        style={{
          background: "rgb(18,56,87)",
          backgroundImage:
            "radial-gradient(circle, rgba(18,56,87,1) 0%, rgba(14,43,68,1) 0%, rgba(8,24,37,1) 100%)",
          fontSize: "13px",
          fontWeight: "500",
        }}
        buttonStyle={{
          background: "#fdc128",
          color: "black",
          marginRight: "100px",
          fontSize: "13px",
          fontWeight: "500",
          borderRadius: "5px",
        }}
        expires={365}
      >
        <span style={{ color: "#fdc128", fontSize: "15px", fontWeight: "500" }}>
          We value your privacy
        </span>
        <br></br>
        We use cookies to analyze our traffic and enhance your browsing
        experience.{" "}
      </CookieConsent>
      {/* </Html> */}
    </>
  );
}

export default MyApp;
