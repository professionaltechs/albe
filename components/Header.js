import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";

import { TextAlignJustified, Cross } from "akar-icons";
import * as styles from "/styles/header.module.css";

function header() {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [industriesDropdown, setIndustriesDropdown] = useState(false)
  const [menuDropdown, setMenuDropdown] = useState(false)

  const handleServiceDropdown = () => {
    setServicesDropdown(!servicesDropdown)
    setIndustriesDropdown(false)
    setMenuDropdown(false)
  }

  const handleIndustriesDropdown = () => {
    setServicesDropdown(false)
    setIndustriesDropdown(!industriesDropdown)
    setMenuDropdown(false)
  }

  const handleAboutDropdown =()=>{
    setServicesDropdown(false)
    setIndustriesDropdown(false)
    setMenuDropdown(!menuDropdown)
  }

  // const dropDownRef = useRef(null)


  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <Nav>
      <div className={styles.navbar}>
        <Link href="/">
          <img
            className={styles.navbarLogo}
            src="/images/domotica/logoWithText.webp"
            alt="Logo-Albe-Engineering"
            title="Logo Albe Engineering - Automation Engineers"
            height={400}
            width={400}
          />
        </Link>
        <div className={styles.CTAMobile}>
          <a href="tel:+61-420-784-106">
            <img
              className={styles.phoneIconOnlyMobile}
              src="/icons/Phone.png"
              height={24}
              width={24}
              alt="Albe Engineering Telephone number link"
              title="Telephone number link"
            />
          </a>
          <a href="https://app.apollo.io/#/meet/mario_polverino_fe2/30-min">
            <img
              className={styles.bookIconOnlyMobile}
              src="/icons/meeting.png"
              height={24}
              width={24}
              alt="Albe Engineering Telephone number link"
              title="Telephone number link"
            />
          </a>
          <a href="https://app.apollo.io/#/meet/mario_polverino_fe2/30-min">
            <button className={styles.button}>Book a Consultation</button>
          </a>
        </div>
        {open ? (
          <Cross
            className={styles.hamburgerIcon}
            strokeWidth={2}
            size={45}
            onClick={() => setOpen(false)}
          />
        ) : (
          <TextAlignJustified
            className={styles.hamburgerIcon}
            strokeWidth={2}
            size={45}
            onClick={() => setOpen(true)}
          />
        )}
        <div className={open ? styles.menuOpen : styles.menu}>
          <div className={styles.link}>
            <Link href="/">HOME</Link>
            {/* HOME */}
          </div>

          <div className={styles.link} onClick={handleServiceDropdown}>
            SERVICES

            {/* SERVICES LAPTOP DROPDOWN */}
            <div className={styles.servicesDropdown}>
              <Link className={styles.dropdownLink} href="/services/plc-software-development">
                Plc Software Development
              </Link>
              <Link className={styles.dropdownLink} href="/services/mechanical-assembly">
                Mechanical Assembly
              </Link>
              <Link className={styles.dropdownLink} href="/services/electrical-assembly">
                Electrical Assembly
              </Link>
              <Link className={styles.dropdownLink} href="/services/software-development">
                Software Engineering
              </Link>
              <Link className={styles.dropdownLink} href="/services/project-management">
                Project Management
              </Link>
              <Link className={styles.dropdownLink} href="/services/domotica-Home">
                Home Automation
              </Link>
            </div>

            {/* SERVICES DROPDOWN MOBILE */}
            {servicesDropdown &&
              <div className={styles.servicesDropdownMobile}>
                <Link className={styles.dropdownLink} href="/services/plc-software-development">
                  Plc Software Development
                </Link>
                <Link className={styles.dropdownLink} href="/services/mechanical-assembly">
                  Mechanical Assembly
                </Link>
                <Link className={styles.dropdownLink} href="/services/electrical-assembly">
                  Electrical Assembly
                </Link>
                <Link className={styles.dropdownLink} href="/services/software-development">
                  Software Engineering
                </Link>
                <Link className={styles.dropdownLink} href="/services/project-management">
                  Project Management
                </Link>
                <Link className={styles.dropdownLink} href="/services/home-automatio">
                  Home Automation
                </Link>
              </div>
            }

          </div>

          <div className={styles.link} onClick={handleIndustriesDropdown}>
            <Link href="/industries/">INDUSTRIES</Link>            
            

            {/* LAPTOP INDUSTRIES DROPDO */}
            {/* <div className={styles.industriesDropdown}>
              <Link className={styles.dropdownLink} href="">
                Food and Beverage
              </Link>
              <Link className={styles.dropdownLink} href="">
                Recycling
              </Link>
              <Link className={styles.dropdownLink} href="">
                Medical and science
              </Link>
              <Link className={styles.dropdownLink} href="">
                Logistic
              </Link>
            </div> */}

            {/* INDUSTRIES DROPDOWN MOBILE */}
            {/* {industriesDropdown &&
              <div className={styles.industriesDropdownMobile}>
                <Link className={styles.dropdownLink} href="">
                  Food and Beverage
                </Link>
                <Link className={styles.dropdownLink} href="">
                  Recycling
                </Link>
                <Link className={styles.dropdownLink} href="">
                  Medical and science
                </Link>
                <Link className={styles.dropdownLink} href="">
                  Logistic
                </Link>
              </div>
            } */}

          </div>
          <div className={styles.link} onClick={handleAboutDropdown}>
            ABOUT

            {/* ABOUT DROPDOWN LAPTOP */}
            <div className={styles.aboutDropdown}>
              <Link className={styles.dropdownLink} href="/about">
                Who we are
              </Link>
              {/* <Link className={styles.dropdownLink} href="">
                News
              </Link>
              <Link className={styles.dropdownLink} href="">
                Case Studies
              </Link> */}
            </div>

            {/* ABOUT DROPDOWN MOBILE */}
            {menuDropdown &&
              <div className={styles.aboutDropdownMobile}>
                <Link className={styles.dropdownLink} href="/about">
                  Who we are
                </Link>
                {/* <Link className={styles.dropdownLink} href="">
                  News
                </Link>
                <Link className={styles.dropdownLink} href="">
                  Case Studies
                </Link> */}
              </div>
            }

          </div>
          {/* <div className={styles.link} >
            NEWS
          </div> */}
          <div className={styles.link}>
          <Link href='/contact'>
            CONTACT
          </Link>
          </div>
        </div>
        <div className={open ? styles.bookOpen : styles.book}>
          <a className={styles.phone} href="tel:+61-420-784-106">
            <img
              className={styles.phoneIcon}
              src="/icons/Phone.png"
              height={24}
              width={24}
              alt="Albe Engineering Telephone number link"
              title="Telephone number link"
            />
            (+61) 420 784 106
          </a>
          <a>
            <img
              className={styles.phoneIconOnly}
              src="/icons/Phone.png"
              height={24}
              width={24}
              alt="Albe Engineering Telephone number link"
              title="Telephone number link"
            />
          </a>
          <a href="https://app.apollo.io/#/meet/mario_polverino_fe2/30-min">
            <button className={styles.button}>Book a Consultation</button>
          </a>
        </div>
      </div>
    </Nav>
  );
}

export default header;
