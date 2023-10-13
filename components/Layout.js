import Navbar from "./Header";
import Footer from "./Footer";

import * as style from "/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
}
