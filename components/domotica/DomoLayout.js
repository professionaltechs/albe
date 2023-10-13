// import ReactGA from "react-ga";

// assets
import DomoHeader from "./DomoHeader";
import DomoFooter from "./DomoFooter";
// import * as style from "/styles/domotica/DomoLayout.module.css";

export default function DomoLayout({ children }) {
  return (
    <>
      <DomoHeader />
      <main className="page">{children}</main>
      <DomoFooter />
    </>
  );
}
