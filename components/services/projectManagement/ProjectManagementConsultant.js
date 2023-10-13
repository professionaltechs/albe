import * as style from "../../../styles/services/projectManagement/projectConsultant.module.css";
import Image from "next/image";
import black from "../../../public/images/black.png";
import logo from "../../../public/images/LogoBlack.png";

export default function ProjectManagementConsultant() {
  return (
    <>
      <div className={style.plcProgrammingMain}>
        <div className={style.plcProgramming}>
          <div className={style.divTrustFrame}>
            <iframe
              className={style.trustFrame}
              src="https://glue-system.netlify.app/"
            ></iframe>
          </div>
          <div className={style.plcProgrammingData}>
            <div className={style.logoDiv}>
              <Image src={logo} className={style.logo} />
              <h1 className={style.plcProgrammingHeading}>ALBE ENGINEERING</h1>
            </div>
            <p className={style.plcProgrammingPara}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
            <button className={style.contactUsBtn}>Book a Consultation</button>
          </div>
        </div>
      </div>
    </>
  );
}
