import React, { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav } from "react-bootstrap";

import NXLink from "next/link";
import { TextAlignJustified, Cross } from "akar-icons";
import * as style from "/styles/domotica/domoHeader.module.css";

function DomoHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <Nav>
      <div className={style.widthX}>
        <div className={style.header}>
          <NXLink className={style.brand} href="/">
            <img
              src="/images/LogoWhite-1.png"
              alt="Logo"
              className={style.logo}
            />
            Albe Engineering
          </NXLink>
          {open ? (
            <Cross
              className={style.hamburgerIcon}
              strokeWidth={2}
              size={40}
              onClick={() => setOpen(false)}
            />
          ) : (
            <TextAlignJustified
              className={style.hamburgerIcon}
              strokeWidth={2}
              size={40}
              onClick={() => setOpen(true)}
            />
          )}
          <div className={open ? style.menuOpen : style.menu}>
            <NXLink href="/">Home</NXLink>

            <Link
            offset={-100}
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About us
            </Link>
            

            <Link
              offset={-200}
              to="why-us"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Why us
            </Link>

            <Link to="our-service" spy={true} smooth={true} duration={1000}>
              Services
            </Link>

            {open ? (
              <Link to="contact-us" spy={true} smooth={true} duration={1000}>
                Contact Us
              </Link>
            ) : (
              ""
            )}
          </div>

          <Link
            className={style.buttonLink}
            to="contact-us"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button className={style.contactButton}>Contact Us</button>
          </Link>
        </div>
      </div>
    </Nav>
  );
}

export default DomoHeader;
