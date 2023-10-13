import React from "react";
import * as style from "/styles/footer.module.css";

function footer() {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <a href="https://www.facebook.com/profile.php?id=100089161571379">
          <img src="/icons/Facebook.png" height={36} width={36} alt="Albe Engineering Facebook logo link" title="Facebook logo link"/>
        </a>

        <a href="https://www.linkedin.com/company/albe-engineering/">
          <img src="/icons/Linkedin.png" height={36} width={36} alt="Albe Engineering Linkedin logo link" title="Linkedin logo link"/>
        </a>
      </div>

      <div className={style.infoCompany}>
        <a href="https://goo.gl/maps/WfN3WBxpEBA88tpW8">
          <img src="/icons/Address.png" height={24} width={24} alt="Albe Engineering GoogleMap Address link" title="GoogleMap Address link"/>
          18/20 Bellevue Rd,Bellevue Hill NSW 2023
        </a>

        <a href="mailto:admin@albeengineering.com?body=Hi Albe Engineering,&subject=Enquiry for:">
          <img src="/icons/Email.png" height={24} width={24} alt="Albe Engineering Email email link" title ="Gmail email link"/>
          admin@albeengineering.com
        </a>

        <a href="tel:+61-420-784-106">
          <img src="/icons/Phone.png" height={24} width={24} alt="Albe Engineering Telephone number link" title="Telephone number link"/>
          (+61) 420 784 106
        </a>
      </div>
    </footer>
  );
}

export default footer;
