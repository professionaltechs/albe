import React from "react";
import * as style from "/styles/domotica/domoFooter.module.css";

function DomoFooter() {
  return (
    <footer className={style.footer}>
      <div className={style.brand}>
        <img
          src="/images/domotica/logoWithText.webp"
          alt="Albe Engineering Logo white"
          width={300}
          height={100}
        ></img>
        <p>First class customer service and support.</p>
      </div>

      <div className={style.infoCompany}>
        <h2>Contact Us</h2>
        <a href="tel:+61-420-784-106">
          <img src="/icons/Phone.png" width={25} height={25} alt="Albe Engineering phone number link" />
          (+61) 420 784 106
        </a>

        <a href="mailto:admin@albeengineering.com?body=Hi Albe Engineering,&subject=Enquiry for:">
          <img src="/icons/Email.png" width={25} height={25} alt="Albe Engineering Email address link" />
          admin@albeengineering.com
        </a>

        <a href="https://goo.gl/maps/WfN3WBxpEBA88tpW8">
          <img src="/icons/Address.png" width={25} height={25} alt="Albe Engineering GoogleMap Address link" />
          18/20 Bellevue Rd,Bellevue Hill NSW 2023
        </a>
      </div>
    </footer>
  );
}

export default DomoFooter;
